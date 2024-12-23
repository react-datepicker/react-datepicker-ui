import { generateMonthsByYearAndMonths } from "../month.utils";
import { Month, MonthName } from "@/types/calendar.types";

import { describe, expect, it } from "vitest";

describe("generateMonthsByYearAndMonths", () => {
  it("should generate correct months when switching from December to next year", () => {
    // Arrange
    const mockCalendarOptions = {
      numberOfDisplayedMonths: 2,
      // ... other options as needed
    };

    const mockMonths: Month[] = [
      {
        name: MonthName.December,
        number: 12,
        year: 2024,
        days: [
          {
            date: new Date("2024-12-01"),
            number: 0,
            disabled: false,
            isToday: false,
            isWeekend: false,
            isInCurrentMonth: false,
          },
        ],
        weeks: [], // Not needed for this test
      },
      {
        name: MonthName.January,
        number: 1,
        year: 2025,
        days: [
          {
            date: new Date("2025-01-01"),
            number: 0,
            disabled: false,
            isToday: false,
            isWeekend: false,
            isInCurrentMonth: false,
          },
        ],
        weeks: [],
      },
    ];

    // Act
    const result = generateMonthsByYearAndMonths(
      2028,
      mockMonths,
      mockCalendarOptions
    );

    // Assert
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      name: "December",
      number: 12,
      year: 2028,
    });
    expect(result[1]).toMatchObject({
      name: "January",
      number: 1,
      year: 2029,
    });
  });
});
