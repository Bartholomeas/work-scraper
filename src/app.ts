import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import cookieParser from "cookie-parser";
import { AppError, AppErrorInterface } from "./utils/app-error";
import { ErrorController } from "./controllers/error-controller";
import { BASE_URL } from "./misc/constants";
import { authRouter } from "./routes/auth-routes";
import { offersRouter } from "./routes/offers-routes";


export const app: Express = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());

const limiter = rateLimit({
  limit: 100,
  message: "Too many requests from this IP, please try again in an minute!",
});

app.use("/api", limiter);

if (process.env.NODE_ENV === "development")
  app.use(morgan("dev"));

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(BASE_URL + "/auth", authRouter);
app.use(BASE_URL + "/offers", offersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});


app.use((err: AppErrorInterface, req: Request, res: Response, next: NextFunction) => new ErrorController(err, req, res));