import { SetStateAction, useCallback, useMemo, useState } from "react";

import { getDefaultDisPlayedMonths } from "./utils/default.utils";
import {
  generateMonthsByYearAndMonths,
  getNextMonthForDisplayedMonths,
  getNextYearForDisplayedMonths,
  getPreviousMonthForDisplayedMonths,
  getPreviousYearForDisplayedMonths,
} from "./utils/month.utils";
import { isDateRange } from "./utils/date-range.utils";
import { getWeekdays, isDate, isSame, newDate } from "./utils/dates.utils";

import {
  Day,
  Month,
  Register,
  DateRange,
  CalendarOptions,
  DateValue,
  defaultCalendarOptions,
} from "@react-datepicker/types";

import { useDateRangePicker } from "./useDateRange";

export const useCalendar = <IsRange extends boolean>(
  calendarOptions?: CalendarOptions<IsRange>,
  controlledValue?: DateValue<IsRange>,
  onChange?: (date: SetStateAction<DateValue<IsRange>>) => void
) => {
  const isControlled = useMemo(() => onChange !== undefined, [onChange]);

  const [value, setValue] = useState<Date>();

  const selectedSingleDate: Date | undefined | null = useMemo(() => {
    if (isControlled && isDate(controlledValue)) {
      return controlledValue;
    } else {
      return value;
    }
  }, [controlledValue, value, isControlled]);

  const setSelectedSingleDate = useCallback(
    (date: Date) => {
      if (!isControlled) {
        setValue(date);
      }
      if (onChange) {
        onChange(date as DateValue<IsRange>);
      }
    },
    [isControlled, onChange]
  );

  const options = useMemo<CalendarOptions<IsRange>>(
    () => ({
      ...defaultCalendarOptions,
      ...calendarOptions,
      isRangePicker: calendarOptions?.isRangePicker,
    }),
    [calendarOptions]
  );

  const weekDays = useMemo(() => getWeekdays(), []);

  const [displayedMonths, setDisplayedMonths] = useState<Array<Month>>(
    getDefaultDisPlayedMonths(options)
  );

  const {
    range,
    setDate,
    register: registerRange,
    isInCompletedRange,
    shouldHighlightDay,
  } = useDateRangePicker(
    options,
    isControlled && isDateRange(controlledValue) ? controlledValue : undefined,
    isControlled
      ? (onChange as (date: SetStateAction<DateRange>) => void)
      : undefined
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

  const onClick = (day: Day) => {
    if (day.disabled) return;
    if (calendarOptions?.isRangePicker) {
      setDate(newDate(day.date));
    } else if (!calendarOptions?.isRangePicker) {
      setSelectedSingleDate(newDate(day.date).toDate());
    }
  };

  const setYear = useCallback(
    (year: number) => {
      const newMonths = generateMonthsByYearAndMonths(
        year,
        displayedMonths,
        options
      );
      setDisplayedMonths(newMonths);
    },
    [displayedMonths, options]
  );

  const register: Register = (
    month: Month,
    day: Day
  ): { onClick: () => void; key: string } => {
    return {
      onClick: () => onClick(day),
      key: `${month.number}-${day.number}-${month.year}`,
      ...(calendarOptions?.isRangePicker ? registerRange(day) : {}),
    };
  };

  const isSelected = useCallback(
    (date: Date) => {
      if (options.isRangePicker) {
        return (
          (range.startDate && isSame(newDate(date), range.startDate)) ||
          (range.endDate && isSame(newDate(date), range.endDate))
        );
      } else if (isDate(selectedSingleDate)) {
        return isSame(newDate(date), newDate(selectedSingleDate));
      }
    },
    [options, range.startDate, range.endDate, selectedSingleDate]
  );

  return {
    value,
    selectedSingleDate,
    rangeValue: range,
    displayedMonths,
    previousMonth,
    nextMonth,
    previousYear,
    nextYear,
    onClick,
    register,
    weekDays,
    isInCompletedRange,
    shouldHighlightDay,
    setYear,
    isSelected,
  };
};
