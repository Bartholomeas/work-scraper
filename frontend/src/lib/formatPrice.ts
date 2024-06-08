import { CURRENCY } from "@/constants";

export const formatPrice = (amount: number | string | undefined, currency = CURRENCY) => {
  if (!amount) return `0.00 ${currency}`;

  const convertedAmount = typeof amount === "string" ? parseInt(amount) : amount;
  if (!convertedAmount || isNaN(convertedAmount)) return `0.00 ${currency}`;

  const formattedAmount = convertedAmount.toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${formattedAmount} ${currency}`;
};
