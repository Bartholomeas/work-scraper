-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "logoUrl" TEXT,
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "PositionLevel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ContractType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WorkMode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WorkSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OfferUrl" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Workplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SalaryRange" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'pln',
    "type" TEXT NOT NULL DEFAULT 'brutto',
    "timeUnit" TEXT NOT NULL DEFAULT 'month',
    "jobOfferId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "dataSourceCode" TEXT,
    "description" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "expirationDate" DATETIME,
    "companyName" TEXT
);

-- CreateTable
CREATE TABLE "OffersMetadata" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'offers-metadata',
    "updatedAt" DATETIME NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "_ContractTypes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PositionLevels" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WorkModes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WorkSchedules" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Technologies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Workplaces" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PositionLevel_value_key" ON "PositionLevel"("value");

-- CreateIndex
CREATE UNIQUE INDEX "ContractType_value_key" ON "ContractType"("value");

-- CreateIndex
CREATE UNIQUE INDEX "WorkMode_value_key" ON "WorkMode"("value");

-- CreateIndex
CREATE UNIQUE INDEX "WorkSchedule_value_key" ON "WorkSchedule"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Technology_value_key" ON "Technology"("value");

-- CreateIndex
CREATE INDEX "OfferUrl_jobOfferId_idx" ON "OfferUrl"("jobOfferId");

-- CreateIndex
CREATE UNIQUE INDEX "Workplace_value_key" ON "Workplace"("value");

-- CreateIndex
CREATE INDEX "Workplace_value_idx" ON "Workplace"("value");

-- CreateIndex
CREATE UNIQUE INDEX "SalaryRange_jobOfferId_key" ON "SalaryRange"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobOffer_companyName_idx" ON "JobOffer"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "_ContractTypes_AB_unique" ON "_ContractTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_ContractTypes_B_index" ON "_ContractTypes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PositionLevels_AB_unique" ON "_PositionLevels"("A", "B");

-- CreateIndex
CREATE INDEX "_PositionLevels_B_index" ON "_PositionLevels"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WorkModes_AB_unique" ON "_WorkModes"("A", "B");

-- CreateIndex
CREATE INDEX "_WorkModes_B_index" ON "_WorkModes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WorkSchedules_AB_unique" ON "_WorkSchedules"("A", "B");

-- CreateIndex
CREATE INDEX "_WorkSchedules_B_index" ON "_WorkSchedules"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Technologies_AB_unique" ON "_Technologies"("A", "B");

-- CreateIndex
CREATE INDEX "_Technologies_B_index" ON "_Technologies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Workplaces_AB_unique" ON "_Workplaces"("A", "B");

-- CreateIndex
CREATE INDEX "_Workplaces_B_index" ON "_Workplaces"("B");
