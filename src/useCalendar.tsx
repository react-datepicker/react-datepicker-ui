import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CalendarOptions,
  DateValue,
  defaultCalendarOptions,
} from "./types/calendarOptions.types";
import { getDefaultDisPlayedMonths } from "./utils/default.utils";
import {
  getNewMonthsForYear,
  getNextMonthForDisplayedMonths,
  getNextYearForDisplayedMonths,
  getPreviousMonthForDisplayedMonths,
  getPreviousYearForDisplayedMonths,
} from "./utils/month.utils";

import { getWeekdays, isDate, isSame, newDate } from "./utils/dates.utils";
import { Day, Month, Register } from "./types/calendar.types";
import { useDateRangePicker } from "./useDateRange";
import { DateRange } from "./types/range.type";
import { isDateRange } from "./utils/date-range.utils";

const useCalendar = <IsRange extends boolean>(
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
  }, [controlledValue, value]);

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
    [calendarOptions, defaultCalendarOptions]
  );

  useEffect(() => {}), [options.numberOfDisplayedMonths];

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

  const onClick = (day: Day, month: Month, year: number) => {
    if (day.disabled) return;
    if (calendarOptions?.isRangePicker) {
      setDate(newDate(day.date));
    } else if (!calendarOptions?.isRangePicker) {
      setSelectedSingleDate(newDate(day.date).toDate());
    }
  };

  const setYear = (year: number) => {
    const newMonths = getNewMonthsForYear(displayedMonths, year, options);
    setDisplayedMonths(newMonths);
  };

  const register: Register = (
    month: Month,
    day: Day
  ): { onClick: () => void; key: string } => {
    return {
      onClick: () => onClick(day, month, month.year),
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

export default useCalendar;
