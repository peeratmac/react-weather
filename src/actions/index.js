export const loadCities = cities => ({
  type: 'LOAD_CITIES',
  cities
});

export const targetCity = selectedCity => ({
  type: 'TARGET_CITY',
  selectedCity
});
