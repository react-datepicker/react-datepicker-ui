import useCalendar from "../useCalendar";

const Test = () => {
  const {
    register,
    value,
    displayedMonths,
    previousMonth,
    nextMonth,
    nextYear,
    previousYear,
  } = useCalendar();

  return (
    <div>
      <h1>{value?.toString()}</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 32 }}>
        <button onClick={(e) => previousYear()}>Previous Year</button>
        <button onClick={(e) => previousMonth()}>Previous Month</button>
        {displayedMonths.map((month) => {
          return (
            <div key={month.name}>
              <div>{month.year}</div>
              <div>{month.name}</div>
              <div>
                {month.weeks.map((week) => {
                  return (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        gap: 8,
                      }}
                      key={JSON.stringify(week.days)}
                    >
                      {week.days.map((day) => {
                        return (
                          <div
                            style={{
                              color: day.isInCurrentMonth ? "black" : "grey",
                              opacity: day.isInCurrentMonth ? 1 : 0.5,
                              borderRadius: "50%",
                              border: day.isToday ? "1px dotted black" : "none",
                              padding: 8,
                              cursor: "pointer",
                            }}
                            {...register(month, day)}
                          >
                            {day.number}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                {/* {month.days.map((day) => (
                    <div {...register(month, day)}>{day.number}</div>
                  ))} */}
              </div>
            </div>
          );
        })}
        <button onClick={(e) => nextMonth()}>Next Month</button>
        <button onClick={(e) => nextYear()}>Next Year</button>
      </div>
    </div>
  );
};

export default Test;
