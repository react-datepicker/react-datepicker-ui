import { useMemo, useState } from "react";

import {
  CalendarOptions,
  defaultCalendarOptions,
} from "./types/calendarOptions.types";
import { getDefaultDisPlayedMonths } from "./utils/default.utils";
import {
  getNextMonthForDisplayedMonths,
  getNextYearForDisplayedMonths,
  getPreviousMonthForDisplayedMonths,
  getPreviousYearForDisplayedMonths,
} from "./utils/month.utils";
import { DateRange } from "./types/range.type";
import { getDateByDayMonthAndYear } from "./utils/dates.utils";
import { Day, Month } from "./types/calendar.types";

const useCalendar = (calendarOptions?: CalendarOptions) => {
  const [rangeValue, setRangeValue] = useState<DateRange | undefined>();
  const [value, setValue] = useState<Date | undefined>();

  const options = useMemo<Required<CalendarOptions>>(
    () => ({ ...defaultCalendarOptions, ...calendarOptions }),
    [calendarOptions, defaultCalendarOptions]
  );

  const { numberOfDisplayedMonths } = options;

  const [displayedMonths, setDisplayedMonths] = useState<Array<Month>>(
    getDefaultDisPlayedMonths(numberOfDisplayedMonths)
  );

  const nextMonth = () => {
    const newMonths = getNextMonthForDisplayedMonths(displayedMonths, 1);
    setDisplayedMonths(newMonths);
  };

  const previousMonth = () => {
    const newMonths = getPreviousMonthForDisplayedMonths(displayedMonths, 1);
    setDisplayedMonths(newMonths);
  };

  const nextYear = () => {
    const newMonths = getNextYearForDisplayedMonths(displayedMonths);
    setDisplayedMonths(newMonths);
  };

  const previousYear = () => {
    const newMonths = getPreviousYearForDisplayedMonths(displayedMonths);
    setDisplayedMonths(newMonths);
  };

  const onClick = (day: Day, month: Month, year: number) => {
    setValue(getDateByDayMonthAndYear(day, month, year).toDate());
  };

  const register = (
    month: Month,
    day: Day
  ): { onClick: () => void; key: string } => {
    return {
      onClick: () => onClick(day, month, month.year),
      key: `${month.number}-${day.number}-${month.year}`,
    };
  };

  return {
    value,
    displayedMonths,
    previousMonth,
    nextMonth,
    previousYear,
    nextYear,
    onClick,
    register,
  };
};

export default useCalendar;
