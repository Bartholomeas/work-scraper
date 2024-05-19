import { type NextFunction, type Request, type Response } from "express";

export const catchAsync =
  async <T extends [Request, Response, NextFunction]>(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
