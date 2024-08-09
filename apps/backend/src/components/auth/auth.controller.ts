import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { type AuthService } from "./auth.service";

import type { DecodedJwtToken, User } from "@/types/auth.types";
import { JWT_COOKIE_NAME, JWT_EXPIRES_IN, JWT_SECRET } from "@/misc/constants";
import { AppErrorController } from "@/components/error/app-error.controller";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";

class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  createSendToken = async (user: Partial<User> | undefined, statusCode: number, req: Request, res: Response) => {
    const token = this.signToken(user?.id);

    res.cookie(JWT_COOKIE_NAME, token, {
      expires: new Date(Date.now() + JWT_EXPIRES_IN * 1000 * 100 * 100),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    res.status(statusCode).json({
      token,
      data: { user },
    });
  };

  comparePasswords = async (candidatePassword: string, userPassword: string) => {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

  protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) token = req.headers.authorization.split(" ")[1];
    else if (req.cookies[JWT_COOKIE_NAME]) token = req.cookies[JWT_COOKIE_NAME];

    if (!token)
      next(
        new AppErrorController({
          statusCode: 401,
          code: ERROR_CODES.not_logged_in,
          message: ERROR_MESSAGES.not_logged_in,
        }),
      );

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedJwtToken | undefined;

    const currentUser = await this.authService.getUser({ id: decoded?.id });
    if (!currentUser)
      next(
        new AppErrorController({
          statusCode: 401,
          code: ERROR_CODES.user_not_exist,
          message: ERROR_MESSAGES.user_not_exist,
        }),
      );

    res.locals.user = currentUser;
    next();
  };

  getMe = async (req: Request, res: Response, next: NextFunction) => {
    if (req.cookies[JWT_COOKIE_NAME]) {
      try {
        const decoded = jwt.verify(req.cookies[JWT_COOKIE_NAME], JWT_SECRET) as DecodedJwtToken | undefined;

        const { password, ...currentUser } = await this.authService.getUser({ id: decoded?.id });

        if (!currentUser) next(new AppErrorController({ message: "Current user doesnt exist.", statusCode: 404 }));

        return res.status(200).json(currentUser);
      } catch (err) {
        next(err);
      }
    } else next(new AppErrorController({ message: "Cannot find auth session.", statusCode: 404 }));
  };

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await this.authService.createUser({
        email,
        password: hashedPassword,
      });
      await this.createSendToken(user, 201, req, res);
    } catch (err) {
      next(err);
    }
  };

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        next(
          new AppErrorController({
            message: "Provide email and password.",
            statusCode: 400,
          }),
        );

      const { password: userPassword, user } = await this.authService.getUser({ email });
      if (!userPassword || !(await this.comparePasswords(password, userPassword)))
        next(
          new AppErrorController({
            statusCode: 400,
            message: "Invalid credentials",
          }),
        );
      this.createSendToken(user, 201, req, res);
    } catch (err) {
      next(err);
    }
  };

  logout = async (req: Request, res: Response) => {
    res.cookie(JWT_COOKIE_NAME, "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).json({ status: "Success" });
  };

  private signToken = (id: string | undefined) =>
    jwt.sign({ id }, JWT_SECRET, {
      // expiresIn: JWT_EXPIRES_IN,
      expiresIn: "7d",
    });
}

export { AuthController };
