import * as React from "react";

import { Popover, PopoverContent } from "@/components/ui/popover";
import dayjs from "dayjs";

import Calendar from "./calendar/Calendar";
import { CalendarOptions } from "@/types/calendarOptions.types";
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
