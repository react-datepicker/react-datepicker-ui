import dayjs from "dayjs";

import { Month } from "@/types/calendar.types";
import { CalendarOptions } from "@/types/calendarOptions.types";

import { getDateByYearAndMonth, getMonthNameByDate } from "./dates.utils";
import { generateDaysForMonth } from "./day.utils";
import { getWeeksForDays } from "./week.utils";

export const addMonthsToMonth = (month: Month, months: number) => {
  const date = getDateByYearAndMonth(month.year, month.number);

  return date.add(months, "months");
};

const createMonthFromDate = (
  date: dayjs.Dayjs,
  calendarOptions: CalendarOptions<boolean>
): Month => {
  const days = generateDaysForMonth(
    date.month() + 1,
    date.year(),
    calendarOptions
  );
  return {
    name: getMonthNameByDate(date),
    number: date.month() + 1,
    year: date.year(),
    days,
    weeks: getWeeksForDays(days, calendarOptions),
  };
};

export const getPreviousMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1,
  calendarOptions: CalendarOptions<boolean>
): Month[] => {
  return [
    ...Array.from({ length: steps }).map((_, index) => {
      const previousMonth = addMonthsToMonth(months[0], -(index + 1));
      return createMonthFromDate(previousMonth, calendarOptions);
    }),
    ...months.slice(0, months.length - steps),
  ];
};

export const getNextMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1,
  calendarOptions: CalendarOptions<boolean>
): Month[] => {
  const lastMonth = months[months.length - 1];

  return [
    ...months.slice(steps),
    ...Array.from({ length: steps }).map((_, index) => {
      const nextMonthDate = addMonthsToMonth(lastMonth, index + 1);
      return createMonthFromDate(nextMonthDate, calendarOptions);
    }),
  ];
};

export const getNextYearForDisplayedMonths = (
  months: Month[],
  calendarOptions: CalendarOptions<boolean>
): Month[] => {
  return months.map((month) => {
    const nextYearDate = addMonthsToMonth(month, 12);
    return createMonthFromDate(nextYearDate, calendarOptions);
  });
};

export const getPreviousYearForDisplayedMonths = (
  months: Month[],
  calendarOptions: CalendarOptions<boolean>
): Month[] => {
  return months.map((month) => {
    const previousYearDate = addMonthsToMonth(month, -12);
    return createMonthFromDate(previousYearDate, calendarOptions);
  });
};

export const getNewMonthsForYear = (
  months: Month[],
  year: number,
  calendarOptions: CalendarOptions<boolean>
): Month[] => {
  return months.map((month) => {
    const newDate = getDateByYearAndMonth(year, month.number);
    return createMonthFromDate(newDate, calendarOptions);
  });
};
