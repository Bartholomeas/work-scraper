import express from "express";

import { validateBody } from "../../middleware/validate-body";
import { signupSchema } from "../../schemas/auth.schemas";
import { AuthController } from "./auth.controller";

class AuthRouter {
  private authController: AuthController;

  constructor(authController: AuthController) {
    this.authController = authController;
  }

  getRouter() {
    const router = express.Router();
    router.post("/sign-up", validateBody(signupSchema), this.authController.signUp);
    return router;
  }
}

export { AuthRouter };
