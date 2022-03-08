import moment from 'moment';
// import { getMonthNumber } from './getMonthNumber';
import { createScatterXaxis } from './createScatterXaxis';

export const createScatterData = busters => {
  if (!busters) return [];

  const dates = createScatterXaxis();
  const defaultData = dates.map(d => ({
    x: d,
    y: -1,
  }));
  const busterData = busters.map(b => {
    return dates
      .map(d => ({
        x: d,
        y: getY(b.datesWon, d),
        u: b.username,
        f: b.fill,
      }))
      .filter(i => i.y !== 0);
  });

  return {
    defaultData,
    busterData,
  };
};

const getY = (dates, date) => {
  const slicer = date.slice(0, 7);
  const poop = dates.filter(d => d.startsWith(slicer));
  const bloop = poop.map(d => moment(d).format('YYYY-MM-DD'));
  const doop = bloop.indexOf(date);

  return doop + 1;
};
