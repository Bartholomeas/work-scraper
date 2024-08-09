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
      cron_restart: "0 */4 * * *",
      max_memory_restart: "1500M",
    },
  ],
};
