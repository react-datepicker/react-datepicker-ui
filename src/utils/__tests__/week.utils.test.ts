import { describe, it, expect } from "vitest";
import { getWeeksForDays } from "../week.utils";
import { Day } from "../../types/calendar.types";

describe("getWeeksForDays", () => {
  const defaultCalendarOptions = {
    minDate: undefined,
    maxDate: undefined,
    disabledDates: [],
    disabledDaysOfWeek: [],
  };

  it("should return empty array when no days provided", () => {
    const result = getWeeksForDays([], defaultCalendarOptions);
    expect(result).toEqual([]);
  });

  it("should correctly generate a single week", () => {
    // Create test data for a week in January 2024
    const testDays: Day[] = [
      {
        number: 1,
        date: new Date(2024, 0, 1), // January 1, 2024 (Monday)
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
        disabled: false,
      },
      {
        number: 2,
        date: new Date(2024, 0, 2),
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
        disabled: false,
      },
    ];

    const result = getWeeksForDays(testDays, defaultCalendarOptions);

    expect(result).toHaveLength(1); // Should generate one week
    expect(result[0].days).toHaveLength(7); // Should have 7 days

    // Check specific days
    expect(result[0].days[0].number).toBe(31); // First day should be December 31
    expect(result[0].days[1].number).toBe(1); // Second day should be January 1
    expect(result[0].days[0].isInCurrentMonth).toBe(false);
    expect(result[0].days[1].isInCurrentMonth).toBe(true);
    expect(result[0].days[6].isWeekend).toBe(true); // Saturday should be weekend
  });

  it("should handle multiple weeks correctly", () => {
    // Create test data spanning two weeks
    const testDays: Day[] = [
      {
        number: 31,
        date: new Date(2024, 0, 31), // January 31, 2024 (Wednesday)
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
        disabled: false,
      },
      {
        number: 1,
        date: new Date(2024, 1, 5), // February 5, 2024 (Monday)
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
        disabled: false,
      },
    ];

    const result = getWeeksForDays(testDays, defaultCalendarOptions);

    expect(result).toHaveLength(2); // Should generate two weeks
    expect(result[0].days).toHaveLength(7);
    expect(result[1].days).toHaveLength(7);

    // Check transition between months
    const lastDayFirstWeek = result[0].days[6];
    expect(lastDayFirstWeek.number).toBe(3); // February 3
    expect(lastDayFirstWeek.isWeekend).toBe(true); // Saturday

    // Check second week's Sunday
    const firstDaySecondWeek = result[1].days[0];
    expect(firstDaySecondWeek.number).toBe(4); // February 4
    expect(firstDaySecondWeek.isWeekend).toBe(false); // Sunday
  });

  it("should mark weekends correctly", () => {
    const testDays: Day[] = [
      {
        number: 1,
        date: new Date(2024, 0, 1), // January 1, 2024 (Monday)
        isToday: false,
        isWeekend: false,
        isInCurrentMonth: true,
        disabled: false,
      },
    ];

    const result = getWeeksForDays(testDays, defaultCalendarOptions);

    // Saturday and Sunday should be marked as weekend
    expect(result[0].days[5].isWeekend).toBe(true); // Saturday
    expect(result[0].days[6].isWeekend).toBe(true); // Sunday
    expect(result[0].days[0].isWeekend).toBe(false); // Monday
  });
});
