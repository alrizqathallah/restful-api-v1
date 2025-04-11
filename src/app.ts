import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import Env from "./configs/env.config";
import HttpStatus from "./configs/http.config";
import logger from "./utils/logger";

class App {
  public readonly express: Application;

  constructor() {
    this.express = express();
    this.setupApplication();
    this.setupSecurity();
    this.setupRoutes();
  }

  private setupApplication(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cookieParser());
    this.express.use(morgan("dev"));
  }

  private setupSecurity(): void {
    this.express.use(
      cors({
        credentials: true,
        origin: Env.origin,
      })
    );
    this.express.use(helmet());
  }

  private setupRoutes(): void {
    this.express.get("/health", (req: Request, res: Response) => {
      logger.info("Health Check Status OK");
      res.status(HttpStatus.OK).json({
        status: "OK",
        message: "Health check OK",
      });
    });
  }
}

export default App;
