import { type ErrorCodes } from "../types/error.types";

export const ERROR_CODES = {
  user_exists: "user_exists",
  internal_error: "internal_error",
  invalid_data: "invalid_data",
};


export const ERROR_MESSAGES: Record<ErrorCodes, string> = {
  "user_exists": "User already exists.",
  "internal_error": "Internal server error.",
  "invalid_data": "Invalid data has been passed.",
};