import dayjs, { Dayjs } from "dayjs";
import weekDay from "dayjs/plugin/weekday";
import isBetween from "dayjs/plugin/isBetween";
import { Day, Month, MonthName } from "../types/month.types";

dayjs.extend(weekDay);
dayjs.extend(isBetween);

const isMonthName = (name: string): name is MonthName => {
  return Object.values(MonthName).includes(name as MonthName);
};

export const newDate = (date?: Date) => {
  return dayjs(date);
};

export const getDateByDayMonthAndYear = (
  day: Day,
  month: Month,
  year: number
) => {
  return dayjs(`${month.name} ${day.number}, ${year}`, "MMMM D, YYYY");
};

export const getDateByYearAndMonth = (
  year: number,
  month: number,
  day: number = 1
) => {
  return dayjs(`${month} ${day}, ${year}`, "M D, YYYY");
};

/**
 * @deprecated The method should not be used and removed
 */
export const getDateByYearAndMonthName = (year: number, monthName: string) => {
  return dayjs(`${monthName} 1, ${year}`, "MMMM D, YYYY");
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

export const isWeekend = (date: Dayjs) => {
  return date.weekday() === 6 || date.weekday() === 7;
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
