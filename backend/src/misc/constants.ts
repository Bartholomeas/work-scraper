export const BASE_URL = "/api/v1";
// export const DATABASE_URL = (() => {
//   const envType = process.env.NODE_ENV;
//   switch (envType) {
//     case "development":
//       return process.env.DATABASE_URL;
//     case "test":
//       return "DATABASE_URL=file:./test.db?mode=memory&cache=shared";
//     default:
//       return process.env.DATABASE_URL;
//   }
//   // process.env.NODE_ENV === "test" ? "dupa" : process.env;
// })();
export const { DATABASE_URL } = process.env;
export const PORT = process.env.port;
export const JWT_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN as string);
export const JWT_SECRET = process.env.JWT_SECRET as string;

export const JWT_COOKIE_NAME = "authCookie";

export const OFFERS_METADATA_ID = "offers-metadata";

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
export const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const DATE_FORMAT = "DD.MM.YYYY";
