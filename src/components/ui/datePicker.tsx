import * as React from "react";

import { CalendarIcon } from "lucide-react";

import { cn } from "../../utils/css-utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dayjs from "dayjs";

import MyFirstDateRangeCalendar from "@/components/ui/calendar/MyFirstDateRangeCalendar";
import { DateRange } from "@/types/range.type";
import Calendar from "./calendar/calendar";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<DateRange | null | undefined>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date?.startDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          <span className="truncate text-ellipsis overflow-hidden">
            {date?.startDate
              ? `${dayjs(date.startDate).format("MMM D, YYYY")} ${
                  date.endDate
                    ? `- ${dayjs(date.endDate).format("MMM D, YYYY")}`
                    : ""
                }`
              : "Pick a date"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar isRangePicker={true} value={date} onChange={setDate} />
      </PopoverContent>
    </Popover>
  );
}
