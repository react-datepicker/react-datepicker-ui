import useCalendar from "../useCalendar";
import "./style.css";

const MyFirstDateRangeCalendar = () => {
  const {
    rangeValue,
    displayedMonths,
    register,
    nextMonth,
    nextYear,
    previousMonth,
    previousYear,
    weekDays,
  } = useCalendar({
    isRangePicker: true,
    maxDate: new Date("2024-12-21"),
  });

  return (
    <div>
      <h1>My first date range calendar</h1>
      <h5>{JSON.stringify(rangeValue)}</h5>
      {displayedMonths.map((month) => {
        return (
          <div key={month.name}>
            <div className="monthHeader">
              <button onClick={() => previousYear()}>{"<<<"}</button>
              <button onClick={() => previousMonth()}>{"<<"}</button>
              <h2>
                {month.name} {month.year}
              </h2>
              <button onClick={() => nextMonth()}>{">>"}</button>
              <button onClick={() => nextYear()}>{">>>"}</button>
            </div>
            <div className="daysGrid">
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
                      } ${day.isWeekend ? "bg-green-100" : ""} ${
                        day.isToday ? "bg-blue-100" : ""
                      } ${day.disabled ? "opacity-25" : ""}`}
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
  );
};

export default MyFirstDateRangeCalendar;
