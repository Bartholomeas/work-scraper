-- DropIndex
DROP INDEX "Workplace_value_idx";

-- CreateIndex
CREATE INDEX "Workplace_value_city_idx" ON "Workplace"("value", "city");
