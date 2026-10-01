import { getColoredStatusString, getColoredString } from "../utils/log.util.js";

export default class Logger {
  handleRequest(req) {
    req._startTime = performance.now();

    const timeString = getColoredString("dim", new Date().toISOString());
    const methodString = getColoredString("cyan", req.method.padEnd(6));

    console.info(`${timeString} ${getColoredString("green", "⇢")} ${methodString} ${req.url}`);
  }

  handleResponse(req, res) {
    const durationString = req._startTime ? `${(performance.now() - req._startTime).toFixed(2)}ms` : "";
    const timeString = getColoredString("dim", new Date().toISOString());
    const statusString = getColoredStatusString(res.statusCode);
    const latencyString = getColoredString("dim", durationString);

    console.info(`${timeString} ${getColoredString("cyan", "⇠")} ${statusString} ${req.url} ${latencyString}`);
  }
}
