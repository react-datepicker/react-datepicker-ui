import dayjs from "dayjs";
import {
  getDateByDayMonthAndYear,
  getDateByYearAndMonth,
  getDaysInMonthByDate,
  isToday,
  isWeekend,
} from "./dates.utils";
import { Day } from "../types/calendar.types";

// export const generateDaysByDaysInMonth = (daysInMonth: number) => {
//   return Array.from({ length: daysInMonth }).map((_, index) => ({
//     number: index + 1,
//   }));
// };

// export const generateDaysByDate = (date: dayjs.Dayjs) => {
//   return generateDaysByDaysInMonth(getDaysInMonthByDate(date));
// };

export const generateDaysForMonth = (month: number, year: number): Day[] => {
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
        isInCurrentMonth: true,
      };
    }
  );
};
