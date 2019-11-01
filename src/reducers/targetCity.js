export const targetCity = (state = '', action) => {
  switch (action.type) {
    case 'TARGET_CITY':
      return action.selectedCity;
    default:
      return state;
  }
};
