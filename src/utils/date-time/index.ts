import { parseISO, format, addMonths } from "date-fns";

type DateFromGraph =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

const formatUTCString = (utcISOString: string, formatString: string) => {
  const cleanedDate = parseISO(utcISOString);
  const utcDate = new Date(cleanedDate);

  return format(utcDate, formatString);
};

const getXMonthsAgoISOString = (monthsAgo: number) => {
  const date = new Date();
  const twelveMonthsAgo = addMonths(date, -monthsAgo);

  return twelveMonthsAgo.toISOString();
};

const formatDate = (date: DateFromGraph, formatType = "M/dd") => {
  const actualDate = new Date(date);

  return format(actualDate, formatType);
};

export { formatUTCString, getXMonthsAgoISOString, formatDate };
