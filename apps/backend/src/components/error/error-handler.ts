import { AppErrorController } from "@/components/error/app-error.controller";
import { ZodError } from "zod";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";
import type { ErrorCodes } from "@/types/error.types";

interface HandleErrorParams {
  statusCode?: number;
  code?: ErrorCodes;
  message?: string;
}

class ErrorHandler {
  public static handleError(err: unknown, params: HandleErrorParams = {}): AppErrorController {
    if (err instanceof ZodError) {
      const currentError = err?.errors?.[0];
      const zodErrorMessage =
        currentError?.path?.length > 0 ? `${currentError?.path.join(", ")}: ${currentError?.message}` : currentError?.message;

      const code = params?.code ?? currentError?.code ?? ERROR_CODES.internal_error;
      const message = params?.message ?? zodErrorMessage ?? ERROR_MESSAGES[code];

      return new AppErrorController({
        statusCode: params?.statusCode ?? 500,
        code,
        message,
      });
    }
    return new AppErrorController({
      statusCode: params?.statusCode ?? 500,
      code: ERROR_CODES.internal_error,
      message: ERROR_MESSAGES.internal_error,
    });
  }
}

export { ErrorHandler };
