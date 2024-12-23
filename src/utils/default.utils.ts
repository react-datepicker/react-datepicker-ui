import { Month } from "@/types/calendar.types";
import { CalendarOptions } from "@/types/calendarOptions.types";

import { newDate } from "./dates.utils";

import { generateMonthsByDate } from "./month.utils";

export const getDefaultDisPlayedMonths: (
  calendarOptions: CalendarOptions<boolean>
) => Month[] = (calendarOptions) => {
  const today = newDate();

  return generateMonthsByDate(today, calendarOptions);
};
