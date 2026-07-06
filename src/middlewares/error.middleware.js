import logger from "../config/logger.js";

const errorHandler = (err, req, res, next) => {

  // Log the error
  logger.error({
    message: err.message,
    statusCode:err.statusCode,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    stack: err.stack,
  });

  // Send response
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;