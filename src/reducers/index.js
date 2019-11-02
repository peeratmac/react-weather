import { combineReducers } from 'redux';
import { cities } from './loadCities';
import { targetCity } from './targetCity';
import { getLatLong } from './latLong';
import { loadWeather } from './loadWeather';
import { setWeatherInfo } from './setWeatherInfo';
import { getCurrentStation } from './getCurrentStation';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  cities,
  targetCity,
  getLatLong,
  getCurrentStation,
  stationIDs: loadWeather,
  weatherInformation: setWeatherInfo,
  favorites
});
