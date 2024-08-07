import type { ErrorCodes } from "@/types/error.types";
import { z } from "zod";

export const ERROR_CODES: Record<ErrorCodes, ErrorCodes> = {
  not_found: "not_found",
  user_exists: "user_exists",
  internal_error: "internal_error",
  invalid_data: "invalid_data",
  user_not_exist: "user_not_exist",
  not_logged_in: "not_logged_in",
  ...z.ZodIssueCode,
};

export const ERROR_MESSAGES: Record<ErrorCodes, string> = {
  not_found: "Data is not found",
  user_exists: "User already exists.",
  internal_error: "Internal server error.",
  invalid_data: "Invalid data has been passed.",
  user_not_exist: "This user does not exist.",
  not_logged_in: "Login to get access.",
  invalid_type: "Invalid data type.",
  unrecognized_keys: "The data contains unrecognized keys.",
  invalid_union: "Invalid data for union type.",
  invalid_enum_value: "Invalid value for enum type.",
  invalid_arguments: "Invalid function arguments.",
  invalid_return_type: "Invalid return type from function.",
  invalid_date: "Invalid date format.",
  invalid_string: "Invalid string format.",
  too_small: "The value is too small.",
  too_big: "The value is too big.",
  not_multiple_of: "The value is not a multiple of the required number.",
  custom: "Custom validation error.",
  invalid_literal: "Invalid literal value.",
  invalid_union_discriminator: "Invalid discriminator value for union type.",
  invalid_intersection_types: "Intersection types are invalid.",
  not_finite: "Value is not finite.",
};
