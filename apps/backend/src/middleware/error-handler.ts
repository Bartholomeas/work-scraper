import type { NextFunction, Request, Response } from "express";
import type { AppErrorInterface, AppErrorProps } from "@/components/error/app-error.controller";

const errorHandler = (err: AppErrorInterface & AppErrorProps, req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message, code } = err;

  const response = {
    statusCode,
    code,
    message,
  };

  res.status(statusCode).json(response);
};

export { errorHandler };
