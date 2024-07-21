/*
  Warnings:

  - You are about to drop the column `displayName` on the `ContractType` table. All the cardValue in the column will be lost.
  - You are about to drop the column `displayName` on the `PositionLevel` table. All the cardValue in the column will be lost.
  - You are about to drop the column `displayName` on the `Technology` table. All the cardValue in the column will be lost.
  - You are about to drop the column `displayName` on the `WorkMode` table. All the cardValue in the column will be lost.
  - You are about to drop the column `displayName` on the `WorkSchedule` table. All the cardValue in the column will be lost.
  - You are about to drop the column `displayName` on the `Workplace` table. All the cardValue in the column will be lost.
  - Added the required column `city` to the `Workplace` table without a default cardValue. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContractType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL
);
INSERT INTO "new_ContractType" ("id", "value") SELECT "id", "value" FROM "ContractType";
DROP TABLE "ContractType";
ALTER TABLE "new_ContractType" RENAME TO "ContractType";
CREATE UNIQUE INDEX "ContractType_value_key" ON "ContractType"("value");
CREATE TABLE "new_PositionLevel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL
);
INSERT INTO "new_PositionLevel" ("id", "value") SELECT "id", "value" FROM "PositionLevel";
DROP TABLE "PositionLevel";
ALTER TABLE "new_PositionLevel" RENAME TO "PositionLevel";
CREATE UNIQUE INDEX "PositionLevel_value_key" ON "PositionLevel"("value");
CREATE TABLE "new_Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL
);
INSERT INTO "new_Technology" ("id", "value") SELECT "id", "value" FROM "Technology";
DROP TABLE "Technology";
ALTER TABLE "new_Technology" RENAME TO "Technology";
CREATE UNIQUE INDEX "Technology_value_key" ON "Technology"("value");
CREATE TABLE "new_WorkMode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL
);
INSERT INTO "new_WorkMode" ("id", "value") SELECT "id", "value" FROM "WorkMode";
DROP TABLE "WorkMode";
ALTER TABLE "new_WorkMode" RENAME TO "WorkMode";
CREATE UNIQUE INDEX "WorkMode_value_key" ON "WorkMode"("value");
CREATE TABLE "new_WorkSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL
);
INSERT INTO "new_WorkSchedule" ("id", "value") SELECT "id", "value" FROM "WorkSchedule";
DROP TABLE "WorkSchedule";
ALTER TABLE "new_WorkSchedule" RENAME TO "WorkSchedule";
CREATE UNIQUE INDEX "WorkSchedule_value_key" ON "WorkSchedule"("value");
CREATE TABLE "new_Workplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT
);
INSERT INTO "new_Workplace" ("id", "value") SELECT "id", "value" FROM "Workplace";
DROP TABLE "Workplace";
ALTER TABLE "new_Workplace" RENAME TO "Workplace";
CREATE UNIQUE INDEX "Workplace_value_key" ON "Workplace"("value");
CREATE INDEX "Workplace_value_idx" ON "Workplace"("value");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
