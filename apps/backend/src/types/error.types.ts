import type { ZodIssueCode } from "zod";

export type ErrorCodes =
  | ZodIssueCode
  | "not_found"
  | "user_exists"
  | "internal_error"
  | "invalid_data"
  | "user_not_exist"
  | "not_logged_in"
  | "invalid_type";
