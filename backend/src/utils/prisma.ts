export const createOrConnectArray = (values: string[]) => {
  return {
    connectOrCreate: values?.map(_value => {
      const value = _value.toLowerCase();
      return {
        where: { value },
        create: { value },
      };
    }),
  };
};
