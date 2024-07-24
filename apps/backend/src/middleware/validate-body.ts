import { z, ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";
import { AppErrorController } from "@/components/error/app-error.controller";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";

export const validateBody = <T extends z.ZodType<unknown, z.ZodTypeDef, unknown>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map((issue: unknown) => issue);
        next(
          new AppErrorController({
            statusCode: 400,
            code: ERROR_CODES.invalid_data,
            message: ERROR_MESSAGES.invalid_data,
          }),
        );
      }
      next(
        new AppErrorController({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: ERROR_MESSAGES.internal_error,
        }),
      );
    }
  };
};
