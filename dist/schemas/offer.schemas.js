"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerTechCategories = void 0;
const zod_1 = require("zod");
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
