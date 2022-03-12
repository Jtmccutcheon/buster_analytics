export const initialBusters = [];

export const busterReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUSTER':
      return state.includes(action.payload)
        ? state.filter(i => i).filter(i => i !== action.payload)
        : [...state, action.payload];

    case 'RESET':
      return initialBusters;
    default:
      throw new Error();
  }
};
