import { ERROR_CODES } from "@/misc/error.constants";
import type { ErrorCodes } from "@/types/error.types";

export interface AppErrorInterface extends Error {
  statusCode: number;
  // code?: ErrorCodes,
  // message: string;
}

export interface AppErrorProps {
  statusCode?: number;
  code?: ErrorCodes;
  message: string;
}

class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public code: ErrorCodes;

  constructor({ message, code = ERROR_CODES.internal_error, statusCode = 500 }: AppErrorProps) {
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
