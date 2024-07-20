/*
  Warnings:

  - You are about to drop the column `workplaceId` on the `TopWorkplace` table. All the data in the column will be lost.
  - Added the required column `city` to the `TopWorkplace` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TopWorkplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "city" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "statisticsId" TEXT NOT NULL DEFAULT 'general-statistics'
);
INSERT INTO "new_TopWorkplace" ("id", "statisticsId") SELECT "id", "statisticsId" FROM "TopWorkplace";
DROP TABLE "TopWorkplace";
ALTER TABLE "new_TopWorkplace" RENAME TO "TopWorkplace";
CREATE INDEX "TopWorkplace_statisticsId_idx" ON "TopWorkplace"("statisticsId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
