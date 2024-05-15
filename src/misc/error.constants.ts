export const ERROR_CODES = {
  user_exists: "user_exists",
  internal_error: "internal_error",
};

export const ERROR_MESSAGES: Record<keyof typeof ERROR_CODES, string> = {
  "user_exists": "User already exists.",
  "internal_error": "Internal server error.",
};