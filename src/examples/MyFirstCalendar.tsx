import useCalendar from "../useCalendar";
import "./style.css";

const MyFirstCalendar = () => {
  const {
    displayedMonths,
    register,
    nextMonth,
    nextYear,
    previousMonth,
    previousYear,
  } = useCalendar();

  return (
    <div>
      <h1>My first calendar</h1>
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
              {month.weeks.map((week) => {
                return week.days.map((day) => {
                  return (
                    <div
                      style={{ opacity: day.isInCurrentMonth ? "1" : "0.5" }}
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
