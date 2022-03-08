import moment from 'moment';
import { getMonthString } from './getMonthString';

const monthStart = (year, monthIndex) =>
  moment(`${year}-${getMonthString(monthIndex)}`)
    .startOf('month')
    .format('YYYY-MM-DD');

export const createXaxisTicks = props => {
  console.log({ props });
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth();
  const base = -1;
  const res = [];

  while (month !== base) {
    res.push(monthStart(year, month));
    month--;
  }

  return res.sort((a, b) => {
    a = moment(a);
    b = moment(b);
    return a < b ? -1 : 1;
  });
};
