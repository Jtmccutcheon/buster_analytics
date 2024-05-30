import { differenceInYears, subYears } from 'date-fns';

export const getYears = year => {
  const looper = differenceInYears(new Date(year, 1, 1), new Date(2021, 1, 1));
  let years = [];
  for (let i = 0; i < looper + 1; i++) {
    years.push(subYears(new Date(year, 1, 1), i).getFullYear().toString());
  }
  return years;
};
