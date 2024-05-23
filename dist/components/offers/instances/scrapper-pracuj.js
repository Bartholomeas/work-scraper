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
exports.ScrapperPracuj = void 0;
const node_path_1 = __importDefault(require("node:path"));
const files_manager_controller_1 = require("@/components/files-manager/files-manager.controller");
const scrapper_base_1 = require("@/components/offers/instances/scrapper-base");
class ScrapperPracuj extends scrapper_base_1.ScrapperBase {
    constructor(browser, props) {
        super(browser, props);
        this.getScrappedData = (...args_1) => __awaiter(this, [...args_1], void 0, function* (query = {}) {
            if (!this.page)
                return null;
            const pagePromises = [];
            console.time("HeH2");
            const fileStat = yield this.filesManager.getFileUpdatedDate({
                fileName: "pracuj-standardized",
            });
            console.timeEnd("HeH2");
            this.maxPages = yield this.getMaxPages();
            for (let page = 1; page <= this.maxPages; page++) {
                pagePromises.push(this.scrapePage(page));
            }
            const results = yield Promise.all(pagePromises);
            const aggregatedData = results.filter(Boolean).flat();
            const standardizedData = this.standardizeData(aggregatedData);
            yield Promise.all([
                this.filesManager.saveToFile({
                    data: aggregatedData,
                    fileName: "pracuj-data",
                }),
                this.filesManager.saveToFile({
                    data: standardizedData,
                    fileName: "pracuj-standardized",
                }),
            ]);
            return standardizedData;
        });
        this.browser = browser;
        this.maxPages = 1;
        this.filesManager = new files_manager_controller_1.FilesManagerController(node_path_1.default.resolve(__dirname, "../../../../public/scrapped-data"));
    }
    standardizeData(offers) {
        if (!offers.length)
            return [];
        return offers.map((offer) => {
            var _a, _b;
            return ({
                id: offer === null || offer === void 0 ? void 0 : offer.groupId,
                positionName: offer === null || offer === void 0 ? void 0 : offer.jobTitle,
                company: {
                    logoUrl: offer === null || offer === void 0 ? void 0 : offer.companyLogoUri,
                    name: offer === null || offer === void 0 ? void 0 : offer.companyName,
                },
                positionLevel: "mid",
                contractType: offer === null || offer === void 0 ? void 0 : offer.typesOfContract,
                workModes: offer === null || offer === void 0 ? void 0 : offer.workModes,
                workSchedules: offer === null || offer === void 0 ? void 0 : offer.workSchedules,
                technologies: offer === null || offer === void 0 ? void 0 : offer.technologies,
                description: offer === null || offer === void 0 ? void 0 : offer.jobDescription,
                createdAt: offer === null || offer === void 0 ? void 0 : offer.lastPublicated,
                expirationDate: offer === null || offer === void 0 ? void 0 : offer.expirationDate,
                offerUrls: (_a = offer === null || offer === void 0 ? void 0 : offer.offers) === null || _a === void 0 ? void 0 : _a.map(url => url === null || url === void 0 ? void 0 : url.offerAbsoluteUri),
                workplace: (_b = offer === null || offer === void 0 ? void 0 : offer.offers) === null || _b === void 0 ? void 0 : _b.map(place => place === null || place === void 0 ? void 0 : place.displayWorkplace),
            });
        });
    }
    scrapePage(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.time(`PAGE-${pageNumber}`);
            const page = yield ((_a = this === null || this === void 0 ? void 0 : this.browser) === null || _a === void 0 ? void 0 : _a.newPage());
            if (!page)
                return;
            try {
                yield page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });
                const content = yield page.evaluate(() => {
                    const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
                    return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
                });
                yield page.close();
                console.timeEnd(`PAGE-${pageNumber}`);
                if (content)
                    return content.props.pageProps.data.jobOffers.groupedOffers;
                return;
            }
            catch (err) {
                console.error(`Error processing page ${pageNumber}:`, err);
                yield page.close();
                return;
            }
        });
    }
    getMaxPages() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.page)
                return 1;
            // // TODO: Uncomment that, added low pages to prevent overload
            // const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
            // let maxPagesValue = "1";
            // if (maxPagesElement) {
            //   const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
            //   if (textContent) maxPagesValue = textContent ?? "1";
            // }
            // return parseInt(maxPagesValue);
            return 2;
        });
    }
}
exports.ScrapperPracuj = ScrapperPracuj;
