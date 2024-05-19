import { type ErrorCodes } from "../types/error.types";

export const ERROR_CODES: Record<ErrorCodes, ErrorCodes> = {
  user_exists: "user_exists",
  internal_error: "internal_error",
  invalid_data: "invalid_data",
  user_not_exist: "user_not_exist",
  not_logged_in: "not_logged_in",
};

export const ERROR_MESSAGES: Record<ErrorCodes, string> = {
  user_exists: "User already exists.",
  internal_error: "Internal server error.",
  invalid_data: "Invalid data has been passed.",
  user_not_exist: "This user does not exist.",
  not_logged_in: "Login to get access.",
};
