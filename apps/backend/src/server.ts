import "tsconfig-paths";
import dotenv from "dotenv";

const envFile = `.env.${process.env.NODE_ENV ?? "development"}`;
dotenv.config({ path: envFile });

(async () => {
  const PORT = await import("@/misc/constants").then(res => res.PORT);
  const app = await import("./app").then(res => res.app);

  const server = app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });

  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("💥 Process terminated!");
    });
  });
})();
