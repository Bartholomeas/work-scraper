import { z, type ZodRawShape } from "zod";

type ArrayToObjectParser<T extends string[] = []> = {
  [Key in T[number]]: Key;
};

export const parseZodSchemaToInputNames = <T extends ZodRawShape>(schema: z.ZodObject<T>) => {
  const schemaKeys = Object.keys(schema.shape) as (keyof T & string)[];
  return schemaKeys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: curr,
    }),
    {} as ArrayToObjectParser<(keyof T & string)[]>,
  );
};
