import { Request, Response } from "express";
import type { AppErrorInterface } from "@/components/error/app-error.controller";

export class ErrorController {
  constructor(err: AppErrorInterface, req: Request, res: Response) {
    const env = process.env.NODE_ENV || "development";
    if (env === "development") {
      this.sendErrorDev(err, req, res);
    } else if (env === "production") {
      this.sendErrorProd(err, req, res);
    }
  }

  sendErrorDev(err: AppErrorInterface, req: Request, res: Response) {
    return res.status(err.statusCode).json({
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  sendErrorProd(err: AppErrorInterface, req: Request, res: Response) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }
}
