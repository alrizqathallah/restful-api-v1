import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import envConfig from "./configs/env.config";
import HttpStatus from "./configs/http.config";
import logUtil from "./utils/log.util";

class App {
  public readonly express: Application;

  constructor() {
    this.express = express();
    this.setupMiddlewares();
    this.setupSecurity();
    this.setupHealthCheck();
  }

  private setupMiddlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cookieParser());
    this.express.use(morgan("dev"));
  }

  private setupSecurity(): void {
    this.express.use(
      cors({
        credentials: true,
        origin: envConfig.origin,
      })
    );
    this.express.use(helmet());
  }

  private setupHealthCheck(): void {
    this.express.get("/health", (req: Request, res: Response) => {
      logUtil.info("Health check passed");
      res.status(HttpStatus.OK).json({
        status: "OK",
        message: "Server is healthy",
      });
    });
  }
}

export default App;
