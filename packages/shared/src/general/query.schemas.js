"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationMetadataSchema = exports.paginationSchema = void 0;
const zod_1 = require("zod");
const toNumberWithDefault = (defaultValue) => (val) => {
    if (!val)
        return defaultValue;
    const parsed = typeof val === "string" ? parseInt(val, 10) : `${val}`;
    return isNaN(+parsed) ? defaultValue : parsed;
};
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.preprocess(toNumberWithDefault(1), zod_1.z.number().min(1)),
    perPage: zod_1.z.preprocess(toNumberWithDefault(24), zod_1.z.number().min(8)),
});
exports.paginationMetadataSchema = zod_1.z.intersection(exports.paginationSchema, zod_1.z.object({
    // currentPage: z.number().default(1),
    totalPages: zod_1.z.number().default(1),
    total: zod_1.z.number().min(0),
    // perPage: z.number().default(24),
    hasNextPage: zod_1.z.boolean().default(false),
    hasPrevPage: zod_1.z.boolean().default(false),
}));
