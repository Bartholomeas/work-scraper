import express, { type Request, type Response } from "express";

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
    router.route("/sign-up").get(validateBody(signupSchema), this.authController.signUp);
    // router.post("/sign-up", validateBody(signupSchema), this.authController.signUp);
    // router.post("/sign-in", validateBody(signupSchema), this.authController.signUp);
    router.get("/test", (req: Request, res: Response) => {
      // console.log("HEHE", req.requestTime);
      res.send("jest ! ! ! !");
    });
    return router;
  }
}

export { AuthRouter };
