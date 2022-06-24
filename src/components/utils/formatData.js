import { getColor } from './getPastelColor';

export const formattedData = data => {
  const busters =
    data?.busters ||
    data?.bustersByUsernames ||
    data?.bustersByUsernamesWithin ||
    data?.bustersWithin ||
    [];

  const colors = Array.from({ length: busters.length });

  const colorArray = colors.map(() => getColor());

  if (!data) return [];

  return busters.map((b, index) => ({
    ...b,
    wins: b?.datesWon?.length,
    fill: colorArray[index],
    children: [{ name: b?.username, wins: b?.datesWon?.length }],
  }));
};
