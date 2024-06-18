export const connectOrCreateArray = (values: string[] | undefined) => {
  if (!Array.isArray(values)) return {};

  return {
    connectOrCreate: values?.map(_value => {
      const value = _value?.toLowerCase();
      return {
        where: { value },
        create: { value },
      };
    }),
  };
};
