import Logger from "./logger.class.js";

const logger = new Logger();

export const runPreMiddleware = async (req, res) => {
  logger.logRequest(req);
};

export const runPostMiddleware = (req, res) => {
  res.on("finish", () => {
    logger.logResponse(req, res);
  });
};
