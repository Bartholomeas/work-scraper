import express, { Express, type NextFunction, type Request, type Response } from "express";
import cors, { type CorsOptions } from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import cookieParser from "cookie-parser";

import { BASE_URL } from "@/misc/constants";
import { AppError, type AppErrorInterface } from "@/utils/app-error";

import { errorHandler } from "@/middleware/error-handler";

import { authModule } from "@/components/auth/auth.module";
import { offersModule } from "@/components/offers/offers.module";
import { ErrorController } from "@/components/error/error.controller";
import { ERROR_CODES } from "@/misc/error.constants";

// For some reason imported in tsconfig doesnt work :(
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      requestTime: string;
    }
  }
}

export const app: Express = express();
const corsOptions: CorsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  limit: 100,
  message: "Too many requests from this IP, please try again in an minute!",
});

app.use("/api", limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
1;
app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(BASE_URL + "/auth", authModule.router);
app.use(BASE_URL + "/offers", offersModule.router);

app.all("*", (req, res, next) => {
  next(
    new AppError({
      statusCode: 404,
      code: ERROR_CODES.not_found,
      message: `Cannot find ${req.originalUrl}`,
    }),
  );
});
app.use(errorHandler);

app.use((err: AppErrorInterface, req: Request, res: Response) => new ErrorController(err, req, res));
