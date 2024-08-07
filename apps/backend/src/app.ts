import compression from "compression";
import cookieParser from "cookie-parser";
import cors, { type CorsOptions } from "cors";
import express, { Express, type NextFunction, type Request, type Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

import { BASE_URL } from "@/misc/constants";
import { ERROR_CODES } from "@/misc/error.constants";

import { AppErrorController, type AppErrorInterface } from "@/components/error/app-error.controller";

import { errorHandler } from "@/middleware/error-handler";

import { authModule } from "@/components/auth/auth.module";
import { ErrorController } from "@/components/error/error.controller";
import { offersModule } from "@/components/offers/offers.module";
import { statisticsModule } from "@/components/statistics/statistics.module";

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
  origin: ["http://localhost:5173", "http://localhost:4173", "*"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  limit: 100,
  message: "Too many requests from this IP, please try again in an minute!",
});

app.get("/", (_req, res) => res.send("Express server"));
app.use("/api", limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use((req: Request, _res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(BASE_URL + "/auth", authModule.router);
app.use(BASE_URL + "/offers", offersModule.router);
app.use(BASE_URL + "/statistics", statisticsModule.router);

app.all("*", (req: Request, _res: Response, next: NextFunction) => {
  next(
    new AppErrorController({
      statusCode: 404,
      code: ERROR_CODES.not_found,
      message: `Cannot find ${req.originalUrl}`,
    }),
  );
});
app.use(errorHandler);

app.use((err: AppErrorInterface, req: Request, res: Response) => new ErrorController(err, req, res));
