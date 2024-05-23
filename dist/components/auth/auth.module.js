"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModule = void 0;
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const auth_router_1 = require("./auth.router");
const service = new auth_service_1.AuthService();
const controller = new auth_controller_1.AuthController(service);
const router = new auth_router_1.AuthRouter(controller);
exports.authModule = {
    service,
    controller,
    router: router.getRouter(),
};
