import path from "node:path";
import fs from "node:fs";
import { exec } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "dev.db");
const backupDir = path.join(__dirname, "..", "backups");
const backupFile = path.join(backupDir, `dev-${new Date().toISOString().replace(/:/g, "-")}.db`);

const executeCommand = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}`, error);
        reject(error);
        return;
      }
      console.log(`Output for command: ${command}`);
      console.log(stdout);
      if (stderr) {
        console.error(stderr);
      }
      resolve();
    });
  });
};

const ensureBackupDirExists = async () => {
  try {
    await fs.promises.mkdir(backupDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating backup directory: ${backupDir}`, error);
    throw error;
  }
};

const createBackup = async () => {
  await ensureBackupDirExists();
  const command = `sqlite3 ${dbPath} ".backup '${backupFile}'"`;
  try {
    await executeCommand(command);
    console.log(`Backup created at ${backupFile}`);
  } catch (error) {
    console.error("Failed to create backup", error);
  }
};

createBackup();
