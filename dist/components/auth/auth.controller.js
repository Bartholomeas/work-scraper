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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const constants_1 = require("@/misc/constants");
const app_error_1 = require("@/utils/app-error");
const error_constants_1 = require("@/misc/error.constants");
class AuthController {
    constructor(authService) {
        this.createSendToken = (user, statusCode, req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = this.signToken(user === null || user === void 0 ? void 0 : user.id);
            res.cookie(constants_1.JWT_COOKIE_NAME, token, {
                expires: new Date(Date.now() + constants_1.JWT_EXPIRES_IN * 1000 * 100 * 100),
                httpOnly: true,
                secure: req.secure || req.headers["x-forwarded-proto"] === "https",
            });
            res.status(statusCode).json({
                token,
                data: { user },
            });
        });
        this.comparePasswords = (candidatePassword, userPassword) => __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(candidatePassword, userPassword);
        });
        this.protectRoute = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
                token = req.headers.authorization.split(" ")[1];
            else if (req.cookies[constants_1.JWT_COOKIE_NAME])
                token = req.cookies[constants_1.JWT_COOKIE_NAME];
            if (!token)
                next(new app_error_1.AppError({
                    statusCode: 401,
                    code: error_constants_1.ERROR_CODES.not_logged_in,
                    message: error_constants_1.ERROR_MESSAGES.not_logged_in,
                }));
            const decoded = jsonwebtoken_1.default.verify(token, constants_1.JWT_SECRET);
            const currentUser = yield this.authService.getUser({ id: decoded === null || decoded === void 0 ? void 0 : decoded.id });
            if (!currentUser)
                next(new app_error_1.AppError({
                    statusCode: 401,
                    code: error_constants_1.ERROR_CODES.user_not_exist,
                    message: error_constants_1.ERROR_MESSAGES.user_not_exist,
                }));
            res.locals.user = currentUser;
            next();
        });
        this.getMe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.cookies[constants_1.JWT_COOKIE_NAME]) {
                try {
                    const decoded = jsonwebtoken_1.default.verify(req.cookies[constants_1.JWT_COOKIE_NAME], constants_1.JWT_SECRET);
                    const _a = yield this.authService.getUser({ id: decoded === null || decoded === void 0 ? void 0 : decoded.id }), { password } = _a, currentUser = __rest(_a, ["password"]);
                    if (!currentUser)
                        next(new app_error_1.AppError({ message: "Current user doesnt exist.", statusCode: 404 }));
                    return res.status(200).json(currentUser);
                }
                catch (err) {
                    next(err);
                }
            }
            else
                next(new app_error_1.AppError({ message: "Cannot find auth session.", statusCode: 404 }));
        });
        this.signUp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const hashedPassword = yield bcrypt_1.default.hash(password, 12);
                const user = yield this.authService.createUser({
                    email,
                    password: hashedPassword,
                });
                yield this.createSendToken(user, 201, req, res);
            }
            catch (err) {
                next(err);
            }
        });
        this.signIn = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password)
                    next(new app_error_1.AppError({ message: "Provide email and password.", statusCode: 400 }));
                const { password: userPassword, user } = yield this.authService.getUser({ email });
                if (!userPassword || !(yield this.comparePasswords(password, userPassword)))
                    next(new app_error_1.AppError({
                        statusCode: 400,
                        message: "Invalid credentials",
                    }));
                this.createSendToken(user, 201, req, res);
            }
            catch (err) {
                next(err);
            }
        });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.cookie(constants_1.JWT_COOKIE_NAME, "loggedout", {
                expires: new Date(Date.now() + 10 * 1000),
                httpOnly: true,
            });
            res.status(200).json({ status: "Success" });
        });
        this.signToken = (id) => jsonwebtoken_1.default.sign({ id }, constants_1.JWT_SECRET, {
            // expiresIn: JWT_EXPIRES_IN,
            expiresIn: "7d",
        });
        this.authService = authService;
    }
}
exports.AuthController = AuthController;
