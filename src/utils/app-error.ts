export interface AppErrorInterface extends Error {
  statusCode: number;
}

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  public toString(): string {
    return `${this.constructor.name}: ${this.message}`;
  }
}