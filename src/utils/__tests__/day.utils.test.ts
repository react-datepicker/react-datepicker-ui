import { describe, it, expect } from "vitest";
import { isDateDisabled, generateDaysForMonth } from "../day.utils";
import "dayjs/locale/en"; // or your desired locale
import { LocaleKey } from "../locale.utils";

describe("day.utils", () => {
  describe("isDateDisabled", () => {
    const baseOptions = {
      allowPast: true,
      allowFuture: true,
      minDate: undefined,
      maxDate: undefined,
    };

    it("should return false when no restrictions are set", () => {
      const date = new Date();
      expect(isDateDisabled(date, baseOptions)).toBe(false);
    });

    it("should disable dates before minDate", () => {
      const minDate = new Date("2024-03-15");
      const testDate = new Date("2024-03-14");

      expect(isDateDisabled(testDate, { ...baseOptions, minDate })).toBe(true);
    });

    it("should disable dates after maxDate", () => {
      const maxDate = new Date("2024-03-15");
      const testDate = new Date("2024-03-16");

      expect(isDateDisabled(testDate, { ...baseOptions, maxDate })).toBe(true);
    });

    it("should disable past dates when allowPast is false", () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      expect(
        isDateDisabled(yesterday, { ...baseOptions, allowPast: false })
      ).toBe(true);
    });

    it("should disable future dates when allowFuture is false", () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      expect(
        isDateDisabled(tomorrow, { ...baseOptions, allowFuture: false })
      ).toBe(true);
    });
  });

  describe("generateDaysForMonth", () => {
    const baseOptions = {
      allowPast: true,
      allowFuture: true,
      minDate: undefined,
      maxDate: undefined,
      locale: "en" as LocaleKey,
    };

    it("should generate correct number of days for a month", () => {
      const days = generateDaysForMonth(2, 2024, baseOptions); // February 2024
      expect(days).toHaveLength(29); // Leap year
    });

    it("should generate days with correct properties", () => {
      const days = generateDaysForMonth(2, 2024, baseOptions);
      const firstDay = days[0];

      expect(firstDay).toEqual(
        expect.objectContaining({
          number: 1,
          isInCurrentMonth: true,
          disabled: expect.any(Boolean),
          isWeekend: expect.any(Boolean),
          isToday: expect.any(Boolean),
          weekDay: expect.any(Number),
          date: expect.any(Date),
        })
      );
    });

    it("should mark weekends correctly", () => {
      const days = generateDaysForMonth(2, 2024, baseOptions);

      expect(days[0].isWeekend).toBe(false);
      expect(days[1].isWeekend).toBe(false);
      expect(days[2].isWeekend).toBe(true);
      expect(days[3].isWeekend).toBe(true);
      expect(days[4].isWeekend).toBe(false);
    });

    it("should mark weekends correctly in he locale", () => {
      const days = generateDaysForMonth(2, 2024, {
        ...baseOptions,
        locale: "he",
      });
      expect(days[0].isWeekend).toBe(false);
      expect(days[1].isWeekend).toBe(true);
      expect(days[2].isWeekend).toBe(true);
      expect(days[3].isWeekend).toBe(false);
      expect(days[4].isWeekend).toBe(false);
      expect(days[5].isWeekend).toBe(false);
      expect(days[6].isWeekend).toBe(false);
    });
  });
});
