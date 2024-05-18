import { z, ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";
import { ERROR_CODES, ERROR_MESSAGES } from "../misc/error.constants";

export const validateBody = <T extends z.ZodType<any, any>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map((issue: any) => (issue));
        res.status(400).json({
          code: ERROR_CODES.invalid_data,
          error: ERROR_MESSAGES.invalid_data,
          details: errorMessages,
        });
      }
      res.status(500).json({
        code: ERROR_CODES.internal_error,
        error: ERROR_MESSAGES.internal_error,
      });
    }
  };
};