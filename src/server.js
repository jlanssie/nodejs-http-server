import http from "node:http";
import { runPreMiddleware, runPostMiddleware } from "./middleware/index.js";
import { routeRequest } from "./routes/index.js";

const port = 2345;

const server = http.createServer(async (req, res) => {
  try {
    await runPreMiddleware(req, res);
    routeRequest(req, res);
    runPostMiddleware(req, res);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  }
});

server.listen(port, () => {
  console.info(`\nServer listening to port ${port} ⚡\n`);
});
