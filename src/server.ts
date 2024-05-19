import dotenv from "dotenv";
import { app } from "./app";
import { PORT } from "./misc/constants";

dotenv.config();


const port = PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});