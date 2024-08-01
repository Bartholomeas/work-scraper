import { Prisma } from "@prisma/client";

import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";

import { AppErrorController } from "@/components/error/app-error.controller";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { ZodError } from "zod";

describe("ErrorHandlerController", () => {
  it("should return same AppErrorController instance when passed as an error", () => {
    const appError = new AppErrorController({
      statusCode: 500,
      code: ERROR_CODES.internal_error,
      message: ERROR_MESSAGES.internal_error,
    });
    const result = ErrorHandlerController.handleError(appError);

    expect(result).toBe(appError);
    expect(result).toHaveProperty("statusCode", 500);
    expect(result).toHaveProperty("code", ERROR_CODES.internal_error);
    expect(result).toHaveProperty("message", ERROR_MESSAGES.internal_error);
  });
  it("should handle unknown errors with random message when error is missing", () => {
    const appError = new Error();

    const result = ErrorHandlerController.handleError(appError);

    expect(result).toHaveProperty("statusCode", 500);
    expect(result).toHaveProperty("code", ERROR_CODES.internal_error);
    expect(result).toHaveProperty("message", ERROR_MESSAGES.internal_error);
  });

  describe("PrismaClientValidationError", () => {
    it("should handle error with message", () => {
      const errorMessage = "Validation error";
      const appError = new Prisma.PrismaClientValidationError(errorMessage, { clientVersion: "5.17.0" });
      const result = ErrorHandlerController.handleError(appError);

      expect(result).toBeInstanceOf(AppErrorController);
      expect(result).toHaveProperty("statusCode", 500);
      expect(result).toHaveProperty("code", ERROR_CODES.invalid_data);
      expect(result).toHaveProperty("message", `Prisma validation error: ${errorMessage}`);
    });
  });

  describe("PrismaClientKnownRequestError", () => {
    it("should handle code invalid_data ", () => {
      const errorMessage = "Client known request error";
      const appError = new Prisma.PrismaClientKnownRequestError(errorMessage, { code: ERROR_CODES.invalid_data, clientVersion: "5.17.0" });
      const result = ErrorHandlerController.handleError(appError);

      expect(result).toBeInstanceOf(AppErrorController);
      expect(result).toHaveProperty("statusCode", 400);
      expect(result).toHaveProperty("code", ERROR_CODES.invalid_data);
      expect(result).toHaveProperty("message", `Prisma error: ${errorMessage}`);
    });

    it("should handle code internal_error ", () => {
      const errorMessage = "Client known request error";
      const appError = new Prisma.PrismaClientKnownRequestError(errorMessage, {
        code: ERROR_CODES.internal_error,
        clientVersion: "5.17.0",
      });
      const result = ErrorHandlerController.handleError(appError, {
        code: ERROR_CODES.internal_error,
        statusCode: 500,
      });

      expect(result).toBeInstanceOf(AppErrorController);

      expect(result).toHaveProperty("statusCode", 500);
      expect(result).toHaveProperty("code", ERROR_CODES.internal_error);
      expect(result).toHaveProperty("message", `Prisma error: ${errorMessage}`);
    });

    describe("PrismaClientUnknownRequestError", () => {
      it("should handle default prisma unknown error", () => {
        const errorMessage = "Unknown request error";
        const appError = new Prisma.PrismaClientUnknownRequestError(errorMessage, {
          clientVersion: "5.17.0",
        });

        const result = ErrorHandlerController.handleError(appError);

        expect(result).toBeInstanceOf(AppErrorController);

        expect(result).toHaveProperty("statusCode", 500);
        expect(result).toHaveProperty("code", ERROR_CODES.internal_error);
        expect(result).toHaveProperty("message", `Prisma unknown error: ${errorMessage}`);
      });
    });

    describe("ZodErrr", () => {
      it("should handle default zod error", () => {
        const zodError = new ZodError([]);
        const params = { code: ERROR_CODES.custom, message: ERROR_MESSAGES.custom };
        const result = ErrorHandlerController.handleError(zodError, params);

        expect(result).toBeInstanceOf(AppErrorController);

        expect(result).toHaveProperty("statusCode", 500);
        expect(result).toHaveProperty("code", ERROR_CODES.custom);
        expect(result).toHaveProperty("message", ERROR_MESSAGES.custom);
      });
    });
  });
});
