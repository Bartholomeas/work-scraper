export const connectOrCreateArray = (values: string[]) => {
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
