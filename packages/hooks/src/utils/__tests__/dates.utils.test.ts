import { describe, it, expect } from "vitest";
import dayjs from "dayjs";

import {
  getWeekdays,
  newDate,
  getDateByDayMonthAndYear,
  isWeekend,
  isBetweenDates,
  isDate,
} from "../dates.utils";
import { Day, Month, MonthName } from "@react-datepicker/types";

describe("dates.utils", () => {
  describe("getWeekdays", () => {
    it("should return an array of 7 weekday names", () => {
      const weekdays = getWeekdays();
      expect(weekdays).toHaveLength(7);
      expect(weekdays).toContain("Sunday");
      expect(weekdays).toContain("Saturday");
    });
  });

  describe("newDate", () => {
    it("should create a dayjs instance from a Date object", () => {
      const date = new Date("2024-03-15");
      const result = newDate(date);
      expect(result.format("YYYY-MM-DD")).toBe("2024-03-15");
    });

    it("should create a dayjs instance for current date when no parameter", () => {
      const result = newDate();
      expect(result.isValid()).toBe(true);
    });
  });

  describe("getDateByDayMonthAndYear", () => {
    it("should create correct date from day, month and year", () => {
      const day: Day = {
        number: 15,
        date: new Date("2024-03-15"),
        disabled: false,
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
      };
      const month: Month = {
        name: MonthName.March,
        number: 3,
        year: 2024,
        days: [],
        weeks: [],
      };
      const year = 2024;

      const result = getDateByDayMonthAndYear(day, month, year);
      expect(result.format("YYYY-MM-DD")).toBe("2024-03-15");
    });
  });

  describe("isWeekend", () => {
    it("should return true for weekend days", () => {
      const saturday = dayjs("2024-03-16"); // A Saturday
      const sunday = dayjs("2024-03-17"); // A Sunday

      expect(isWeekend(saturday)).toBe(true);
      expect(isWeekend(sunday)).toBe(true);
    });

    it("should return false for weekdays", () => {
      const wednesday = dayjs("2024-03-13"); // A Wednesday
      expect(isWeekend(wednesday)).toBe(false);
    });
  });

  describe("isBetweenDates", () => {
    it("should return true for dates between start and end", () => {
      const start = dayjs("2024-03-01");
      const end = dayjs("2024-03-31");
      const middle = dayjs("2024-03-15");

      expect(isBetweenDates(middle, start, end)).toBe(true);
    });

    it("should return false for dates outside range", () => {
      const start = dayjs("2024-03-01");
      const end = dayjs("2024-03-31");
      const outside = dayjs("2024-04-01");

      expect(isBetweenDates(outside, start, end)).toBe(false);
    });
  });

  describe("isDate", () => {
    it("should return true for Date objects", () => {
      expect(isDate(new Date())).toBe(true);
    });

    it("should return false for non-Date values", () => {
      expect(isDate("2024-03-15")).toBe(false);
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate(123)).toBe(false);
    });
  });
});
