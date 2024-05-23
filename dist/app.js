"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const constants_1 = require("@/misc/constants");
const app_error_1 = require("@/utils/app-error");
const error_handler_1 = require("@/middleware/error-handler");
const auth_module_1 = require("@/components/auth/auth.module");
const offers_module_1 = require("@/components/offers/offers.module");
const error_controller_1 = require("@/components/error/error.controller");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.options("*", (0, cors_1.default)());
exports.app.use((0, helmet_1.default)());
exports.app.use((0, compression_1.default)());
const limiter = (0, express_rate_limit_1.default)({
    limit: 100,
    message: "Too many requests from this IP, please try again in an minute!",
});
exports.app.use("/api", limiter);
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false, limit: "10kb" }));
exports.app.use((0, cookie_parser_1.default)());
if (process.env.NODE_ENV === "development")
    exports.app.use((0, morgan_1.default)("dev"));
1;
exports.app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
exports.app.use(constants_1.BASE_URL + "/auth", auth_module_1.authModule.router);
exports.app.use(constants_1.BASE_URL + "/offers", offers_module_1.offersModule.router);
exports.app.use(error_handler_1.errorHandler);
exports.app.all("*", (req, res, next) => {
    next(new app_error_1.AppError({
        message: `Cannot find ${req.originalUrl}`,
        statusCode: 404,
    }));
});
exports.app.use((err, req, res) => new error_controller_1.ErrorController(err, req, res));
