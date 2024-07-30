import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateBody = <T extends z.ZodType<unknown, z.ZodTypeDef, unknown>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
};
