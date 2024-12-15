import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import useCalendar from "../useCalendar";
import {
  Dispatch,
  FC,
  Ref,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { DateRange } from "@/types/range.type";

const MyFirstDateRangeCalendar: FC<{
  mode: "single" | "range";
  value?: DateRange | null;
  onChange: Dispatch<SetStateAction<DateRange | null | undefined>>;
}> = ({ mode, onChange, value }) => {
  const {
    rangeValue,
    displayedMonths,
    register,
    nextMonth,
    nextYear,
    previousMonth,
    previousYear,
    weekDays,
    isInCompletedRange,
    shouldHighlightDay,
    isSelected,
  } = useCalendar<true>(
    { numberOfDisplayedMonths: 2, isRangePicker: true },
    value,
    onChange
  );

  return (
    <div>
      <div className="flex flex-row justify-evenly items-center mb-4">
        <button
          onClick={() => previousYear()}
          className="hover:bg-gray-100 !border-none p-1"
        >
          <ChevronDoubleLeftIcon className="size-6" />
        </button>
        <button
          onClick={() => previousMonth()}
          className="hover:bg-gray-100 !border-none p-1"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <div className="w-96 h-12">
          <p className="text-sm">
            <strong>From: </strong>
            {rangeValue.startDate?.format("MMMM D, YYYY") || ""}
          </p>
          <p className="text-sm">
            <strong>To: </strong>
            {rangeValue.endDate?.format("MMMM D, YYYY") || ""}
          </p>
        </div>
        <button
          onClick={() => nextMonth()}
          className="hover:bg-gray-100 !border-none p-1"
        >
          <ChevronRightIcon className="size-6" />
        </button>
        <button
          onClick={() => nextYear()}
          className="hover:bg-gray-100 !border-none p-1"
        >
          <ChevronDoubleRightIcon className="size-6" />
        </button>
      </div>
      <div className="flex flex-row justify-center items-start gap-3">
        {displayedMonths.map((month) => {
          return (
            <div className="flex flex-col gap-2" key={month.name}>
              <div>
                <h2>
                  {month.name} {month.year}
                </h2>
              </div>

              <div className="grid grid-cols-7 w-fit m-auto">
                {weekDays.map((day) => {
                  return (
                    <div key={day} className="text-xs">
                      {day.substring(0, 2)}
                    </div>
                  );
                })}
                {month.weeks.map((week) => {
                  return week.days.map((day) => {
                    return (
                      <div
                        className={`cursor-pointer hover:bg-gray-100 aspect-square p-1 rounded ${
                          day.isInCurrentMonth ? "opacity-100" : "opacity-50"
                        }  ${
                          day.isToday
                            ? "border-solid border-2 border-gray-300"
                            : "border-solid border-2 border-transparent"
                        } ${day.disabled ? "opacity-25" : ""} ${
                          shouldHighlightDay(day.date)
                            ? "bg-blue-50 rounded-none"
                            : ""
                        } ${
                          isSelected(day.date)
                            ? "bg-none !bg-black text-white !rounded"
                            : ""
                        }`}
                        {...register(month, day)}
                      >
                        {day.number}
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyFirstDateRangeCalendar;
