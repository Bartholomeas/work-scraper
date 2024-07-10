import { OffersService } from "src/components/offers/service/offers.service";
import { OffersController } from "./offers.controller";
import { OffersRouter } from "./offers.router";

const service = new OffersService();
const controller = new OffersController(service);
const router = new OffersRouter(controller);
export const offersModule = {
  service,
  controller,
  router: router.getRouter(),
};
