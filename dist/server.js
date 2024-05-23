"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
//URGENT: dotenv.config() MUST !!! be before other imports. Auto rearrange may change order and then app cannot get .env properties.
dotenv_1.default.config();
const constants_1 = require("./misc/constants");
const app_1 = require("./app");
const port = constants_1.PORT || 8080;
const server = app_1.app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
process.on("SIGTERM", () => {
    server.close(() => {
        console.log("💥 Process terminated!");
    });
});
