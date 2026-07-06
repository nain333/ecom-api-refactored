import logger from "../config/logger.js";

const loggerMiddleware = (req, res, next) => {
  const startTime = Date.now();

  logger.info({
    message: "Incoming Request",
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
  });

  res.on("finish", () => {
    logger.info({
      message: "Response Sent",
      statusCode: res.statusCode,
      responseTime: `${Date.now() - startTime} ms`,
    });
  });

  next();
};

export default loggerMiddleware;