import dayjs, { Dayjs } from "dayjs";
import weekDay from "dayjs/plugin/weekday";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";

import { Day, Month, MonthName } from "@react-datepicker/types";

import { LocaleKey, LocaleWeekends } from "./locale.utils";

dayjs.extend(weekDay);
dayjs.extend(isBetween);
dayjs.extend(localeData);

export const DATE_DISPLAY_SHORT_FORMAT = "MMM D, YYYY";
export const DATE_DISPLAY_FORMAT = "MMMM D, YYYY";

const isMonthName = (name: string): name is MonthName => {
  return Object.values(MonthName).includes(name as MonthName);
};

export const getWeekdays = () => {
  return dayjs.weekdays();
};

export const newDate = (date?: Date) => {
  return dayjs(date);
};

export const getDateByDayMonthAndYear = (
  day: Day,
  month: Month,
  year: number
) => {
  return dayjs(`${month.name} ${day.number}, ${year}`, DATE_DISPLAY_FORMAT);
};

export const getDateByYearAndMonth = (
  year: number,
  month: number,
  day: number = 1
) => {
  return dayjs(`${month} ${day}, ${year}`, "M D, YYYY");
};

export const getDaysInMonthByDate = (date: Dayjs) => {
  return date.daysInMonth();
};

export const getMonthNameByDate: (date: Dayjs) => MonthName = (date: Dayjs) => {
  const formattedDate = date.format("MMMM");
  if (!isMonthName(formattedDate)) {
    throw new Error("Invalid month name");
  }
  return formattedDate;
};

export const addMonthsToDate = (date: Dayjs, months: number) => {
  return date.add(months, "months");
};

export const getStartOfMonthByDate = (date: Dayjs) => {
  return date.startOf("month");
};

export const getEndOfMonthByDate = (date: Dayjs) => {
  return date.endOf("month");
};

export const getStartOfWeekByDate = (date: Dayjs) => {
  return date.startOf("week");
};

export const getEndOfWeekByDate = (date: Dayjs) => {
  return date.endOf("week");
};

export const isToday = (date: Dayjs) => {
  return date.isSame(newDate(), "day");
};

export const isWeekend = (date: Dayjs, locale: LocaleKey = "en") => {
  return LocaleWeekends[locale].includes(date.weekday());
};

export const isBeforeDay = (date: Dayjs, dateToCompare: Dayjs) => {
  return date.isBefore(dateToCompare, "day");
};

export const isAfterDay = (date: Dayjs, dateToCompare: Dayjs) => {
  return date.isAfter(dateToCompare, "day");
};

export const isSame = (date: Dayjs, dateToCompare: Dayjs) => {
  return date.isSame(dateToCompare);
};

export const isBetweenDates = (
  date: Dayjs,
  startDate: Dayjs,
  endDate: Dayjs
) => {
  const isIt = date.isBetween(startDate, endDate);
  return isIt;
};

export const isDate = (date: unknown): date is Date => {
  return date instanceof Date;
};
