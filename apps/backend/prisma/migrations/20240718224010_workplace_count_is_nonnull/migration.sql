-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT,
    "count" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Workplace" ("address", "city", "count", "id", "value") SELECT "address", "city", coalesce("count", 0) AS "count", "id", "value" FROM "Workplace";
DROP TABLE "Workplace";
ALTER TABLE "new_Workplace" RENAME TO "Workplace";
CREATE UNIQUE INDEX "Workplace_value_key" ON "Workplace"("value");
CREATE INDEX "Workplace_value_city_idx" ON "Workplace"("value", "city");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
