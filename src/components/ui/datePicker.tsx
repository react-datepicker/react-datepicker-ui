import * as React from "react";
import dayjs from "dayjs";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { CalendarOptions } from "@/types/calendarOptions.types";

import Calendar from "./calendar/Calendar";
import DateInput from "./dateInput";

const DatePicker: React.FC<CalendarOptions<false>> = (calendarOptions) => {
  const [date, setDate] = React.useState<Date | null | undefined>();

  const formattedDateLabel = React.useMemo(() => {
    return date ? dayjs(date).format("MMM D, YYYY") : "Pick a date";
  }, [date]);

  return (
    <Popover>
      <DateInput isEmpty={!date} label={formattedDateLabel} />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar {...calendarOptions} value={date} onChange={setDate} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
