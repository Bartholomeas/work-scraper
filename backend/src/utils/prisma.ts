export const connectOrCreateArray = (values: string[] | undefined) => {
  if (!Array.isArray(values)) {
    return {
      create: [],
    };
  }

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
