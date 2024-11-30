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
};

export type Month = {
  year: number;
  name: MonthName;
  days: Day[];
};
