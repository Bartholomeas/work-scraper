import { existsSync, mkdirSync } from "node:fs";
import fsPromise from "node:fs/promises";
import path from "node:path";

interface SaveToFileProps {
  data: string;
  fileName: string;
  ext?: "json" | "js";
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

  public async saveToFile({ data, fileName, ext = "json" }: SaveToFileProps) {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    await fsPromise.writeFile(filePath, data);
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
}

export { FilesManagerController };
