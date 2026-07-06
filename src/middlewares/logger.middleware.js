import fs from "fs";

const fsPromise = fs.promises;

const LOG_FILE = "log.log";
const SEPARATOR = "=".repeat(60);

async function writeLog(logData) {
  try {
    await fsPromise.appendFile(LOG_FILE, logData);
  } catch (err) {
    console.error("Logger Error:", err.message);
  }
}

const loggerMiddleware = (req, res, next) => {
  const startTime = Date.now();

  const requestLog = `
${SEPARATOR}
Time          : ${new Date().toISOString()}
Request Received

Method        : ${req.method}
Route         : ${req.originalUrl}
IP Address    : ${req.ip}

Query Params  : ${JSON.stringify(req.query)}
Route Params  : ${JSON.stringify(req.params)}
Request Body  : ${JSON.stringify(req.body, null, 2)}

${SEPARATOR}

`;

  // Log the incoming request
  writeLog(requestLog);

  // Log the response after it has been sent
  res.on("finish", () => {
    const responseTime = Date.now() - startTime;

    const responseLog = `
Response Sent

Status Code   : ${res.statusCode}
Response Time : ${responseTime} ms

${SEPARATOR}

`;

    writeLog(responseLog);
  });

  next();
};

export default loggerMiddleware;