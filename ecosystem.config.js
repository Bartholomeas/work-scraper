module.exports = {
  apps: [
    {
      name: "itotyle_web",
      script: "pnpm",
      args: "run start:frontend",
    },
    {
      name: "itotyle_api",
      script: "pnpm",
      args: "run start:backend",
      cron_restart: "0 */1 * * *",
      max_memory_restart: "1000M",
    },
  ],
};

