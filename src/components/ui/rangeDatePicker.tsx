import * as React from "react";
import dayjs from "dayjs";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { DateRange } from "@/types/range.types";
import { CalendarOptions } from "@/types/calendarOptions.types";
import { DATE_DISPLAY_SHORT_FORMAT } from "@/utils/dates.utils";

import Calendar from "./calendar/Calendar";
import DateInput from "./dateInput";

export const RangeDatePicker: React.FC<
  CalendarOptions<true> & {
    value: DateRange | null | undefined;
    onChange: React.Dispatch<
      React.SetStateAction<DateRange | null | undefined>
    >;
  }
> = ({ value, onChange, ...calendarOptions }) => {
  const formattedDateLabel = React.useMemo(() => {
    return value?.startDate
      ? `${dayjs(value.startDate).format(DATE_DISPLAY_SHORT_FORMAT)} ${
          value.endDate
            ? `- ${dayjs(value.endDate).format(DATE_DISPLAY_SHORT_FORMAT)}`
            : ""
        }`
      : "Pick a date range";
  }, [value]);

  return (
    <Popover>
      <DateInput isEmpty={!value?.startDate} label={formattedDateLabel} />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          {...calendarOptions}
          isRangePicker
          value={value}
          onChange={onChange}
        />
      </PopoverContent>
    </Popover>
  );
};
