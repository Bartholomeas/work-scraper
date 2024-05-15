import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRouter } from "./auth.router";

const authService = new AuthService();
const authController = new AuthController(authService);
const authRouter = new AuthRouter(authController);

export const authModule = {
  service: authService,
  controller: authController,
  router: authRouter.getRouter(),
};