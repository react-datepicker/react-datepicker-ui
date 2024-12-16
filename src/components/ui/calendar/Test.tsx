import { Day } from "../../../types/calendar.types";
import useCalendar from "../../../useCalendar";

const CalendarDay = ({ day }: { day: Day }) => {
  return (
    <div
      className={`day ${day.isToday ? "today" : ""} 
        ${day.isWeekend ? "weekend" : ""}
        ${day.isInCurrentMonth ? "current-month" : "not-current-month"}
        ${day.disabled ? "disabled" : ""}`}
    >
      {day.date.getDate()}
    </div>
  );
};

const Calendar = () => {
  const { displayedMonths } = useCalendar({
    allowPast: true,
    minDate: new Date(2020, 0, 1),
  });

  return (
    <div className="calendar">
      {displayedMonths.map((month) => (
        <div key={month.name} className="month">
          {month.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="week">
              {week.days.map((day, dayIndex) => (
                <CalendarDay key={dayIndex} day={day} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
