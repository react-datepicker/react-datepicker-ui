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

export type Day = {
  number: number;
  date: Date;
  disabled: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isInCurrentMonth: boolean;
};

export type Week = {
  days: Day[];
};

export type Month = {
  year: number;
  number: number;
  name: MonthName;
  days: Day[];
  weeks: Week[];
};

export type Calendar = {
  year: number;
  displayedMonths: Month[];
  weeksToShow: Week[];
};

export type Register = (
  month: Month,
  day: Day
) => {
  onClick: () => void;
  key: string;
};
