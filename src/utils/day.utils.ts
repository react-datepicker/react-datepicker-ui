import dayjs from "dayjs";
import { getDateByYearAndMonth, getDaysInMonthByDate } from "./dates.utils";

// export const generateDaysByDaysInMonth = (daysInMonth: number) => {
//   return Array.from({ length: daysInMonth }).map((_, index) => ({
//     number: index + 1,
//   }));
// };

// export const generateDaysByDate = (date: dayjs.Dayjs) => {
//   return generateDaysByDaysInMonth(getDaysInMonthByDate(date));
// };

export const generateDaysForMonth = (month: number, year: number) => {
  const dayjsDate = getDateByYearAndMonth(year, month);
  return Array.from({ length: getDaysInMonthByDate(dayjsDate) }).map((_, index) => ({
    number: index + 1,
    date: 
  }));
};
