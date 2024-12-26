import { LocaleKey } from "@react-datepicker/hooks";

import { MonthName } from "./month.types";
import { DateRange } from "./range.types";

export type DateValue<IsRange extends boolean> = IsRange extends true
  ? DateRange | undefined | null
  : Date | null | undefined;

export type CalendarOptions<IsRange extends boolean> = {
  startMonth?: MonthName;
  startYear?: number;
  numberOfDisplayedMonths?: number;
  isRangePicker?: IsRange;
  minDate?: Date;
  maxDate?: Date;
  allowFuture?: boolean;
  allowPast?: boolean;
  shouldHighlightRangeInHover?: boolean;
  locale?: LocaleKey;
};

export const defaultCalendarOptions: CalendarOptions<false> = {
  startMonth: MonthName.January,
  startYear: 2024,
  numberOfDisplayedMonths: 1,
  isRangePicker: false,
  minDate: undefined,
  maxDate: undefined,
  allowFuture: true,
  allowPast: true,
  shouldHighlightRangeInHover: true,
  locale: "en",
};
