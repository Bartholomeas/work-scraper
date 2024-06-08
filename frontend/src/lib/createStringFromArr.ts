export const createStringFromArr = (arr: unknown[] | undefined): string => (Array.isArray(arr) ? arr.join(", ") : "");
