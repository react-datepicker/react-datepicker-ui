import { useState, useCallback, useMemo, SetStateAction } from "react";
import { Dayjs } from "dayjs";

import { isBeforeDay, isSame, newDate } from "@/utils/dates.utils";
import { DateRange } from "@/types/range.type";
import { Day } from "@/types/calendar.types";
import { isInRange } from "@/utils/date-range.utils";
import { CalendarOptions } from "@/types/calendarOptions.types";

export const useDateRangePicker = <IsRange extends boolean>(
  options: CalendarOptions<IsRange>,
  controlledValue?: DateRange | null,
  onChange?: (date: SetStateAction<DateRange>) => void
) => {
  const isControlled = useMemo(() => onChange !== undefined, [onChange]);

  const [hoveredDate, setHoveredDate] = useState<Dayjs | null>(null);
  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const selectedRangeValue = useMemo(() => {
    if (isControlled && controlledValue) {
      return controlledValue;
    } else {
      return range;
    }
  }, [controlledValue, range, isControlled]);

  const setSelectedRangeValue = useMemo(() => {
    if (isControlled) return onChange;
    return setRange;
  }, [isControlled, onChange, setRange]);

  const isRangeComplete = useMemo(() => {
    return Boolean(selectedRangeValue.startDate && selectedRangeValue.endDate);
  }, [selectedRangeValue.startDate, selectedRangeValue.endDate]);

  const setDate = useCallback(
    (selectedDate: Dayjs) => {
      setSelectedRangeValue?.((prevRange) => {
        const { startDate, endDate } = prevRange || {
          startDate: undefined,
          endDate: undefined,
        };

        if (!startDate) {
          return { startDate: selectedDate, endDate: null };
        } else if (isRangeComplete) {
          return { startDate: null, endDate: null };
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
    [isRangeComplete, setSelectedRangeValue]
  );

  const shouldHighlightDay = useCallback(
    (date: Date) => {
      if (
        !selectedRangeValue.startDate ||
        isBeforeDay(newDate(date), selectedRangeValue.startDate) ||
        isSame(newDate(date), selectedRangeValue.startDate)
      ) {
        return false;
      }

      if (options.shouldHighlightRangeInHover && hoveredDate) {
        return isInRange(
          newDate(date),
          selectedRangeValue.startDate,
          hoveredDate
        );
      }

      if (isRangeComplete) {
        return isInRange(
          newDate(date),
          selectedRangeValue.startDate,
          selectedRangeValue.endDate
        );
      }

      return false;
    },
    [
      hoveredDate,
      isRangeComplete,
      selectedRangeValue.startDate,
      selectedRangeValue.endDate,
      options.shouldHighlightRangeInHover,
    ]
  );

  const isInCompletedRange = useCallback(
    // TODO remove if not needed anymore becuase of shouldHighlightDay
    (date: Date) => {
      return isInRange(
        newDate(date),
        selectedRangeValue.startDate,
        selectedRangeValue.endDate
      );
    },
    [selectedRangeValue.startDate, selectedRangeValue.endDate]
  );

  const register = (
    day: Day
  ): { onMouseEnter: () => void; onMouseLeave: () => void } => {
    return {
      onMouseEnter: () => {
        if (isRangeComplete) return;
        setHoveredDate(newDate(day.date));
      },
      onMouseLeave: () => {
        setHoveredDate(null);
      },
    };
  };

  return {
    range: selectedRangeValue,
    setDate,
    isRangeComplete,
    register,
    shouldHighlightDay,
    isInCompletedRange,
  };
};
