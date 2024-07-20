-- CreateTable
CREATE TABLE "TopWorkplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workplaceId" TEXT NOT NULL,
    "statisticsId" TEXT NOT NULL DEFAULT 'general-statistics'
);

-- CreateTable
CREATE TABLE "GeneralStatistics" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'general-statistics',
    "updatedAt" DATETIME NOT NULL,
    "totalOffers" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "TopWorkplace_workplaceId_idx" ON "TopWorkplace"("workplaceId");

-- CreateIndex
CREATE INDEX "TopWorkplace_statisticsId_idx" ON "TopWorkplace"("statisticsId");
