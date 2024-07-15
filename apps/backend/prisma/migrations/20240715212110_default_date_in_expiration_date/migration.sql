-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "dataSourceCode" TEXT,
    "description" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "expirationDate" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT
);
INSERT INTO "new_JobOffer" ("companyName", "createdAt", "dataSourceCode", "description", "expirationDate", "id", "positionName", "slug", "updatedAt") SELECT "companyName", "createdAt", "dataSourceCode", "description", "expirationDate", "id", "positionName", "slug", "updatedAt" FROM "JobOffer";
DROP TABLE "JobOffer";
ALTER TABLE "new_JobOffer" RENAME TO "JobOffer";
CREATE INDEX "JobOffer_companyName_idx" ON "JobOffer"("companyName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
