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
exports.OffersController = void 0;
const puppeteer_1 = require("puppeteer");
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const app_error_1 = require("@/utils/app-error");
const error_constants_1 = require("@/misc/error.constants");
const scrapper_pracuj_1 = require("@/components/offers/instances/scrapper-pracuj");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
class OffersController {
    constructor(offersService) {
        this.getOffers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.pageUrl)
                next(new app_error_1.AppError({
                    statusCode: 400,
                    code: error_constants_1.ERROR_CODES.not_found,
                    message: "There is no page url!",
                }));
            let page;
            try {
                const { query } = req;
                if (!this.browser)
                    yield this.initBrowser();
                const pracujScrapper = new scrapper_pracuj_1.ScrapperPracuj(this.browser, {
                    url: "https://it.pracuj.pl/praca",
                    // url: "https://pracuj.pl",
                });
                yield pracujScrapper.initialize();
                const data = yield pracujScrapper.getScrappedData(query);
                yield pracujScrapper.closePage();
                // page = await this.browser?.newPage();
                // await page?.goto("https://bot.sannysoft.com/");
                //
                // const date = new Date(Date.now()).toLocaleDateString("pl").toString();
                // const time = `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`;
                //
                // await page?.screenshot({
                //   path: `./public/images/test-${date}-${time}.jpeg`,
                //   type: "jpeg",
                //   optimizeForSpeed: true,
                // });
                // await this.closeBrowser();
                res.status(200).json({
                    createdAt: new Date(Date.now()),
                    data,
                });
            }
            catch (err) {
                if (page)
                    yield page.close();
                next(err);
            }
        });
        this.initBrowser = () => __awaiter(this, void 0, void 0, function* () {
            if (this.browser)
                return this.browser;
            return (this.browser = yield puppeteer_extra_1.default.launch({ headless: true, executablePath: (0, puppeteer_1.executablePath)() }));
        });
        this.closeBrowser = () => __awaiter(this, void 0, void 0, function* () {
            if (this.browser)
                yield this.browser.close();
            return;
        });
        this.offersService = offersService;
        this.initBrowser();
    }
}
exports.OffersController = OffersController;
