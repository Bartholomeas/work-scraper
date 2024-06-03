import "tsconfig-paths/register";

import dotenv from "dotenv";
//URGENT: dotenv.config() MUST !!! be before other imports. Auto rearrange may change order and then app cannot get .env properties.
dotenv.config();

import { PORT } from "src/misc/constants";
import { app } from "src/app";

const port = PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
