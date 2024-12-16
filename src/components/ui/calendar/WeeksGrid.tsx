import { FC } from "react";
import WeekDaysRow from "./WeekdaysRow";
import { WeekdayNames } from "dayjs";
import { Month, Register } from "@/types/calendar.types";
import DayComp from "./Day";

const WeeksGrid: FC<{
  weekDays: WeekdayNames;
  month: Month;
  register: Register;
  isSelected: (date: Date) => boolean | undefined | null;
  shouldHighlightDay: (date: Date) => boolean;
}> = ({ weekDays, month, register, isSelected, shouldHighlightDay }) => {
  return (
    <div className="grid grid-cols-7 w-fit m-auto">
      <WeekDaysRow weekDays={weekDays} />
      {month.weeks.map((week) => {
        return week.days.map((day) => {
          return (
            <DayComp
              key={day.number}
              register={register}
              month={month}
              day={day}
              isSelected={isSelected}
              shouldHighlightDay={shouldHighlightDay}
            />
          );
        });
      })}
    </div>
  );
};

export default WeeksGrid;
