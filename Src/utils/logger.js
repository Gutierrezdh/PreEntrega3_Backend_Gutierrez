const winston = require("winston");
const dotenv = require("dotenv");

dotenv.config();

const MODE = process.env.MODE || "dev";

const checkEnvirontment = () => {
    if (MODE.toUpperCase() === "DEV") {
    return devLogger;
    }
    return prodLogger;
};

const devLogger = winston.createLogger({
    transports: [new winston.transports.Console({ level: "debug" })],
});

const prodLogger = winston.createLogger({
    transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({
    filename: "./errors.log",
    level: "error",
    }),
],
});

const addLogger = (req, res, next) => {
    req.logger = checkEnvirontment();
    const textDate = new Date().toISOString();
    req.logger.http(`${req.method} - ${req.url} - ${textDate}`);
    next();
};

module.exports = { addLogger };
