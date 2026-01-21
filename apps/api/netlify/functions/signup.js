const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": process.env.ALLOWED_ORIGIN || "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type"
};

const { PrismaClient } = require("@prisma/client");

const prisma = global.__faakoPrisma || new PrismaClient();
if (!global.__faakoPrisma) {
  global.__faakoPrisma = prisma;
}

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

const buildUniqueSlug = async (companyName) => {
  const base = slugify(companyName);
  if (!base) {
    return `org-${Date.now().toString(36)}`;
  }

  let candidate = base;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const existing = await prisma.organization.findUnique({
      where: { slug: candidate }
    });
    if (!existing) {
      return candidate;
    }
    candidate = `${base}-${Math.floor(Math.random() * 9000) + 1000}`;
  }

  return `${base}-${Date.now().toString(36)}`;
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON payload" })
    };
  }

  const { companyName, email, currency = "USD" } = payload;
  if (!companyName || !email) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "companyName and email are required" })
    };
  }

  const normalizedEmail = normalizeEmail(email);
  const teamSize = payload.teamSize ? String(payload.teamSize) : null;
  const trimmedCompany = String(companyName).trim();
  const fullName =
    typeof payload.fullName === "string" ? payload.fullName.trim() : null;

  if (!trimmedCompany || !normalizedEmail) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "companyName and email are required" })
    };
  }

  try {
    const baseSlug = slugify(trimmedCompany);
    let organization =
      baseSlug.length > 0
        ? await prisma.organization.findUnique({
            where: { slug: baseSlug }
          })
        : null;

    if (!organization) {
      const slug = await buildUniqueSlug(trimmedCompany);
      organization = await prisma.organization.create({
        data: {
          name: trimmedCompany,
          slug,
          primaryEmail: normalizedEmail,
          teamSize,
          currency,
          status: "PENDING"
        }
      });
    } else {
      const updateData = {};
      if (!organization.primaryEmail && normalizedEmail) {
        updateData.primaryEmail = normalizedEmail;
      }
      if (!organization.teamSize && teamSize) {
        updateData.teamSize = teamSize;
      }
      if (!organization.currency && currency) {
        updateData.currency = currency;
      }
      if (Object.keys(updateData).length > 0) {
        organization = await prisma.organization.update({
          where: { id: organization.id },
          data: updateData
        });
      }
    }

    const user = await prisma.user.upsert({
      where: { email: normalizedEmail },
      update: fullName ? { fullName } : {},
      create: {
        email: normalizedEmail,
        fullName,
        status: "PENDING"
      }
    });

    await prisma.membership.upsert({
      where: {
        organizationId_userId: {
          organizationId: organization.id,
          userId: user.id
        }
      },
      update: {},
      create: {
        organizationId: organization.id,
        userId: user.id,
        role: "owner"
      }
    });

    const signupRequest = await prisma.signupRequest.create({
      data: {
        organizationId: organization.id,
        userId: user.id,
        companyName: trimmedCompany,
        email: normalizedEmail,
        teamSize,
        currency,
        status: "NEW",
        source: "website"
      }
    });

    return {
      statusCode: 202,
      headers,
      body: JSON.stringify({
        ok: true,
        message: "Signup received",
        requestId: signupRequest.id,
        organizationId: organization.id,
        currency
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Unable to save signup request" })
    };
  }

};
