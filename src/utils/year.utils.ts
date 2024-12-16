export const generateYearsArray = (
  startYear: number = 1900,
  endYear: number = 2100
): string[] => {
  const years: string[] = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year.toString());
  }
  return years;
};
