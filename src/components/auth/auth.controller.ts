import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { AppError } from "../../utils/app-error";

import { JWT_COOKIE_NAME, JWT_EXPIRES_IN, JWT_SECRET } from "../../misc/constants";
import { ERROR_CODES, ERROR_MESSAGES } from "../../misc/error.constants";
import { DecodedJwtToken, type User } from "../../types/auth.types";
import { type AuthService } from "./auth.service";


class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  private signToken = (id: string | undefined) => jwt.sign({ id }, JWT_SECRET, {
    // expiresIn: JWT_EXPIRES_IN,
    expiresIn: "7d",
  });

  createSendToken(user: Partial<User> | undefined, statusCode: number, req: Request, res: Response) {
    const token = this.signToken(user?.id);
    res.cookie(JWT_COOKIE_NAME, token, {
      expires: new Date(Date.now() + (JWT_EXPIRES_IN * 1000 * 100 * 100)),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    res.status(statusCode).json({
      token,
      data: { user },
    });
  }

  async comparePasswords(candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
  }

  protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token;

      if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
        token = req.headers.authorization.split(" ")[1];
      else if (req.cookies[JWT_COOKIE_NAME])
        token = req.cookies[JWT_COOKIE_NAME];

      if (!token) return next(new AppError("You are not logged in. Login to get access.", 401));

      const decoded = jwt.verify(token, JWT_SECRET) as DecodedJwtToken | undefined;
      // console.log(decoded);
      const currentUser = await this.authService.getUser({ id: decoded?.id });
      if (!currentUser) return next(new AppError("User assigned to this token does no longer exist.", 401));

      res.locals.user = currentUser;
      next();
    } catch (err) {
      throw err;
    }
  };

  getMe = async (req: Request, res: Response, next: NextFunction) => {
    if (req.cookies[JWT_COOKIE_NAME]) {
      try {
        const decoded = jwt.verify(req.cookies[JWT_COOKIE_NAME], JWT_SECRET) as DecodedJwtToken | undefined;

        const { password, ...currentUser } = await this.authService.getUser({ id: decoded?.id });

        if (!currentUser) return next();

        return res.status(200).json(currentUser);
      } catch (err) {
        throw err;
      }
    }
    next();
  }
  ;

  signUp = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await this.authService.createUser({
        email,
        password: hashedPassword,
      });
      this.createSendToken(user, 201, req, res);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({
          code: ERROR_CODES.user_exists,
          message: err.message ?? ERROR_MESSAGES.user_exists,
        });

      return res.status(500).json({ code: ERROR_CODES.internal_error, message: ERROR_MESSAGES.internal_error });
    }
  };

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return next(new AppError("Provide email and password.", 400));

      const { password: userPassword, user } = await this.authService.getUser({ email });
      if (!userPassword || !(await this.comparePasswords(password, userPassword))) return next(new AppError("Invalid credentials", 400));
      this.createSendToken(user, 201, req, res);
    } catch (err) {
      throw err;
    }
  };

  logout = async (req: Request, res: Response) => {
    res.cookie(JWT_COOKIE_NAME, "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).json({ status: "Success" });
  };
}

export { AuthController };
