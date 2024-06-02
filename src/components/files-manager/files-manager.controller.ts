import * as fs from "node:fs";
import { existsSync, mkdirSync } from "node:fs";
import fsPromise from "node:fs/promises";
import path from "node:path";

interface BaseFileProps {
  fileName: string;
  ext?: "json" | "js";
}

interface SaveToFileProps<T extends object> extends BaseFileProps {
  data: T;
  meta?: Record<string, number | number[] | string | string[]>;
}

/**
 * Class representing Files Manager Controller
 * It manages operations such as writing, reading and getting files from filesystem
 * @class FilesManagerController
 * @constructor
 * @param {string} baseDir - Base directory where files will be managed
 */
class FilesManagerController {
  private readonly baseDir: string;

  /**
   * Constructor for FilesManagerController class.
   * Initializes the base directory for file management and ensures that it exists.
   *
   * @param baseDir - The base directory where files will be managed
   */
  constructor(baseDir: string) {
    this.baseDir = baseDir;
    this.ensureDirExists(baseDir);
  }

  /**
   * @method ensureDirExists - Checking that passed dir exist
   * @param dir {string}
   * @private
   */
  private ensureDirExists(dir: string) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }

  /**
   * @description - Method that writes file with passed data
   * @param data {T} - Data
   * @param meta {Record<string, number | number[] | string | string[]>} - Metadata about file, like when created,totalCount etc
   * @param fileName {String} - Name of the file to write
   * @param ext {String} - File extension, for example "json", "txt"
   */
  public async writeToFile<T extends object>({ data, meta, fileName, ext = "json" }: SaveToFileProps<T>) {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    await fsPromise.writeFile(filePath, JSON.stringify({ createdAt: new Date(Date.now()).toISOString(), meta, data }));
  }

  /**
   * @description - Method that writes file with a stream with passed data
   * @param data {T} - Data
   * @param meta {Record<string, number | number[] | string | string[]>} - Metadata about file, like when created,totalCount etc
   * @param fileName {String} - Name of the file to write
   * @param ext {String} - File extension, for example "json", "txt"
   */
  public async writeToFileChunked<T extends object>({ data, meta, fileName, ext = "json" }: SaveToFileProps<T>) {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    const writeStream = fs.createWriteStream(filePath, { flags: "a" });

    return new Promise((resolve, reject) => {
      writeStream.on("error", err => reject(err));

      writeStream.on("finish", () => {
        resolve(true);
      });
      writeStream.write(JSON.stringify({ createdAt: new Date(Date.now()).toISOString(), meta, data }), "utf-8", () => {
        writeStream.end();
      });
    });
  }

  /**
   * @description - Reading file based on fileName and extension
   * @param fileName {String} - Name of the file to write
   * @param ext {String} - File extension, for example "json", "txt"
   */
  public async readFromFile(fileName: string, ext = "json") {
    const filePath = path.join(this.baseDir, `${fileName}.${ext}`);
    if (!existsSync(this.baseDir)) return null;
    try {
      return await fsPromise.readFile(filePath, "utf-8");
    } catch (err) {
      console.error("Error reading file!", err);
      return null;
    }
  }

  /**
   * @description - Get data about file updated date
   * @param fileName {String} - Name of the file to write
   * @param ext {String} - File extension, for example "json", "txt"
   */
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
