import "tsconfig-paths/register";
//URGENT: dotenv.config() MUST !!! be before other imports. Auto rearrange may change order and then app cannot get .env properties.
// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
import dotenv from "dotenv";

const envFile = `.env.${process.env.NODE_ENV ?? "development"}`;
dotenv.config({ path: envFile });
console.log({ envFile, DBenv: process.env.DATABASE_URL });
console.log(process.env.SECRET_PHRASE);

import { PORT } from "@/misc/constants";
import { app } from "@/app";

const port = PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
