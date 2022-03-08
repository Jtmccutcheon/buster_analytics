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
    );

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

  const flattend = res.flat();

  return flattend.sort((a, b) => {
    a = moment(a);
    b = moment(b);
    return a < b ? -1 : 1;
  });
};
