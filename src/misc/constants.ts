import * as process from "node:process";

export const BASE_URL = "/api/v1";
export const PORT = process.env.port;
export const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN ?? 3600) as number;
export const JWT_SECRET = process.env.JWT_SECRET as string;

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
export const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;