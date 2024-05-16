import { JWT_EXPIRES_IN, JWT_SECRET } from "../../misc/constants";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";

import { AppError } from "../../utils/app-error";

import { ERROR_CODES, ERROR_MESSAGES } from "../../misc/error.constants";
import { type User } from "../../types/auth.types";
import { type AuthService } from "./auth.service";


class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  private signToken = (id: string) => jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  createSendToken(user: Pick<User, "id" | "email">, statusCode: number, req: Request, res: Response) {
    console.log("HALKOOOOO", process.env.JWT_SECRET, JWT_SECRET);
    const token = this.signToken(user.id);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + JWT_EXPIRES_IN * 1000),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    res.status(statusCode).json({
      token,
      data: { user },
    });
  }

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
      console.log("XD", err);
      if (err instanceof AppError)
        return res.status(err.statusCode).json({
          code: ERROR_CODES.user_exists,
          message: err.message ?? ERROR_MESSAGES.user_exists,
        });

      return res.status(500).json({ code: ERROR_CODES.internal_error, message: ERROR_MESSAGES.internal_error });
    }
  };

}

export { AuthController };