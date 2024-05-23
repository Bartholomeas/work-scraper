import { existsSync, mkdirSync } from "node:fs";
import fsPromise from "node:fs/promises";
import path from "node:path";

interface BaseFileProps {
  fileName: string;
  ext?: "json" | "js";
}

interface SaveToFileProps<T extends object> extends BaseFileProps {
  data: T;
}

class FilesManagerController {
  private readonly baseDir: string;

  constructor(baseDir: string) {
    this.baseDir = baseDir;
    this.ensureDirExists(baseDir);
  }

  private ensureDirExists(dir: string) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }

  public async saveToFile<T extends object>({ data, fileName, ext = "json" }: SaveToFileProps<T>) {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    await fsPromise.writeFile(filePath, JSON.stringify({ createdAt: new Date(Date.now()).toISOString(), data }));
  }

  public async readFromFile(fileName: string) {
    const filePath = path.join(this.baseDir, `${fileName}.json`);
    try {
      return await fsPromise.readFile(filePath, "utf-8");
    } catch (err) {
      console.error("Error reading file!", err);
      return null;
    }
  }

  public async getFileUpdatedDate({ fileName, ext = "json" }: BaseFileProps) {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    try {
      return await fsPromise.stat(filePath);
    } catch (err) {
      console.error("Error getting file updated date!", err);
      return null;
    }
  }
}

export { FilesManagerController };
