import { Day, Week } from "../types/calendar.types";
import {
  getEndOfWeekByDate,
  getStartOfWeekByDate,
  isBeforeDay,
  isSame,
  isToday,
  isWeekend,
  newDate,
} from "./dates.utils";

export const getWeeksForDays = (days: Day[]): Week[] => {
  if (days.length === 0) return [];

  const startOfFirstWeek = getStartOfWeekByDate(newDate(days[0].date));
  const endOfLastWeek = getEndOfWeekByDate(newDate(days[days.length - 1].date));

  const weeks: Week[] = [];
  let currentDay = startOfFirstWeek;

  while (
    isBeforeDay(currentDay, endOfLastWeek) ||
    isSame(currentDay, endOfLastWeek)
  ) {
    const daysInWeek = Array.from({ length: 7 }, (_, i) => {
      const day = currentDay.add(i, "day");
      const match = days.find((d) => isSame(newDate(d.date), day));
      return (
        match || {
          number: day.date(),
          date: day.toDate(),
          isToday: isToday(day),
          isWeekend: isWeekend(day),
          isInCurrentMonth: false,
        }
      );
    });

    weeks.push({ days: daysInWeek });
    currentDay = currentDay.add(7, "day"); // Move to the next week
  }

  return weeks;
};
