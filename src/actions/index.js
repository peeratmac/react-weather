export const loadCities = cities => ({
  type: 'LOAD_CITIES',
  cities
});

export const targetCity = selectedCity => ({
  type: 'TARGET_CITY',
  selectedCity
});

export const getLatLong = latLong => ({
  type: 'GET_LAT_LONG',
  latLong
});

export const loadWeather = stationIDs => ({
  type: 'LOAD_WEATHER',
  stationIDs
});

export const setWeatherInfo = weatherInfo => ({
  type: 'SET_WEATHER_INFO',
  weatherInfo
});

export const getCurrentStation = currentStation => ({
  type: 'GET_CURRENT_STATION',
  currentStation
});

export const updateFavorties = favorites => ({
  type: 'UPDATE_FAVORITES',
  favorites
});
