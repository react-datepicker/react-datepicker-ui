import * as React from "react";
import dayjs from "dayjs";

import { CalendarOptions } from "@react-datepicker/types";

import { Popover, PopoverContent } from "./popover";
import { Calendar } from "./calendar/Calendar";
import DateInput from "./dateInput";

export const DatePicker: React.FC<
  CalendarOptions<false> & {
    value: Date | null | undefined;
    onChange: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  }
> = ({ value, onChange, ...calendarOptions }) => {
  const formattedDateLabel = React.useMemo(() => {
    return value ? dayjs(value).format("MMM D, YYYY") : "Pick a date";
  }, [value]);

  return (
    <Popover>
      <DateInput isEmpty={!value} label={formattedDateLabel} />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar {...calendarOptions} value={value} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};
