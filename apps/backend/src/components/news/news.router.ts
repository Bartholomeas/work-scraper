import express, { type Router } from "express";
import { NewsController } from "./news.controller";

class NewsRouter {
  constructor(private readonly controller: NewsController) {}

  getRouter(): Router {
    const router = express.Router();

    router.get("/", this.controller.getAll);

    return router;
  }
}

export { NewsRouter };
