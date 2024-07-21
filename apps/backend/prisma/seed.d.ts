import type { JobOffer } from "shared/src/offers/offers.types";
import { PrismaClient } from "@prisma/client";
export declare const mockOffer: JobOffer;
export declare function seedDb(
  prismaClient: PrismaClient,
): Promise<PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>>;
//# sourceMappingURL=seed.d.ts.map
