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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapperBase = void 0;
class ScrapperBase {
    constructor(browser, { url, categories = [] }) {
        this.browser = browser;
        this.url = url;
        this.categories = categories;
        this.maxPages = 1;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.page) {
                this.page = yield ((_a = this.browser) === null || _a === void 0 ? void 0 : _a.newPage());
                yield ((_b = this.page) === null || _b === void 0 ? void 0 : _b.goto(this.url));
            }
            else {
                yield this.page.goto(this.url);
            }
        });
    }
    closePage() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.page)
                yield this.page.close();
            this.page = undefined;
        });
    }
}
exports.ScrapperBase = ScrapperBase;
