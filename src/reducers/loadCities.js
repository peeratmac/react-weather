export const cities = (state = [], action) => {
  console.log(action);
  console.log(action.cities);
  switch (action.type) {
    case 'LOAD_CITIES':
      return [...action.cities];
    default:
      return state;
  }
};
