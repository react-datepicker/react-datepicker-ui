import { Dispatch, SetStateAction } from "react";

import { DateRange, CalendarOptions } from "@react-datepicker/types";
import { useCalendar } from "@react-datepicker/hooks";

import { Separator } from "../separator";
import MonthsRow from "./MonthsRow";
import Toolbar from "./Toolbar";

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

export const Calendar = <IsRange extends boolean>({
  isRangePicker,
  onChange,
  value,
}: CalendarProps<IsRange>) => {
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
    { numberOfDisplayedMonths: isRangePicker ? 2 : 1, isRangePicker },
    value,
    (date) => onChange(date)
  );

  return (
    <div className="p-2 flex flex-col gap-2">
      <Toolbar setYear={setYear} displayedMonths={displayedMonths} />
      <Separator />
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
