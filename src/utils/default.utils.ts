import { addMonthsToDate, getMonthNameByDate, newDate } from "./dates.utils";

import { generateDaysForMonth } from "./day.utils";
import { Month } from "../types/calendar.types";
import { getWeeksForDays } from "./week.utils";
import { CalendarOptions } from "../types/calendarOptions.types";

export const getDefaultDisPlayedMonths: (
  calendarOptions: CalendarOptions<boolean>
) => Month[] = (calendarOptions) => {
  const today = newDate();

  return Array.from({
    length: calendarOptions.numberOfDisplayedMonths || 1,
  }).map((_, monthIdex) => {
    const currentMonth = addMonthsToDate(today, monthIdex);
    const currentYear = currentMonth.year();
    const days = generateDaysForMonth(
      currentMonth.month() + 1,
      currentYear,
      calendarOptions
    );
    return {
      name: getMonthNameByDate(currentMonth),
      year: currentYear,
      number: currentMonth.month() + 1,
      days,
      weeks: getWeeksForDays(days, calendarOptions),
    };
  });
};
