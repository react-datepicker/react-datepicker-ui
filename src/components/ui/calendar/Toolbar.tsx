import { FC, useMemo } from "react";

import { Month } from "@/types/calendar.types";

import { Select, SelectContent, SelectItem, SelectTrigger } from "../select";
import { generateYearsArray } from "@/utils/year.utils";

const Toolbar: FC<{
  displayedMonths: Month[];
  setYear: (year: number) => void;
}> = ({ setYear, displayedMonths }) => {
  const isAllOneYear = useMemo(
    () =>
      displayedMonths.every((month) => month.year === displayedMonths[0].year),
    [displayedMonths]
  );

  const yearsToShow = useMemo(() => generateYearsArray(1800, 2100), []);

  return (
    <div className="flex flex-row justify-end mb-1">
      <div>
        <Select
          value={displayedMonths[0].year.toString()}
          onValueChange={(e) =>
            !isNaN(parseInt(e)) ? setYear(parseInt(e)) : undefined
          }
        >
          <SelectTrigger className="w-[135px] h-[25px]">
            <>
              {displayedMonths[0].year}{" "}
              {!isAllOneYear
                ? `- ${displayedMonths[displayedMonths.length - 1].year}`
                : ""}
            </>
          </SelectTrigger>
          <SelectContent position="popper">
            {yearsToShow.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Toolbar;
