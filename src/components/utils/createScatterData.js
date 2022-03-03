import { getMonthNumber } from './getMonthNumber';

const getZ = number => Number(`${number + '00'}`) + 100;

export const createScatterData = busters => {
  if (!busters) return [];

  // z doesnt seem to impact size of dot
  // like it does on recharts demo but oh well

  const months = [
    { x: 'Jan' },
    { x: 'Feb' },
    { x: 'Mar' },
    { x: 'Apr' },
    { x: 'May' },
    { x: 'Jun' },
    { x: 'Jul' },
    { x: 'Aug' },
    { x: 'Sept' },
    { x: 'Oct' },
    { x: 'Nov' },
    { x: 'Dec' },
  ];

  return busters.map(b => {
    return months.map(m => ({
      x: m.x,
      z: getZ(
        b.datesWon.filter(d => d.slice(5, 7) === getMonthNumber(m.x)).length,
      ),
      y:
        b.datesWon.filter(d => d.slice(5, 7) === getMonthNumber(m.x)).length ||
        0,
    }));
  });
};
