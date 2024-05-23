"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_body_1 = require("@/middleware/validate-body");
const auth_schemas_1 = require("@/schemas/auth.schemas");
class AuthRouter {
    constructor(authController) {
        this.authController = authController;
    }
    getRouter() {
        const router = express_1.default.Router();
        router.get("/me", this.authController.protectRoute, this.authController.getMe);
        router.post("/sign-up", (0, validate_body_1.validateBody)(auth_schemas_1.signUpSchema), this.authController.signUp);
        router.post("/sign-in", (0, validate_body_1.validateBody)(auth_schemas_1.signInSchema), this.authController.signIn);
        router.delete("/logout", this.authController.protectRoute, this.authController.logout);
        return router;
    }
}
exports.AuthRouter = AuthRouter;
