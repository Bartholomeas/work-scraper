"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../misc/constants");
exports.signUpSchema = zod_1.z
    .object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
})
    .refine(({ password }) => constants_1.PASSWORD_REGEX.test(password), {
    message: "Password must contain at least one number, big letter and special sign.",
    path: ["password"],
});
exports.signInSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
