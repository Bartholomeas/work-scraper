import express, { Express, type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import cookieParser from "cookie-parser";
import { AppError, AppErrorInterface } from "./utils/app-error";
import { ErrorController } from "./components/error/error.controller";
import { BASE_URL } from "./misc/constants";
import { authModule } from "./components/auth/auth.module";

// For some reason imported in tsconfig doesnt work :(
declare global {
  namespace Express {
    interface Request {
      requestTime: string;
    }
  }
}

export const app: Express = express();

app.use(cors());
app.options("*", cors());
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

if (process.env.NODE_ENV === "development")
  app.use(morgan("dev"));

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(BASE_URL + "/auth", authModule.router);

app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});


app.use((err: AppErrorInterface, req: Request, res: Response, next: NextFunction) => new ErrorController(err, req, res));
