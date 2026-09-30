import { getColoredStatusString, getColoredString } from "../utils/log.util.js";

export default class Logger {
  handleRequest(req) {
    req._startTime = performance.now();

    const time = getColoredString("dim", new Date().toISOString());
    const method = getColoredString("cyan", req.method.padEnd(6));

    console.info(`${time} ${getColoredString("green", "⇢")} ${method} ${req.url}`);
  }

  handleResponse(req, res) {
    const duration = req._startTime ? `${(performance.now() - req._startTime).toFixed(2)}ms` : "";

    const time = getColoredString("dim", new Date().toISOString());
    const status = getColoredStatusString(res.statusCode);
    const latency = getColoredString("dim", duration);

    console.info(`${time} ${getColoredString("magenta", "⇠")} ${status} ${req.url} ${latency}`);
  }
}
