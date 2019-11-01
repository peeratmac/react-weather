export const setWeatherInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_WEATHER_INFO':
      return action.weatherInfo;
    default:
      return state;
  }
};
