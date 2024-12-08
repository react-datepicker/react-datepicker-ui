import { Dayjs } from "dayjs";
import { isAfterDay } from "./dates.utils";

export const isInRange = (
  date: Dayjs,
  startDate: Dayjs | null,
  endDate: Dayjs | null
) => {
  if (!startDate) return false; // No range if startDate is missing
  if (!endDate) {
    // If endDate is not set, check if the date matches the startDate
    return date.isSame(startDate, "day") || isAfterDay(date, startDate);
  }
  // Check if the date is within the range
  return date.isBetween(startDate, endDate, "day", "[]");
};
