import { NextFunction, Request, Response } from "express";
import { NewsService } from "./news.service";
import { ErrorHandlerController } from "../error/error-handler.controller";

class NewsController {
  constructor(private readonly service: NewsService) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Kurdeten", this.service);
      const data = await this.service.getAll();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
}
export { NewsController };
