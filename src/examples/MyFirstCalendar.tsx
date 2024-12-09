import useCalendar from "../useCalendar";
import "./style.css";

const MyFirstCalendar = () => {
  const {
    value,
    displayedMonths,
    register,
    nextMonth,
    nextYear,
    previousMonth,
    previousYear,
  } = useCalendar({
    maxDate: new Date("2024-12-21"),
  });

  return (
    <div>
      <h1>My first calendar</h1>
      <h5>{value?.toDateString()}</h5>
      {displayedMonths.map((month) => {
        return (
          <div key={month.name}>
            <div className="flex justify-between items-center gap-2">
              <button onClick={() => previousYear()}>{"<<<"}</button>
              <button onClick={() => previousMonth()}>{"<<"}</button>
              <h2>
                {month.name} {month.year}
              </h2>
              <button onClick={() => nextMonth()}>{">>"}</button>
              <button onClick={() => nextYear()}>{">>>"}</button>
            </div>

            <div className="grid grid-cols-7 gap-1 w-fit m-auto">
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

export default MyFirstCalendar;
