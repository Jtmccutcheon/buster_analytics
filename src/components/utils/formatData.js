const getColor = () =>
  'hsl(' +
  360 * Math.random() +
  ',' +
  (25 + 70 * Math.random()) +
  '%,' +
  (75 + 10 * Math.random()) +
  '%)';

export const formattedData = data => {
  const end =
    data?.busters?.length ||
    data?.bustersByUsernames?.length ||
    data?.bustersByUsernamesWithin?.length ||
    data?.bustersWithin?.length;

  const colors = Array.from({ length: end });

  const colorArray = colors.map(() => getColor());

  if (!data) return [];
  if (data.busters?.length) {
    return data.busters?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: colorArray[index],
        children: [{ name: b?.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersByUsernames?.length) {
    return data.bustersByUsernames?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: colorArray[index],
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersByUsernamesWithin?.length) {
    return data.bustersByUsernamesWithin?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: colorArray[index],
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersWithin?.length) {
    return data.bustersWithin?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: colorArray[index],
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }
};
