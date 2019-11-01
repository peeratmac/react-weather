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
