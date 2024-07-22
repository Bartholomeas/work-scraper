import type { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

export const guardSecret = (secret: string | undefined) => (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.secret)
    next(
      new AppError({
        statusCode: 404,
        code: ERROR_CODES.invalid_data,
        message: "Secret is empty.",
      }),
    );

  if (req.query?.secret === secret) {
    console.log("Correct secret");
    next();
  } else
    next(
      new AppError({
        statusCode: 404,
        code: ERROR_CODES.invalid_data,
        message: "Wrong secret phrase",
      }),
    );
};
