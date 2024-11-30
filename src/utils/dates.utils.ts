import dayjs, { Dayjs } from "dayjs";
import { Day, Month, MonthName } from "../types/month.types";

const isMonthName = (name: string): name is MonthName => {
  return Object.values(MonthName).includes(name as MonthName);
};

export const newDate = () => {
  return dayjs();
};

export const getDateByDayMonthAndYear = (
  day: Day,
  month: Month,
  year: number
) => {
  return dayjs(`${month.name} ${day.number}, ${year}`, "MMMM D, YYYY");
};

export const getDateByYearAndMonth = (year: number, month: number) => {
  return dayjs(`${month} 1, ${year}`, "M D, YYYY");
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
