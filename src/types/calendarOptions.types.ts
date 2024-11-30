import { MonthName } from "./month.types";

export type CalendarOptions = {
  startMonth?: MonthName;
  startYear?: number;
  monthsNum?: number;
  numberOfDisplayedMonths?: number;
};

export const defaultCalendarOptions: Required<CalendarOptions> = {
  startMonth: MonthName.January,
  startYear: 2024,
  monthsNum: 1,
  numberOfDisplayedMonths: 1,
};
