"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersRouter = void 0;
const express_1 = __importDefault(require("express"));
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
class OffersRouter {
    constructor(offersController) {
        this.offersController = offersController;
    }
    getRouter() {
        const router = express_1.default.Router();
        puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
        router.get("/", this.offersController.getOffers);
        router.get("/:pageUrl", this.offersController.getOffers);
        return router;
    }
}
exports.OffersRouter = OffersRouter;
