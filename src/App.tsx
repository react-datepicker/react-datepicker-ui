import "./App.css";
import useCalendar from "./useCalendar";

function App() {
  const {
    value,
    displayedMonths,
    nextMonth,
    previousMonth,
    nextYear,
    previousYear,
    register,
  } = useCalendar({
    numberOfDisplayedMonths: 2,
  });

  return (
    <div>
      <h1>{value?.toString()}</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 32 }}>
        <button onClick={(e) => previousYear()}>Previous Year</button>
        <button onClick={(e) => previousMonth()}>Previous Month</button>
        {displayedMonths.map((month) => {
          return (
            <div>
              <div>{month.year}</div>
              <div>{month.name}</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                }}
              >
                {month.days.map((day) => (
                  <div {...register(month, day)}>{day.number}</div>
                ))}
              </div>
            </div>
          );
        })}
        <button onClick={(e) => nextMonth()}>Next Month</button>
        <button onClick={(e) => nextYear()}>Next Year</button>
      </div>
    </div>
  );
}

export default App;
