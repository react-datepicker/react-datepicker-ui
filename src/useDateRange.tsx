import { useState, useCallback, useMemo } from "react";
import { Dayjs } from "dayjs";
import { isBeforeDay } from "./utils/dates.utils";
import { DateRange } from "./types/range.type";

export const useDateRangePicker = () => {
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

  return {
    range,
    setDate,
    isRangeComplete,
  };
};
