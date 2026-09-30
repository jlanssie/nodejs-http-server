import Logger from "./logger.class.js";

const logger = new Logger();

export const preHook = async (req, res) => {
  logger.handleRequest(req);
};

export const postHook = (req, res) => {
  res.on("finish", () => {
    logger.handleResponse(req, res);
  });
};
