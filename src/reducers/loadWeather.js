export const loadWeather = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'LOAD_WEATHER':
      return action.stationIDs;
    default:
      return state;
  }
};
