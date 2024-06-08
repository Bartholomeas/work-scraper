import dayjs from "dayjs";

export const formatDate = (date: string | undefined) => {
  if (!date) return;
  return dayjs(date).format("DD.MM.YYYY");
};
