import useCalendar from "../../../useCalendar";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { DateRange } from "@/types/range.type";

import Toolbar from "./Toolbar";

import MonthsRow from "./MonthsRow";
import { CalendarOptions } from "@/types/calendarOptions.types";

export type CalendarProps<IsRange extends boolean> =
  CalendarOptions<IsRange> & {
    value?: IsRange extends true ? DateRange | null : Date | null;
    onChange: Dispatch<
      SetStateAction<
        IsRange extends true
          ? DateRange | null | undefined
          : Date | null | undefined
      >
    >;
  };

const Calendar = <IsRange extends boolean>({
  isRangePicker,
  onChange,
  value,
}: CalendarProps<IsRange>) => {
  const [numberOfDisplayedMonths, setNumberOfDisplayedMonths] = useState(
    isRangePicker ? 2 : 0
  );

  const {
    displayedMonths,
    register,
    nextMonth,
    previousMonth,
    weekDays,
    shouldHighlightDay,
    isSelected,
    setYear,
  } = useCalendar<IsRange>(
    { numberOfDisplayedMonths, isRangePicker },
    value,
    (date) => onChange(date)
  );

  return (
    <div className="p-2">
      <Toolbar setYear={setYear} displayedMonths={displayedMonths} />
      <MonthsRow
        {...{
          displayedMonths,
          previousMonth,
          nextMonth,
          weekDays,
          register,
          isSelected,
          shouldHighlightDay,
        }}
      />
    </div>
  );
};

export default Calendar;
