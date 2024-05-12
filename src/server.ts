import dotenv from "dotenv";
import { app } from "./app";
import * as process from "node:process";

dotenv.config();

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("Unhandled REJECTION! Shutting down the server..");
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
