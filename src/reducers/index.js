import { combineReducers } from 'redux';
import { cities } from './loadCities';
import { targetCity } from './targetCity';

export const rootReducer = combineReducers({
  cities,
  targetCity
});
