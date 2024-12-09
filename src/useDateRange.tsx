import { useState, useCallback, useMemo } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  getDateByDayMonthAndYear,
  isBeforeDay,
  isSame,
  newDate,
} from "./utils/dates.utils";
import { DateRange } from "./types/range.type";
import { Day, Month } from "./types/calendar.types";
import { isInRange } from "./utils/date-range.utils";

export const useDateRangePicker = () => {
  const [hoveredDate, setHoveredDate] = useState<Dayjs | null>(null);
  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const isRangeComplete = useMemo(() => {
    return Boolean(range.startDate && range.endDate);
  }, [range.startDate, range.endDate]);

  const setDate = useCallback(
    (selectedDate: Dayjs) => {
      setRange((prevRange) => {
        const { startDate, endDate } = prevRange;

        if (!startDate || isRangeComplete) {
          return { startDate: selectedDate, endDate: null };
        } else if (startDate && !endDate) {
          if (isBeforeDay(selectedDate, startDate)) {
            return { startDate: selectedDate, endDate: null };
          } else {
            return { startDate, endDate: selectedDate };
          }
        }

        return prevRange;
      });
    },
    [isRangeComplete]
  );

  const isInHoverRange = useCallback(
    (date: Date) => {
      if (
        !hoveredDate ||
        !range.startDate ||
        isRangeComplete ||
        isBeforeDay(newDate(date), range.startDate) ||
        isSame(newDate(date), range.startDate)
      ) {
        return false;
      }

      return isInRange(newDate(date), range.startDate, hoveredDate);
    },
    [hoveredDate, isRangeComplete, range.startDate, range.endDate]
  );

  const isInCompletedRange = useCallback(
    (date: Date) => {
      return isInRange(newDate(date), range.startDate, range.endDate);
    },
    [range.startDate, range.endDate]
  );

  const register = (month: Month, day: Day) => {
    return {
      onMouseEnter: () => {
        setHoveredDate(getDateByDayMonthAndYear(day, month, month.year));
      },
      onMouseLeave: () => {
        setHoveredDate(null);
      },
    };
  };

  return {
    range,
    setDate,
    isRangeComplete,
    register,
    isInHoverRange,
    isInCompletedRange,
  };
};
