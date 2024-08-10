export const BASE_URL = "/api/v1";
export const DATABASE_URL = process.env.DATABASE_URL ?? ("file:./dev.db?mode=memory&cache=shared" as string);
export const { SECRET_PHRASE, SECRET_DELETE_PHRASE } = process.env;
export const { PORT } = process.env;
export const JWT_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN as string);
export const JWT_SECRET = process.env.JWT_SECRET as string;

export const JWT_COOKIE_NAME = "authCookie";

export const OFFERS_METADATA_ID = "offers-metadata";

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
export const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const DATE_FORMAT = "DD.MM.YYYY";

export const JUSTJOIN_NAME = "justjoin";
export const PRACUJ_NAME = "pracuj";
export const SOLID_NAME = "solid.jobs";
