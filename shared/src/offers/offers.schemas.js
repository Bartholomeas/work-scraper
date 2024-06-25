"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offersMetadataSchema = exports.jobOffersResponseSchema = exports.offersQueryParameters = exports.offerTechCategories = exports.companySchema = exports.jobOfferSchema = exports.salaryRangeSchema = exports.timeUnitTypeSchema = exports.salaryTypeSchema = exports.currenciesSchema = exports.dataSourceCodesSchema = exports.workSchedulesSchema = exports.workModesSchema = exports.contractTypeCodesSchema = exports.positionLevelsSchema = void 0;
const zod_1 = require("zod");
const query_schemas_1 = require("../general/query.schemas");
exports.positionLevelsSchema = zod_1.z.enum(["intern", "junior", "mid", "senior", "manager"]);
exports.contractTypeCodesSchema = zod_1.z.enum(["uz", "uop", "b2b", "uod", "intern"]);
exports.workModesSchema = zod_1.z.enum(["remote", "hybrid", "stationary"]);
exports.workSchedulesSchema = zod_1.z.enum(["full-time", "part-time", "internship", "freelance"]);
exports.dataSourceCodesSchema = zod_1.z.enum(["pracuj", "justjoin"]);
exports.currenciesSchema = zod_1.z.enum(["pln", "usd"]);
exports.salaryTypeSchema = zod_1.z.enum(["brutto", "netto"]);
exports.timeUnitTypeSchema = zod_1.z.enum(["month", "hour", "day"]);
exports.salaryRangeSchema = zod_1.z
    .object({
    min: zod_1.z.number(),
    max: zod_1.z.number(),
    currency: exports.currenciesSchema.default("pln"),
    type: exports.salaryTypeSchema.default("brutto"),
    timeUnit: exports.timeUnitTypeSchema.default("month"),
})
    .optional();
exports.jobOfferSchema = zod_1.z.object({
    id: zod_1.z.string(),
    dataSourceCode: exports.dataSourceCodesSchema.optional(),
    slug: zod_1.z.string(),
    positionName: zod_1.z.string(),
    companyName: zod_1.z.string().optional(),
    company: zod_1.z.object({
        logoUrl: zod_1.z.string().nullable(),
        name: zod_1.z.string(),
    }),
    salaryRange: zod_1.z.array(exports.salaryRangeSchema),
    positionLevels: zod_1.z.array(exports.positionLevelsSchema),
    // contractTypes: z.array(contractTypeCodesSchema),
    contractTypes: zod_1.z.array(exports.contractTypeCodesSchema),
    workModes: zod_1.z.array(exports.workModesSchema),
    // workModes: z.array(z.string()),
    workSchedules: zod_1.z.array(exports.workSchedulesSchema),
    // workSchedules: z.array(z.string()),
    technologies: zod_1.z.array(zod_1.z.string()),
    description: zod_1.z.string().optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string().optional(),
    expirationDate: zod_1.z.string().optional(),
    offerUrls: zod_1.z.array(zod_1.z.string().url()),
    workplaces: zod_1.z.array(zod_1.z.string()),
});
exports.companySchema = zod_1.z.object({
    logoUrl: zod_1.z.string().nullable(),
    name: zod_1.z.string(),
});
exports.offerTechCategories = zod_1.z.union([
    zod_1.z.literal("html"),
    zod_1.z.literal("css"),
    zod_1.z.literal("javascript"),
    zod_1.z.literal("typescript"),
    zod_1.z.literal("sql"),
    zod_1.z.literal("python"),
    zod_1.z.literal("java"),
    zod_1.z.literal("c#"),
    zod_1.z.literal("php"),
    zod_1.z.literal("c++"),
    zod_1.z.literal("go"),
    zod_1.z.literal("c"),
    zod_1.z.literal("rust"),
    zod_1.z.literal("r"),
    zod_1.z.literal("node.js"),
    zod_1.z.literal(".net"),
    zod_1.z.literal("react"),
    zod_1.z.literal("angular"),
    zod_1.z.literal("android"),
    zod_1.z.literal("aws"),
    zod_1.z.literal("ios"),
    zod_1.z.literal("ruby on rails"),
]);
const stringToArray = (val) => (typeof val === "string" ? val.split(",").map(v => v.trim()) : val);
exports.offersQueryParameters = zod_1.z
    .object({
    search: zod_1.z.string().optional(),
    orderBy: zod_1.z.enum(["createdAt", "expirationDate", "salary"]).default("createdAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
    categories: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.offerTechCategories)).optional(),
    positionLevels: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.positionLevelsSchema)).optional(),
    contractTypes: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.contractTypeCodesSchema)).optional(),
    workModes: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.workModesSchema)).optional(),
    workSchedules: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.workSchedulesSchema)).optional(),
    dataSources: zod_1.z.preprocess(stringToArray, zod_1.z.array(exports.dataSourceCodesSchema)).optional(),
})
    .extend(query_schemas_1.paginationSchema.shape)
    .strip();
exports.jobOffersResponseSchema = zod_1.z.object({
    meta: query_schemas_1.paginationMetadataSchema,
    data: zod_1.z.array(exports.jobOfferSchema),
});
exports.offersMetadataSchema = zod_1.z.object({
    id: zod_1.z.literal("offers-metadata"),
    updatedAt: zod_1.z.string().date(),
    total: zod_1.z.number(),
});
