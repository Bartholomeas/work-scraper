"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesManagerController = void 0;
const node_fs_1 = require("node:fs");
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
class FilesManagerController {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.ensureDirExists(baseDir);
    }
    ensureDirExists(dir) {
        if (!(0, node_fs_1.existsSync)(dir))
            (0, node_fs_1.mkdirSync)(dir, { recursive: true });
    }
    saveToFile(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, fileName, ext = "json" }) {
            const filePath = node_path_1.default.join(this.baseDir, `${fileName}.${ext}`);
            yield promises_1.default.writeFile(filePath, JSON.stringify({ createdAt: new Date(Date.now()).toISOString(), data }));
        });
    }
    readFromFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = node_path_1.default.join(this.baseDir, `${fileName}.json`);
            try {
                return yield promises_1.default.readFile(filePath, "utf-8");
            }
            catch (err) {
                console.error("Error reading file!", err);
                return null;
            }
        });
    }
    getFileUpdatedDate(_a) {
        return __awaiter(this, arguments, void 0, function* ({ fileName, ext = "json" }) {
            const filePath = node_path_1.default.join(this.baseDir, `${fileName}.${ext}`);
            try {
                return yield promises_1.default.stat(filePath);
            }
            catch (err) {
                console.error("Error getting file updated date!", err);
                return null;
            }
        });
    }
}
exports.FilesManagerController = FilesManagerController;
