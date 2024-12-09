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
import { getDateByDayMonthAndYear, getWeekdays } from "./utils/dates.utils";
import { Day, Month } from "./types/calendar.types";
import { useDateRangePicker } from "./useDateRange";

const useCalendar = (calendarOptions?: CalendarOptions) => {
  const { range, isRangeComplete, setDate } = useDateRangePicker();
  const [value, setValue] = useState<Date | undefined>();

  const weekDays = useMemo(() => getWeekdays(), []);

  const options = useMemo<CalendarOptions>(
    () => ({ ...defaultCalendarOptions, ...calendarOptions }),
    [calendarOptions, defaultCalendarOptions]
  );

  const { numberOfDisplayedMonths } = options || defaultCalendarOptions;

  const [displayedMonths, setDisplayedMonths] = useState<Array<Month>>(
    getDefaultDisPlayedMonths(options)
  );

  const nextMonth = () => {
    const newMonths = getNextMonthForDisplayedMonths(
      displayedMonths,
      1,
      options
    );
    setDisplayedMonths(newMonths);
  };

  const previousMonth = () => {
    const newMonths = getPreviousMonthForDisplayedMonths(
      displayedMonths,
      1,
      options
    );
    setDisplayedMonths(newMonths);
  };

  const nextYear = () => {
    const newMonths = getNextYearForDisplayedMonths(displayedMonths, options);
    setDisplayedMonths(newMonths);
  };

  const previousYear = () => {
    const newMonths = getPreviousYearForDisplayedMonths(
      displayedMonths,
      options
    );
    setDisplayedMonths(newMonths);
  };

  const onClick = (day: Day, month: Month, year: number) => {
    if (day.disabled) return;
    if (calendarOptions?.isRangePicker) {
      setDate(getDateByDayMonthAndYear(day, month, year));
    } else {
      setValue(getDateByDayMonthAndYear(day, month, year).toDate());
    }
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
    rangeValue: range,
    displayedMonths,
    previousMonth,
    nextMonth,
    previousYear,
    nextYear,
    onClick,
    register,
    weekDays,
  };
};

export default useCalendar;
