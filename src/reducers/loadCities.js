export const cities = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'LOAD_CITIES':
      return [...action.cities];
    default:
      return state;
  }
};
