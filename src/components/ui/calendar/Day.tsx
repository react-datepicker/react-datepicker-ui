import { Month, Register, Day } from "@/types/calendar.types";
import { FC } from "react";

const DayComp: FC<{
  register: Register;
  month: Month;
  day: Day;
  isSelected: (date: Date) => boolean | undefined | null;
  shouldHighlightDay: (date: Date) => boolean;
}> = ({ register, month, day, shouldHighlightDay, isSelected }) => {
  return (
    <div
      className={`text-sm cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out aspect-square p-1 rounded text-center ${
        day.isInCurrentMonth ? "opacity-100" : "opacity-50"
      }  ${
        day.isToday
          ? "border-solid border-2 border-gray-300"
          : "border-solid border-2 border-transparent"
      } ${day.disabled ? "opacity-25" : ""} ${
        shouldHighlightDay(day.date)
          ? "bg-blue-50 rounded-none transition-all duration-150 ease-in-out hover:bg-blue-100"
          : ""
      } ${
        isSelected(day.date)
          ? "bg-none !bg-blue-700 text-white !rounded transition-all duration-150 ease-in-out"
          : ""
      }`}
      {...register(month, day)}
    >
      {day.number.toString()}
    </div>
  );
};

export default DayComp;
