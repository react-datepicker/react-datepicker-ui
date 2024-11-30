import dayjs from "dayjs";

import {
  addMonthsToDate,
  getDaysInMonthByDate,
  getMonthNameByDate,
  newDate,
} from "./dates.utils";
import { Month, MonthName } from "../types/calendar.types";

export const getDefaultDisPlayedMonths: (
  numberOfDisplayedMonths: number
) => Month[] = (numberOfDisplayedMonths) => {
  const today = newDate();
  const monthName = getMonthNameByDate(today);
  if (!monthName) {
    return [
      {
        name: MonthName.January,
        year: 2024,
        days: Array.from({ length: dayjs("2024-01").daysInMonth() }).map(
          (_, index) => ({
            number: index + 1,
          })
        ),
        weeks: [],
      },
    ];
  }

  return Array.from({ length: numberOfDisplayedMonths }).map((_, monthIdex) => {
    const currentMonth = addMonthsToDate(today, monthIdex);
    const currentYear = currentMonth.year();
    return {
      name: getMonthNameByDate(currentMonth),
      year: currentYear,
      days: Array.from({ length: getDaysInMonthByDate(currentMonth) }).map(
        (_, dayIndex) => ({
          number: dayIndex + 1,
        })
      ),
    };
  });
};
