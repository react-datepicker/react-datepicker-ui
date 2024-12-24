import * as React from "react";
import dayjs from "dayjs";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { DateRange } from "@/types/range.types";
import { CalendarOptions } from "@/types/calendarOptions.types";
import { DATE_DISPLAY_SHORT_FORMAT } from "@/utils/dates.utils";

import Calendar from "./calendar/Calendar";
import DateInput from "./dateInput";

const RangeDatePicker: React.FC<CalendarOptions<true>> = (calendarOptions) => {
  const [date, setDate] = React.useState<DateRange | null | undefined>({
    startDate: undefined,
    endDate: undefined,
  });

  const formattedDateLabel = React.useMemo(() => {
    return date?.startDate
      ? `${dayjs(date.startDate).format(DATE_DISPLAY_SHORT_FORMAT)} ${
          date.endDate
            ? `- ${dayjs(date.endDate).format(DATE_DISPLAY_SHORT_FORMAT)}`
            : ""
        }`
      : "Pick a date range";
  }, [date]);

  return (
    <Popover>
      <DateInput isEmpty={!date?.startDate} label={formattedDateLabel} />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          {...calendarOptions}
          isRangePicker
          value={date}
          onChange={setDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default RangeDatePicker;
