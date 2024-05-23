"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const error_constants_1 = require("../misc/error.constants");
class AppError extends Error {
    constructor({ message, code = error_constants_1.ERROR_CODES.internal_error, statusCode = 500 }) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
    toString() {
        return `${this.constructor.name}: ${this.message}`;
    }
}
exports.AppError = AppError;
