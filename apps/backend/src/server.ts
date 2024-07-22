import "tsconfig-paths";
//URGENT: dotenv.config() MUST !!! be before other imports. Auto rearrange may change order and then app cannot get .env properties.
// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
import dotenv from "dotenv";
import { PORT } from "@/misc/constants";
import { app } from "@/app";

const envFile = `.env.${process.env.NODE_ENV ?? "development"}`;
dotenv.config({ path: envFile });
console.log({ envFile, DBenv: process.env.DATABASE_URL });

const port = PORT || 3000;
console.log({ port });
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
