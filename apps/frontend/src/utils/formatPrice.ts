import { CURRENCY } from "@/constants";

export const formatPrice = (amount: number | string | undefined, _currency = CURRENCY) => {
  const currency = _currency.toLowerCase() === "zł" ? "pln" : _currency;
  if (!amount) return `0.00 ${currency}`;

  const convertedAmount = typeof amount === "string" ? parseInt(amount) : amount;
  if (!convertedAmount || isNaN(convertedAmount)) return `0.00 ${currency}`;

  const formattedAmount = Intl.NumberFormat("pl-PL", {
    style: "currency",
    notation: "standard",
    unitDisplay: "short",
    currencySign: "accounting",
    currency,
  }).format(+amount);

  return `${formattedAmount}`;
};
