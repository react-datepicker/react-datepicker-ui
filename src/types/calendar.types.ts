export enum MonthName {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// Represents a single day
export type Day = {
  number: number; // Day of the month (1–31)
  date: Date; // Full JavaScript Date object
  isToday: boolean; // Whether this is the current day
  isWeekend: boolean; // Whether this day is a weekend
  isInCurrentMonth: boolean; // Whether the day belongs to the displayed month
};

// Represents a single week containing multiple days
export type Week = {
  days: Day[]; // Array of 7 days (or fewer if constrained)
};

// Represents a single month
export type Month = {
  year: number; // Year of the month
  name: MonthName; // Month name (e.g., January, February)
  days: Day[]; // All days in the month
  weeks: Week[]; // Organized into weeks
  isCurrentMonth: boolean; // Whether this is the currently displayed month
};

// Represents the overall calendar for a particular display
export type Calendar = {
  year: number; // The year being displayed
  displayedMonths: Month[]; // Months being displayed (could be 1 or multiple for a range)
  weeksToShow: Week[]; // All weeks to render, including overflow (e.g., last days of the previous month or first days of the next month)
};
