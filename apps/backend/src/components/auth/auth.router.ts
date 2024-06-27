import express, { type Router } from "express";

import { validateBody } from "@/middleware/validate-body";
import { signInSchema, signUpSchema } from "@/schemas/auth.schemas";
import { AuthController } from "./auth.controller";

class AuthRouter {
  private authController: AuthController;

  constructor(authController: AuthController) {
    this.authController = authController;
  }

  public getRouter(): Router {
    const router = express.Router();
    router.get("/me", this.authController.protectRoute, this.authController.getMe);
    router.post("/sign-up", validateBody(signUpSchema), this.authController.signUp);
    router.post("/sign-in", validateBody(signInSchema), this.authController.signIn);
    router.delete("/logout", this.authController.protectRoute, this.authController.logout);
    return router;
  }
}

export { AuthRouter };
