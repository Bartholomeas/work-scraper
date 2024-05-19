import { AppErrorInterface } from "../utils/app-error";
import type { NextFunction, Request, Response } from "express";

const errorHandler = (err: AppErrorInterface, req: Request, res: Response, next: NextFunction) => {
  let { statusCode, message } = err;

  const response = {
    status: "error",
    statusCode,
    message,
  };

  res.status(statusCode).json(response);
};

export { errorHandler };