import { Month } from "../types/calendar.types";
import { CalendarOptions } from "../types/calendarOptions.types";
import { getDateByYearAndMonth, getMonthNameByDate } from "./dates.utils";
import { generateDaysForMonth } from "./day.utils";
import { getWeeksForDays } from "./week.utils";

export const addMonthsToMonth = (month: Month, months: number) => {
  const date = getDateByYearAndMonth(month.year, month.number);

  return date.add(months, "months");
};

export const getPreviousMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1,
  calendarOptions: CalendarOptions
): Month[] => {
  return [
    ...Array.from({ length: steps }).map((_, index) => {
      const previousMonth = addMonthsToMonth(months[0], -(index + 1));
      const days = generateDaysForMonth(
        previousMonth.month() + 1,
        previousMonth.year(),
        calendarOptions
      );
      return {
        name: getMonthNameByDate(previousMonth),
        number: previousMonth.month() + 1,
        year: previousMonth.year(),
        days,
        weeks: getWeeksForDays(days, calendarOptions),
      };
    }),
    ...months.slice(0, months.length - steps),
  ];
};

export const getNextMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1,
  calendarOptions: CalendarOptions
): Month[] => {
  const lastMonth = months[months.length - 1];

  return [
    ...months.slice(steps),
    ...Array.from({ length: steps }).map((_, index) => {
      const nextMonthDate = addMonthsToMonth(lastMonth, index + 1);
      const days = generateDaysForMonth(
        nextMonthDate.month() + 1,
        nextMonthDate.year(),
        calendarOptions
      );
      return {
        name: getMonthNameByDate(nextMonthDate),
        number: nextMonthDate.month() + 1,
        year: nextMonthDate.year(),
        days,
        weeks: getWeeksForDays(days, calendarOptions),
      };
    }),
  ];
};

export const getNextYearForDisplayedMonths = (
  months: Month[],
  calendarOptions: CalendarOptions
): Month[] => {
  return months.map((month) => {
    const nextYearDate = addMonthsToMonth(month, 12);
    const days = generateDaysForMonth(
      nextYearDate.month() + 1,
      nextYearDate.year(),
      calendarOptions
    );
    return {
      name: getMonthNameByDate(nextYearDate),
      number: nextYearDate.month() + 1,
      year: nextYearDate.year(),
      days,
      weeks: getWeeksForDays(days, calendarOptions),
    };
  });
};

export const getPreviousYearForDisplayedMonths = (
  months: Month[],
  calendarOptions: CalendarOptions
): Month[] => {
  return months.map((month) => {
    const previousYearDate = addMonthsToMonth(month, -12);
    const days = generateDaysForMonth(
      previousYearDate.month() + 1,
      previousYearDate.year(),
      calendarOptions
    );
    return {
      name: getMonthNameByDate(previousYearDate),
      number: previousYearDate.month() + 1,
      year: previousYearDate.year(),
      days,
      weeks: getWeeksForDays(days, calendarOptions),
    };
  });
};
