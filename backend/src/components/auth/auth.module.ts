import { AuthController } from "src/components/auth/auth.controller";
import { AuthService } from "src/components/auth/auth.service";
import { AuthRouter } from "./auth.router";

const service = new AuthService();
const controller = new AuthController(service);
const router = new AuthRouter(controller);

export const authModule = {
  service,
  controller,
  router: router.getRouter(),
};
