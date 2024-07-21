-- CreateTable
CREATE TABLE "TopCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardValue" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "statisticsId" TEXT NOT NULL DEFAULT 'general-statistics'
);

-- CreateIndex
CREATE INDEX "TopCategory_statisticsId_idx" ON "TopCategory"("statisticsId");
