import { MonthName } from "./month.types";

export type CalendarOptions = {
  startMonth?: MonthName;
  startYear?: number;
  numberOfDisplayedMonths?: number;
  isRangePicker?: boolean;
  minDate?: Date;
  maxDate?: Date;
  allowFuture?: boolean;
  allowPast?: boolean;
};

export const defaultCalendarOptions: CalendarOptions = {
  startMonth: MonthName.January,
  startYear: 2024,
  numberOfDisplayedMonths: 1,
  isRangePicker: false,
  minDate: undefined,
  maxDate: undefined,
  allowFuture: true,
  allowPast: true,
};
