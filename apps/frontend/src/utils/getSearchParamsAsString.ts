export const getSearchParamsAsString = (params: Record<string, unknown> | undefined): string => {
  if (!params) return "";

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value)
      if (Array.isArray(value) && value.length > 0) searchParams.append(key, value.join(","));
      else searchParams.append(key, String(value));
  });

  return searchParams ? `?${searchParams.toString()}` : "";
};
