import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";
import { AppErrorController } from "@/components/error/app-error.controller";
import type { ErrorCodes } from "@/types/error.types";

interface HandleErrorParams {
  statusCode?: number;
  code?: ErrorCodes;
  message?: string;
}

class ErrorHandlerController {
  public static handleError(err: unknown, params: HandleErrorParams = {}): AppErrorController {
    if (err instanceof AppErrorController) return err;
    if (err instanceof Prisma.PrismaClientValidationError) {
      return this.handlePrismaValidationError(err, params);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return this.handlePrismaKnownRequestError(err, params);
    }

    if (err instanceof Prisma.PrismaClientUnknownRequestError) {
      return this.handlePrismaUnknownRequestError(err, params);
    }

    if (err instanceof ZodError) {
      return this.handleZodError(err, params);
    }

    return this.handleUnknownError(params);
  }

  private static handlePrismaValidationError(err: Prisma.PrismaClientValidationError, params: HandleErrorParams): AppErrorController {
    const code = params.code ?? ERROR_CODES.invalid_data;
    const message = params.message ?? `Prisma validation error: ${err.message}`;
    return new AppErrorController({
      statusCode: params.statusCode ?? 500,
      code,
      message,
    });
  }

  private static handlePrismaKnownRequestError(err: Prisma.PrismaClientKnownRequestError, params: HandleErrorParams): AppErrorController {
    const code = params.code ?? ERROR_CODES.invalid_data;
    const message = params.message ?? `Prisma error: ${err.message}`;
    return new AppErrorController({
      statusCode: params.statusCode ?? 400,
      code,
      message,
    });
  }

  private static handlePrismaUnknownRequestError(
    err: Prisma.PrismaClientUnknownRequestError,
    params: HandleErrorParams,
  ): AppErrorController {
    const code = params.code ?? ERROR_CODES.internal_error;
    const message = params.message ?? `Prisma unknown error: ${err.message}`;
    return new AppErrorController({
      statusCode: params.statusCode ?? 500,
      code,
      message,
    });
  }

  private static handleZodError(err: ZodError, params: HandleErrorParams): AppErrorController {
    const currentError = err.errors?.[0];
    const zodErrorMessage =
      currentError?.path?.length > 0 ? `${currentError.path.join(", ")}: ${currentError.message}` : currentError?.message;

    const code = params.code ?? currentError?.code ?? ERROR_CODES.internal_error;
    const message = params.message ?? zodErrorMessage ?? ERROR_MESSAGES[code];

    return new AppErrorController({
      statusCode: params.statusCode ?? 500,
      code,
      message,
    });
  }

  private static handleUnknownError(params: HandleErrorParams): AppErrorController {
    return new AppErrorController({
      statusCode: params.statusCode ?? 500,
      code: ERROR_CODES.internal_error,
      message: ERROR_MESSAGES.internal_error,
    });
  }
}

export { ErrorHandlerController };
