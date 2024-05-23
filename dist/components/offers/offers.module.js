"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offersModule = void 0;
const offers_service_1 = require("./offers.service");
const offers_controller_1 = require("./offers.controller");
const offers_router_1 = require("./offers.router");
const service = new offers_service_1.OffersService();
const controller = new offers_controller_1.OffersController(service);
const router = new offers_router_1.OffersRouter(controller);
exports.offersModule = {
    service,
    controller,
    router: router.getRouter(),
};
