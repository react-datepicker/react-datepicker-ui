import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Month } from "@/types/calendar.types";

const MonthHeader: FC<{
  previousMonth: () => void;
  nextMonth: () => void;
  monthIndex: number;
  displayedMonths: Month[];
  month: Month;
}> = ({ previousMonth, nextMonth, monthIndex, displayedMonths, month }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      {monthIndex === 0 ? (
        <Button
          className="w-8 h-8"
          variant="outline"
          onClick={() => previousMonth()}
        >
          <ChevronLeftIcon className="size-1" />
        </Button>
      ) : (
        <div className="w-8 h-8"></div>
      )}
      <div className="font-normal text-muted-foreground text-sm text-center">
        {month.name} {month.year}
      </div>
      {monthIndex === displayedMonths.length - 1 ? (
        <Button
          className="w-8 h-8"
          variant="outline"
          onClick={() => nextMonth()}
        >
          <ChevronRightIcon className="size-1" />
        </Button>
      ) : (
        <div className="w-8 h-8"></div>
      )}
    </div>
  );
};

export default MonthHeader;
