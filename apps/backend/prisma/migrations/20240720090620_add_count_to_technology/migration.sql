-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Technology" ("id", "value") SELECT "id", "value" FROM "Technology";
DROP TABLE "Technology";
ALTER TABLE "new_Technology" RENAME TO "Technology";
CREATE UNIQUE INDEX "Technology_value_key" ON "Technology"("value");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
