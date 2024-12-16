import { WeekdayNames } from "dayjs";
import { FC } from "react";

const WeekDaysRow: FC<{ weekDays: WeekdayNames }> = ({ weekDays }) => {
  return weekDays.map((day) => {
    return (
      <div
        key={day}
        className="text-xs aspect-square text-center p-1 border-2 border-transparent"
      >
        {day.substring(0, 2)}
      </div>
    );
  });
};

export default WeekDaysRow;
