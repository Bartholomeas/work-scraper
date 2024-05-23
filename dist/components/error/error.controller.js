"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorController = void 0;
class ErrorController {
    constructor(err, req, res) {
        const env = process.env.NODE_ENV || "development";
        if (env === "development") {
            this.sendErrorDev(err, req, res);
        }
        else if (env === "production") {
            this.sendErrorProd(err, req, res);
        }
    }
    sendErrorDev(err, req, res) {
        return res.status(err.statusCode).json({
            // status: err.statusCode,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }
    sendErrorProd(err, req, res) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    }
}
exports.ErrorController = ErrorController;
