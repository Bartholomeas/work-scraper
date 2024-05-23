"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const { statusCode, message, code } = err;
    console.log("EROR HANDLER", err);
    const response = {
        statusCode,
        code,
        message,
    };
    res.status(statusCode).json(response);
};
exports.errorHandler = errorHandler;
