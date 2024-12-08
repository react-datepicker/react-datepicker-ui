import {
  getDateByYearAndMonth,
  getDaysInMonthByDate,
  isBeforeDay,
  isToday,
  isWeekend,
  newDate,
} from "./dates.utils";
import { Day } from "../types/calendar.types";
import { CalendarOptions } from "../types/calendarOptions.types";

export const isDateDisabled = (
  date: Date,
  calendarOptions: CalendarOptions
): boolean => {
  const { allowPast, allowFuture, minDate, maxDate } = calendarOptions;
  const checkedDate = newDate(date);
  const currentDate = newDate();

  if (
    (minDate && isBeforeDay(checkedDate, newDate(minDate))) ||
    (maxDate && isBeforeDay(newDate(maxDate), checkedDate))
  ) {
    return true;
  }

  if (
    (!allowPast && isBeforeDay(checkedDate, currentDate)) ||
    (!allowFuture && isBeforeDay(currentDate, checkedDate))
  ) {
    return true;
  }

  return false;
};

export const generateDaysForMonth = (
  month: number,
  year: number,
  calendarOptions: CalendarOptions
): Day[] => {
  const dayjsDate = getDateByYearAndMonth(year, month);
  return Array.from({ length: getDaysInMonthByDate(dayjsDate) }).map(
    (_, index) => {
      const currentDayjsDate = getDateByYearAndMonth(
        dayjsDate.year(),
        dayjsDate.month() + 1,
        index + 1
      );
      return {
        number: index + 1,
        date: currentDayjsDate.toDate(),
        isToday: isToday(currentDayjsDate),
        isWeekend: isWeekend(dayjsDate),
        disabled: false,
        isInCurrentMonth: true,
      };
    }
  );
};
