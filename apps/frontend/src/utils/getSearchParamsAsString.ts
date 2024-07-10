/**
 * Takes in an object of parameters and returns a string representation of the parameters as URL search parameters.
 * If the input parameter is undefined, an empty string is returned.
 * Each key-value pair in the input object is converted to a query parameter in the format key=value.
 * If the value is an array, it is joined with commas before being added as a query parameter.
 *
 * @param params - An object containing the parameters to be converted to URL search parameters.
 * @returns A string representing the URL search parameters generated from the input object.
 */
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
