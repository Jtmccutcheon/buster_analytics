export const initialBusters = [];
// this has slightly different logic than busterReducer
// needs to be able to hold entire buster object other than usernames
export const seasonBusters = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUSTER':
      return state.find(b => b.id === action.payload.id)
        ? state.filter(b => b.id !== action.payload.id)
        : [...state, action.payload];

    case 'RESET':
      return initialBusters;
    default:
      throw new Error();
  }
};
