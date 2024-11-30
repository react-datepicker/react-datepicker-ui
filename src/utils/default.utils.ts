import dayjs from "dayjs";

import { addMonthsToDate, getMonthNameByDate, newDate } from "./dates.utils";

import { generateDaysForMonth } from "./day.utils";
import { Month } from "../types/calendar.types";
import { getWeeksForDays } from "./week.utils";

export const getDefaultDisPlayedMonths: (
  numberOfDisplayedMonths: number
) => Month[] = (numberOfDisplayedMonths) => {
  const today = newDate();

  return Array.from({ length: numberOfDisplayedMonths }).map((_, monthIdex) => {
    const currentMonth = addMonthsToDate(today, monthIdex);
    const currentYear = currentMonth.year();
    const days = generateDaysForMonth(currentMonth.month() + 1, currentYear);
    return {
      name: getMonthNameByDate(currentMonth),
      year: currentYear,
      number: currentMonth.month() + 1,
      days,
      weeks: getWeeksForDays(days),
    };
  });
};
