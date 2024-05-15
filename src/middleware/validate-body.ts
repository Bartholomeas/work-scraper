import { z, ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";

export const validateBody = <T extends z.ZodType<any, any>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(400).json({ error: "Invalid data", details: errorMessages });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  };
};