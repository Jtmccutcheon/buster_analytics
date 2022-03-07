import moment from 'moment';
import { getMonthString } from './getMonthString';

const monthDates = (year, monthIndex) =>
  new Array(moment(`${year}-${getMonthString(monthIndex)}`).daysInMonth())
    .fill(null)
    .map((x, i) =>
      moment(`${year}-${getMonthString(monthIndex)}`)
        .startOf('month')
        .add(i, 'days')
        .format('YYYY-MM-DD'),
    )
    .sort((a, b) => b - a);
export const createScatterXaxis = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth();

  const res = [];
  const base = -1;

  while (month !== base) {
    res.push(monthDates(year, month));
    month--;
  }

  return res.flat().sort((a, b) => b - a);
};
