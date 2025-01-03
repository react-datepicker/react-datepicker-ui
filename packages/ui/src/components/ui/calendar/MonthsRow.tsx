import { FC } from "react";
import { WeekdayNames } from "dayjs";

import { Month, Register } from "@react-datepicker/types";

import MonthHeader from "./MonthHeader";
import WeeksGrid from "./WeeksGrid";

const MonthsRow: FC<{
  displayedMonths: Month[];
  nextMonth: () => void;
  previousMonth: () => void;
  weekDays: WeekdayNames;
  register: Register;
  isSelected: (date: Date) => boolean | undefined | null;
  shouldHighlightDay: (date: Date) => boolean;
}> = ({
  displayedMonths,
  previousMonth,
  nextMonth,
  weekDays,
  register,
  isSelected,
  shouldHighlightDay,
}) => {
  return (
    <div className="flex flex-row justify-center items-start gap-3">
      {displayedMonths.map((month, monthIndex) => {
        return (
          <div className="flex flex-col gap-2" key={month.name}>
            <MonthHeader
              {...{
                month,
                monthIndex,
                displayedMonths,
                nextMonth,
                previousMonth,
              }}
            />
            <WeeksGrid
              {...{
                weekDays,
                month,
                register,
                isSelected,
                shouldHighlightDay,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MonthsRow;
