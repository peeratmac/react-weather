import { combineReducers } from 'redux';
import { cities } from './loadCities';
import { targetCity } from './targetCity';
import { getLatLong } from './latLong';
import { loadWeather } from './loadWeather';
import { setWeatherInfo } from './setWeatherInfo';

export const rootReducer = combineReducers({
  cities,
  targetCity,
  getLatLong,
  stationIDs: loadWeather,
  weatherInformation: setWeatherInfo
});
