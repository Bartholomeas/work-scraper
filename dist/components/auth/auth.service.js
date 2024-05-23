"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const app_error_1 = require("@/utils/app-error");
const error_constants_1 = require("@/misc/error.constants");
class AuthService {
    constructor() {
        this.createUser = (data) => __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.prisma.user.findFirst({
                where: {
                    email: data.email,
                },
            });
            if (existingUser)
                throw new app_error_1.AppError({
                    message: error_constants_1.ERROR_MESSAGES.user_exists,
                    code: error_constants_1.ERROR_CODES.user_exists,
                    statusCode: 400,
                });
            const _a = yield this.prisma.user.create({
                data,
            }), { password } = _a, user = __rest(_a, ["password"]);
            return user;
        });
        this.prisma = new client_1.PrismaClient();
    }
    getUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, email }) {
            var _b;
            const userData = (_b = (yield this.prisma.user.findFirst({
                where: { OR: [{ id }, { email }] },
            }))) !== null && _b !== void 0 ? _b : undefined;
            const _c = userData !== null && userData !== void 0 ? userData : {}, { password } = _c, user = __rest(_c, ["password"]);
            return { password, user };
        });
    }
}
exports.AuthService = AuthService;
