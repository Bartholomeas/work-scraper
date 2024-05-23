"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const zod_1 = require("zod");
const app_error_1 = require("@/utils/app-error");
const error_constants_1 = require("@/misc/error.constants");
const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const errorMessages = err.errors.map((issue) => issue);
                next(new app_error_1.AppError({
                    statusCode: 400,
                    code: error_constants_1.ERROR_CODES.invalid_data,
                    message: error_constants_1.ERROR_MESSAGES.invalid_data,
                }));
            }
            next(new app_error_1.AppError({
                statusCode: 500,
                code: error_constants_1.ERROR_CODES.internal_error,
                message: error_constants_1.ERROR_MESSAGES.internal_error,
            }));
        }
    };
};
exports.validateBody = validateBody;
