import { type ErrorCodes } from "../types/error.types";
import { ERROR_CODES } from "../misc/error.constants";

export interface AppErrorInterface extends Error {
  statusCode: number;
  code: ErrorCodes,
  message: string;
}

class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor({ message, code = ERROR_CODES.internal_error, statusCode = 500 }: AppErrorInterface) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  public toString(): string {
    return `${this.constructor.name}: ${this.message}`;
  }
}

export { AppError };