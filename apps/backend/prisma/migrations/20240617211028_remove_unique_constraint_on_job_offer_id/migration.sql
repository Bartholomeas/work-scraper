-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SalaryRange" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "min" INTEGER NOT NULL DEFAULT 0,
    "max" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'pln',
    "type" TEXT NOT NULL DEFAULT 'brutto',
    "timeUnit" TEXT NOT NULL DEFAULT 'month',
    "jobOfferId" TEXT NOT NULL
);
INSERT INTO "new_SalaryRange" ("currency", "id", "jobOfferId", "max", "min", "timeUnit", "type") SELECT "currency", "id", "jobOfferId", "max", "min", "timeUnit", "type" FROM "SalaryRange";
DROP TABLE "SalaryRange";
ALTER TABLE "new_SalaryRange" RENAME TO "SalaryRange";
CREATE INDEX "SalaryRange_jobOfferId_idx" ON "SalaryRange"("jobOfferId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
