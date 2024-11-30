import { Month } from "../types/calendar.types";
import {
  getDateByYearAndMonthName,
  getDaysInMonthByDate,
  getMonthNameByDate,
} from "./dates.utils";
import { generateDaysByDate } from "./day.utils";

export const addMonthsToMonth = (month: Month, months: number) => {
  const date = getDateByYearAndMonthName(month.year, month.name);
  // const date = dayjs(`${month.name} 1, ${month.year}`, "MMMM D, YYYY");
  return date.add(months, "months");
};

export const getPreviousMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1
) => {
  return [
    ...Array.from({ length: steps }).map((_, index) => {
      const previousMonth = addMonthsToMonth(months[0], -(index + 1));

      return {
        name: getMonthNameByDate(previousMonth),
        year: previousMonth.year(),
        days: Array.from({ length: getDaysInMonthByDate(previousMonth) }).map(
          (_, dayIndex) => ({
            number: dayIndex + 1,
          })
        ),
      };
    }),
    ...months.slice(0, months.length - steps),
  ];
};

export const getNextMonthForDisplayedMonths = (
  months: Month[],
  steps: number = 1
) => {
  const lastMonth = months[months.length - 1];

  return [
    ...months.slice(steps),
    ...Array.from({ length: steps }).map((_, index) => {
      const nextMonthDate = addMonthsToMonth(lastMonth, index + 1);
      return {
        name: getMonthNameByDate(nextMonthDate),
        year: nextMonthDate.year(),
        days: Array.from({ length: getDaysInMonthByDate(nextMonthDate) }).map(
          (_, dayIndex) => ({
            number: dayIndex + 1,
          })
        ),
      };
    }),
  ];
};

export const getNextYearForDisplayedMonths = (months: Month[]) => {
  return months.map((month) => {
    const nextYearDate = addMonthsToMonth(month, 12);
    return {
      name: getMonthNameByDate(nextYearDate),
      year: nextYearDate.year(),
      days: generateDaysByDate(nextYearDate),
    };
  });
};

export const getPreviousYearForDisplayedMonths = (months: Month[]) => {
  return months.map((month) => {
    const nextYearDate = addMonthsToMonth(month, -12);
    return {
      name: getMonthNameByDate(nextYearDate),
      year: nextYearDate.year(),
      days: generateDaysByDate(nextYearDate),
    };
  });
};
