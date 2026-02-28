const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const appRoot = path.resolve(__dirname, "..");

const loadEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const contents = fs.readFileSync(filePath, "utf8");
  const lines = contents.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex <= 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) {
      continue;
    }

    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
};

loadEnvFile(path.join(appRoot, ".env"));

const { handler: signupHandler } = require("../netlify/functions/signup");
const { handler: healthHandler } = require("../netlify/functions/health");

const routeHandlers = {
  "/signup": signupHandler,
  "/health": healthHandler
};

const send = (response, statusCode, headers, body) => {
  response.writeHead(statusCode, headers);
  response.end(body);
};

const createEvent = async (request, body) => {
  const requestUrl = new URL(
    request.url || "/",
    `http://${request.headers.host || "127.0.0.1"}`
  );

  return {
    httpMethod: request.method || "GET",
    headers: request.headers,
    body,
    path: requestUrl.pathname,
    rawUrl: requestUrl.toString(),
    rawQuery: requestUrl.search.slice(1),
    queryStringParameters: Object.fromEntries(requestUrl.searchParams.entries())
  };
};

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(
    request.url || "/",
    `http://${request.headers.host || "127.0.0.1"}`
  );
  const handler = routeHandlers[requestUrl.pathname];

  if (!handler) {
    send(
      response,
      404,
      { "content-type": "application/json" },
      JSON.stringify({ error: "Not found" })
    );
    return;
  }

  const bodyChunks = [];
  request.on("data", (chunk) => {
    bodyChunks.push(chunk);
  });

  request.on("end", async () => {
    const body = Buffer.concat(bodyChunks).toString("utf8");

    try {
      const result = await handler(await createEvent(request, body));
      const statusCode = result?.statusCode || 200;
      const headers = result?.headers || { "content-type": "application/json" };
      const responseBody =
        typeof result?.body === "string"
          ? result.body
          : JSON.stringify(result?.body || {});

      send(response, statusCode, headers, responseBody);
    } catch (error) {
      send(
        response,
        500,
        { "content-type": "application/json" },
        JSON.stringify({
          error: "Local API server error",
          message: error instanceof Error ? error.message : String(error)
        })
      );
    }
  });

  request.on("error", (error) => {
    send(
      response,
      500,
      { "content-type": "application/json" },
      JSON.stringify({
        error: "Request stream error",
        message: error instanceof Error ? error.message : String(error)
      })
    );
  });
});

const port = Number.parseInt(process.env.PORT || "8888", 10);
const host = process.env.HOST || "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Faako API dev server running at http://${host}:${port}`);
  console.log(`Health check: http://${host}:${port}/health`);
  console.log(`Signup endpoint: http://${host}:${port}/signup`);
});
