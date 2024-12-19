import { describe, it, expect } from "vitest";
import dayjs from "dayjs";
import { isInRange, isDateRange } from "../date-range.utils";

describe("date-range utils", () => {
  describe("isInRange", () => {
    const baseDate = dayjs("2024-03-15");

    it("should return false when startDate is null", () => {
      expect(isInRange(baseDate, null, dayjs("2024-03-20"))).toBeFalsy();
    });

    it("should return false when startDate is undefined", () => {
      expect(isInRange(baseDate, undefined, dayjs("2024-03-20"))).toBeFalsy();
    });

    it("should handle single date range (no endDate)", () => {
      const startDate = dayjs("2024-03-15");

      expect(isInRange(dayjs("2024-03-14"), startDate, null)).toBeFalsy();
      expect(isInRange(dayjs("2024-03-15"), startDate, null)).toBeTruthy();
      expect(isInRange(dayjs("2024-03-16"), startDate, null)).toBeTruthy();
    });

    it("should handle date range with start and end dates", () => {
      const startDate = dayjs("2024-03-15");
      const endDate = dayjs("2024-03-20");

      expect(isInRange(dayjs("2024-03-14"), startDate, endDate)).toBeFalsy();
      expect(isInRange(dayjs("2024-03-15"), startDate, endDate)).toBeTruthy();
      expect(isInRange(dayjs("2024-03-17"), startDate, endDate)).toBeTruthy();
      expect(isInRange(dayjs("2024-03-20"), startDate, endDate)).toBeTruthy();
      expect(isInRange(dayjs("2024-03-21"), startDate, endDate)).toBeFalsy();
    });
  });

  describe("isDateRange", () => {
    it("should return false for null or undefined", () => {
      expect(isDateRange(null)).toBeFalsy();
      expect(isDateRange(undefined)).toBeFalsy();
    });

    it("should return false for Date object", () => {
      expect(isDateRange(new Date())).toBeFalsy();
    });

    it("should return true for valid DateRange object", () => {
      const dateRange = {
        startDate: dayjs(new Date()),
        endDate: dayjs(new Date()),
      };
      expect(isDateRange(dateRange)).toBeTruthy();
    });

    it("should return false for object missing required properties", () => {
      const invalidRange1 = { startDate: new Date() };
      const invalidRange2 = { endDate: new Date() };
      const invalidRange3 = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(isDateRange(invalidRange1 as any)).toBeFalsy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(isDateRange(invalidRange2 as any)).toBeFalsy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(isDateRange(invalidRange3 as any)).toBeFalsy();
    });
  });
});
