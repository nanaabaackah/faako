const { Pool } = require("pg");
const nodemailer = require("nodemailer");

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": process.env.ALLOWED_ORIGIN || "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type"
};

const pool =
  global.__faakoPgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL
  });

if (!global.__faakoPgPool) {
  global.__faakoPgPool = pool;
}

const PACKAGE_RULES = {
  starter: {
    label: "Starter",
    maxModules: 4
  },
  professional: {
    label: "Professional",
    maxModules: 8
  },
  enterprise: {
    label: "Enterprise",
    maxModules: null
  }
};

const TIER_RANK = {
  starter: 1,
  professional: 2,
  enterprise: 3
};

const MODULE_CATALOG = {
  website: { minTier: "starter" },
  payments: { minTier: "starter" },
  bookings: { minTier: "starter" },
  inventory: { minTier: "professional" },
  orders: { minTier: "professional" },
  crm: { minTier: "professional" },
  dashboard: { minTier: "professional" },
  reports: { minTier: "professional" },
  delivery: { minTier: "professional" },
  scheduler: { minTier: "professional" },
  hr: { minTier: "enterprise" },
  integrations: { minTier: "enterprise" },
  analytics: { minTier: "enterprise" },
  support: { minTier: "enterprise" }
};

const ALLOWED_COMMUNICATION_CHANNELS = new Set([
  "whatsapp",
  "phone-calls",
  "email",
  "instagram",
  "facebook",
  "walk-in",
  "website-chat",
  "sms",
  "other"
]);

const createId = () =>
  `id_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

const normalizeOptionalText = (value, maxLength = 2000) => {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    return null;
  }

  return trimmed.slice(0, maxLength);
};

const normalizeHexColor = (value) => {
  const normalized = normalizeOptionalText(value, 7);
  if (!normalized) {
    return null;
  }

  return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(normalized) ? normalized : null;
};

const normalizePackageTier = (value) => {
  const normalized = normalizeOptionalText(value, 32);
  if (!normalized) {
    return null;
  }

  const key = normalized.toLowerCase();
  return Object.prototype.hasOwnProperty.call(PACKAGE_RULES, key) ? key : null;
};

const normalizeModuleSelection = (value) => {
  let rawItems = [];

  if (Array.isArray(value)) {
    rawItems = value;
  } else if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) {
      return [];
    }

    if (trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          rawItems = parsed;
        }
      } catch (error) {
        rawItems = trimmed.split(",");
      }
    } else {
      rawItems = trimmed.split(",");
    }
  }

  return rawItems
    .map((item) => String(item || "").trim().toLowerCase())
    .filter(Boolean);
};

const isModuleAvailableForPackage = (moduleId, packageTier) => {
  const moduleConfig = MODULE_CATALOG[moduleId];
  if (!moduleConfig) {
    return false;
  }

  const moduleRank = TIER_RANK[moduleConfig.minTier] || 0;
  const packageRank = TIER_RANK[packageTier] || 0;

  return packageRank >= moduleRank;
};

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

const buildUniqueSlug = async (dbClient, companyName) => {
  const base = slugify(companyName);
  if (!base) {
    return `org-${Date.now().toString(36)}`;
  }

  let candidate = base;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const existing = await dbClient.query(
      'SELECT 1 FROM "Organization" WHERE "slug" = $1 LIMIT 1',
      [candidate]
    );

    if (existing.rowCount === 0) {
      return candidate;
    }

    candidate = `${base}-${Math.floor(Math.random() * 9000) + 1000}`;
  }

  return `${base}-${Date.now().toString(36)}`;
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatPreviewValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "N/A";
  }
  if (value === null || value === undefined || value === "") {
    return "N/A";
  }
  return String(value);
};

const buildPreviewTableHtml = (entries) =>
  entries
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 10px;border:1px solid #e3e3e3;background:#fafafa;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label
          )}</td>
          <td style="padding:8px 10px;border:1px solid #e3e3e3;vertical-align:top;">${escapeHtml(
            formatPreviewValue(value)
          )}</td>
        </tr>
      `
    )
    .join("");

const buildAdminPreviewHtml = (submission) => {
  const previewRows = [
    ["Request ID", submission.signupRequestId],
    ["Submitted At", submission.submittedAtIso],
    ["Company Name", submission.companyName],
    ["Contact Name", submission.contactName],
    ["Email", submission.normalizedEmail],
    ["Phone", submission.phone],
    ["Business Type", submission.businessType],
    ["Team Size", submission.teamSize],
    ["Preferred Currency", submission.selectedCurrency],
    ["Timeline Preference", submission.timelinePreference],
    ["Package Tier", submission.packageTier],
    ["Requested Modules", submission.requestedModules],
    ["Communication Channels", submission.communicationChannels],
    ["Current Workflow", submission.currentWorkflow],
    ["Pain Points", submission.painPoints],
    ["Project Details", submission.projectDetails],
    ["Additional Notes", submission.additionalNotes],
    ["Website URL", submission.websiteUrl],
    ["Logo URL", submission.logoUrl],
    ["Primary Color", submission.brandPrimaryColor],
    ["Secondary Color", submission.brandSecondaryColor],
    ["Organization ID", submission.organizationId]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#1f1f1f;line-height:1.45;">
      <h2 style="margin:0 0 12px;">New Faako Client Intake</h2>
      <p style="margin:0 0 16px;">A new signup form was submitted and saved to the database.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:900px;">
        ${buildPreviewTableHtml(previewRows)}
      </table>
    </div>
  `;
};

const buildClientConfirmationHtml = (submission) => {
  const summaryRows = [
    ["Company", submission.companyName],
    ["Package", submission.packageTier],
    ["Modules", submission.requestedModules],
    ["Timeline", submission.timelinePreference]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#1f1f1f;line-height:1.45;">
      <h2 style="margin:0 0 12px;">We received your Faako intake</h2>
      <p style="margin:0 0 16px;">Hi ${escapeHtml(
        submission.contactName || "there"
      )}, thanks for sharing your business details with Faako.</p>
      <p style="margin:0 0 16px;">Our team will review your request and reply with next steps within one business day.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px;">
        ${buildPreviewTableHtml(summaryRows)}
      </table>
      <p style="margin:16px 0 0;">Reference: <strong>${escapeHtml(
        submission.signupRequestId
      )}</strong></p>
    </div>
  `;
};

const sendSignupPreviewEmails = async (submission) => {
  const smtpHost = normalizeOptionalText(process.env.SMTP_HOST, 255);
  const smtpPortValue = normalizeOptionalText(process.env.SMTP_PORT, 8) || "587";
  const smtpPort = Number.parseInt(smtpPortValue, 10);
  const smtpUser = normalizeOptionalText(process.env.SMTP_USER, 255);
  const smtpPass = normalizeOptionalText(process.env.SMTP_PASS, 255);
  const smtpFrom =
    normalizeOptionalText(process.env.SMTP_FROM, 255) ||
    smtpUser ||
    "no-reply@faako.app";
  const adminEmail =
    normalizeOptionalText(process.env.INTAKE_ADMIN_EMAIL, 255) ||
    normalizeOptionalText(process.env.ADMIN_EMAIL, 255);

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return;
  }

  const smtpSecureRaw = String(process.env.SMTP_SECURE || "").trim().toLowerCase();
  const smtpSecure =
    smtpSecureRaw === "true" || smtpSecureRaw === "1" || smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const sendJobs = [];

  if (adminEmail) {
    sendJobs.push(
      transporter.sendMail({
        from: smtpFrom,
        to: adminEmail,
        subject: `[Faako] New Intake - ${submission.companyName}`,
        html: buildAdminPreviewHtml(submission)
      })
    );
  }

  if (submission.normalizedEmail) {
    sendJobs.push(
      transporter.sendMail({
        from: smtpFrom,
        to: submission.normalizedEmail,
        subject: "Faako intake received",
        html: buildClientConfirmationHtml(submission)
      })
    );
  }

  if (sendJobs.length === 0) {
    return;
  }

  const results = await Promise.allSettled(sendJobs);
  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Signup email send failed:", result.reason);
    }
  });
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

  const companyName = normalizeOptionalText(payload.companyName, 180);
  const normalizedEmail = normalizeEmail(payload.email);
  const selectedCurrency = normalizeOptionalText(payload.currency, 8) || "USD";

  if (!companyName || !normalizedEmail) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "companyName and email are required" })
    };
  }

  const packageTier = normalizePackageTier(payload.packageTier);
  if (!packageTier) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "packageTier is required and must be starter, professional, or enterprise"
      })
    };
  }

  const requestedModules = [
    ...new Set(normalizeModuleSelection(payload.requestedModules))
  ];

  if (requestedModules.length === 0) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Please select at least one module" })
    };
  }

  const unknownModules = requestedModules.filter(
    (moduleId) => !Object.prototype.hasOwnProperty.call(MODULE_CATALOG, moduleId)
  );

  if (unknownModules.length > 0) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "One or more selected modules are invalid",
        modules: unknownModules
      })
    };
  }

  const unavailableModules = requestedModules.filter(
    (moduleId) => !isModuleAvailableForPackage(moduleId, packageTier)
  );

  if (unavailableModules.length > 0) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: `Selected package does not include ${unavailableModules.join(", ")}`,
        modules: unavailableModules
      })
    };
  }

  const packageRule = PACKAGE_RULES[packageTier];
  if (
    packageRule.maxModules !== null &&
    requestedModules.length > packageRule.maxModules
  ) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: `${packageRule.label} allows up to ${packageRule.maxModules} modules`
      })
    };
  }

  const teamSize = normalizeOptionalText(payload.teamSize, 32);
  const contactName = normalizeOptionalText(payload.contactName || payload.fullName, 120);
  const fullName = contactName;
  const phone = normalizeOptionalText(payload.phone, 60);
  const businessType = normalizeOptionalText(payload.businessType, 80);
  const currentWorkflow = normalizeOptionalText(payload.currentWorkflow, 2500);
  const communicationChannels = [
    ...new Set(normalizeModuleSelection(payload.communicationChannels))
  ];
  const websiteUrl = normalizeOptionalText(payload.websiteUrl, 300);
  const logoUrl = normalizeOptionalText(payload.logoUrl, 300);
  const brandPrimaryColor = normalizeHexColor(payload.brandPrimaryColor);
  const brandSecondaryColor = normalizeHexColor(payload.brandSecondaryColor);
  const timelinePreference = normalizeOptionalText(payload.timelinePreference, 80);
  const painPoints = normalizeOptionalText(payload.painPoints, 2500);
  const projectDetails = normalizeOptionalText(payload.projectDetails, 2500);
  const additionalNotes = normalizeOptionalText(payload.additionalNotes, 2500);

  if (!currentWorkflow) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "Please describe your current workflow"
      })
    };
  }

  if (communicationChannels.length === 0) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "Please choose at least one current communication channel"
      })
    };
  }

  const unknownChannels = communicationChannels.filter(
    (channel) => !ALLOWED_COMMUNICATION_CHANNELS.has(channel)
  );
  if (unknownChannels.length > 0) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "One or more communication channels are invalid",
        channels: unknownChannels
      })
    };
  }

  const dbClient = await pool.connect();

  try {
    await dbClient.query("BEGIN");

    const baseSlug = slugify(companyName);
    let organization = null;

    if (baseSlug.length > 0) {
      const organizationResult = await dbClient.query(
        'SELECT "id", "slug", "primaryEmail", "teamSize", "currency" FROM "Organization" WHERE "slug" = $1 LIMIT 1',
        [baseSlug]
      );
      organization = organizationResult.rows[0] || null;
    }

    if (!organization) {
      const slug = await buildUniqueSlug(dbClient, companyName);
      const organizationId = createId();
      const insertOrganization = await dbClient.query(
        `
          INSERT INTO "Organization" (
            "id",
            "name",
            "slug",
            "status",
            "primaryEmail",
            "teamSize",
            "currency",
            "createdAt",
            "updatedAt"
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
          RETURNING "id", "slug", "primaryEmail", "teamSize", "currency"
        `,
        [
          organizationId,
          companyName,
          slug,
          "PENDING",
          normalizedEmail,
          teamSize,
          selectedCurrency
        ]
      );

      organization = insertOrganization.rows[0];
    } else {
      const updates = [];
      const values = [];

      if (!organization.primaryEmail && normalizedEmail) {
        values.push(normalizedEmail);
        updates.push(`"primaryEmail" = $${values.length}`);
      }

      if (!organization.teamSize && teamSize) {
        values.push(teamSize);
        updates.push(`"teamSize" = $${values.length}`);
      }

      if (!organization.currency && selectedCurrency) {
        values.push(selectedCurrency);
        updates.push(`"currency" = $${values.length}`);
      }

      if (updates.length > 0) {
        values.push(organization.id);

        const updatedOrganization = await dbClient.query(
          `
            UPDATE "Organization"
            SET ${updates.join(", ")}, "updatedAt" = NOW()
            WHERE "id" = $${values.length}
            RETURNING "id", "slug", "primaryEmail", "teamSize", "currency"
          `,
          values
        );

        organization = updatedOrganization.rows[0];
      }
    }

    const userInsert = await dbClient.query(
      `
        INSERT INTO "User" (
          "id",
          "email",
          "fullName",
          "status",
          "createdAt",
          "updatedAt"
        )
        VALUES ($1, $2, $3, $4, NOW(), NOW())
        ON CONFLICT ("email")
        DO UPDATE
        SET
          "fullName" = COALESCE(EXCLUDED."fullName", "User"."fullName"),
          "updatedAt" = NOW()
        RETURNING "id"
      `,
      [createId(), normalizedEmail, fullName, "PENDING"]
    );

    const user = userInsert.rows[0];

    await dbClient.query(
      `
        INSERT INTO "Membership" (
          "id",
          "organizationId",
          "userId",
          "role",
          "createdAt"
        )
        VALUES ($1, $2, $3, $4, NOW())
        ON CONFLICT ("organizationId", "userId")
        DO NOTHING
      `,
      [createId(), organization.id, user.id, "owner"]
    );

    const signupRequestId = createId();

    await dbClient.query(
      `
        INSERT INTO "SignupRequest" (
          "id",
          "organizationId",
          "userId",
          "companyName",
          "email",
          "contactName",
          "phone",
          "teamSize",
          "currency",
          "websiteUrl",
          "logoUrl",
          "brandPrimaryColor",
          "brandSecondaryColor",
          "packageTier",
          "requestedModules",
          "businessType",
          "currentWorkflow",
          "communicationChannels",
          "timelinePreference",
          "projectDetails",
          "painPoints",
          "additionalNotes",
          "status",
          "source",
          "createdAt",
          "updatedAt"
        )
        VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8,
          $9,
          $10,
          $11,
          $12,
          $13,
          $14,
          $15,
          $16,
          $17,
          $18,
          $19,
          $20,
          $21,
          $22,
          $23,
          $24,
          NOW(),
          NOW()
        )
      `,
      [
        signupRequestId,
        organization.id,
        user.id,
        companyName,
        normalizedEmail,
        contactName,
        phone,
        teamSize,
        selectedCurrency,
        websiteUrl,
        logoUrl,
        brandPrimaryColor,
        brandSecondaryColor,
        packageTier,
        requestedModules,
        businessType,
        currentWorkflow,
        communicationChannels,
        timelinePreference,
        projectDetails,
        painPoints,
        additionalNotes,
        "NEW",
        "website"
      ]
    );

    await dbClient.query("COMMIT");

    await sendSignupPreviewEmails({
      signupRequestId,
      submittedAtIso: new Date().toISOString(),
      organizationId: organization.id,
      companyName,
      contactName,
      normalizedEmail,
      phone,
      businessType,
      teamSize,
      selectedCurrency,
      timelinePreference,
      packageTier,
      requestedModules,
      communicationChannels,
      currentWorkflow,
      painPoints,
      projectDetails,
      additionalNotes,
      websiteUrl,
      logoUrl,
      brandPrimaryColor,
      brandSecondaryColor
    });

    return {
      statusCode: 202,
      headers,
      body: JSON.stringify({
        ok: true,
        message: "Signup received",
        requestId: signupRequestId,
        organizationId: organization.id,
        packageTier,
        requestedModules,
        currency: selectedCurrency
      })
    };
  } catch (error) {
    await dbClient.query("ROLLBACK").catch(() => {});

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Unable to save signup request" })
    };
  } finally {
    dbClient.release();
  }
};
