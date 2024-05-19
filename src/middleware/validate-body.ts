import { z, ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";
import { ERROR_CODES, ERROR_MESSAGES } from "../misc/error.constants";
import { AppError } from "../utils/app-error";

export const validateBody = <T extends z.ZodType<any, z.ZodTypeDef, any>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map((issue: any) => issue);
        next(
          new AppError({
            statusCode: 400,
            code: ERROR_CODES.invalid_data,
            message: ERROR_MESSAGES.invalid_data,
          }),
        );
      }
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: ERROR_MESSAGES.internal_error,
        }),
      );
    }
  };
};
