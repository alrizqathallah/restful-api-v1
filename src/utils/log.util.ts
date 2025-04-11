import { createLogger, format, transports } from "winston";
import chalk from "chalk";
import path from "path";
import fs, { existsSync } from "fs";

import envConfig from "../configs/env.config";

const logDirectory = path.resolve(__dirname, "../../logs");
if (!existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const levelColors = {
  info: chalk.blueBright,
  warn: chalk.yellowBright,
  error: chalk.redBright,
  debug: chalk.magentaBright,
};

const logger = createLogger({
  level: envConfig.env === "production" ? "debug" : "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => {
      const color =
        levelColors[level as keyof typeof levelColors] || chalk.white;
      return `${chalk.gray(`[${timestamp}]`)} ${color(level.toUpperCase())} : ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(logDirectory, "error.log"),
      level: "error",
    }),
    new transports.File({
      filename: path.join(logDirectory, "combined.log"),
    }),
  ],
});

export default {
  info: (msg: string) => logger.info(msg),
  warn: (msg: string) => logger.warn(msg),
  error: (msg: string) => logger.error(msg),
  debug: (msg: string) => logger.debug(msg),
};
