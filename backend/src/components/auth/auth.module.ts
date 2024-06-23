import { AuthService } from "@/components/auth/auth.service";
import { AuthController } from "@/components/auth/auth.controller";
import { AuthRouter } from "@/components/auth/auth.router";

const service = new AuthService();
const controller = new AuthController(service);
const router = new AuthRouter(controller);

export const authModule = {
  service,
  controller,
  router: router.getRouter(),
};
