import { NextFunction, Request, Response } from "express";
import { NewsService } from "./news.service";
import { ErrorHandlerController } from "../error/error-handler.controller";

import { newsSchemaResponse } from "shared/src/news/news.schemas";

class NewsController {
  constructor(private readonly service: NewsService) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getAll();
      const parsedData = newsSchemaResponse.parse(data);

      res.status(200).json(parsedData);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
}
export { NewsController };
