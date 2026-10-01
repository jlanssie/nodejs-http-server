import Router from "./router.class.js";
import { matchRoute } from "../utils/index.js";

export const routeRequest = (req, res) => {
  const router = new Router().initRoutes();

  for (const route of router.getRoutes()) {
    if (matchRoute(route, req)) {
      return route.handler(req, res);
    }
  }

  // Default response

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Default response" }));
};
