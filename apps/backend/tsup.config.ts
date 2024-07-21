import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/server.ts"],
  outDir: "dist",
  splitting: false,
  clean: true,
  sourcemap: true,
  publicDir: true,
  tsconfig: "./tsconfig.json",
});
