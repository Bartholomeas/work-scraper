import { NewsController } from "./news.controller";
import { NewsRouter } from "./news.router";
import { NewsService } from "./news.service";

const service = new NewsService();
const controller = new NewsController(service);
const router = new NewsRouter(controller);

export const newsModule = {
  service,
  controller,
  router: router.getRouter(),
};
