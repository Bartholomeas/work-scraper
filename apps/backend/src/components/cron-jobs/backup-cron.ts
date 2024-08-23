import { BaseCron } from "./base-cron";
import path from "path";
import { exec } from "child_process";

export class BackupDbCron extends BaseCron {
  constructor() {
    super("0 23 * * *");
  }

  protected async handleCronJob(): Promise<void> {
    const prismaDir = path.join(__dirname, "..", "..", "..", "prisma");
    exec(`node ${path.join(prismaDir, "create-db-backup.mjs")}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing backup script: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`Backup script stderr: ${stderr}`);
        return;
      }
      console.log(`Backup completed: ${stdout}`);
    });
  }
}
