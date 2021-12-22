const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${hue}, 70%, 80%)`;
  return randomColor;
};

export const formattedData = data => {
  if (!data) return [];
  if (data.busters?.length) {
    return data.busters?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: getRandomPastelColor(),
        children: [{ name: b?.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersByUsernames?.length) {
    return data.bustersByUsernames?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: getRandomPastelColor(),
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersByUsernamesWithin?.length) {
    return data.bustersByUsernamesWithin?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: getRandomPastelColor(),
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }

  if (data.bustersWithin?.length) {
    return data.bustersWithin?.map((b, index) => {
      return {
        ...b,
        wins: b?.datesWon?.length,
        fill: getRandomPastelColor(),
        children: [{ name: b.username, wins: b?.datesWon?.length }],
      };
    });
  }
};
