export const getPercentOf = (currentValue: number | undefined, coreValue: number | undefined): string => {
  if (!currentValue || !coreValue) return "0";

  const actualRatio = currentValue / coreValue;
  return `${actualRatio >= 0 ? "" : "-"}${(actualRatio * 100).toFixed(2)}%`;
};
