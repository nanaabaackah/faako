const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": process.env.ALLOWED_ORIGIN || "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type"
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

  // TODO: Persist tenant + user records using Prisma migrations and pg queries.
  return {
    statusCode: 202,
    headers,
    body: JSON.stringify({
      ok: true,
      message: "Signup received",
      currency
    })
  };
};
