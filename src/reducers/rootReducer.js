import { combineReducers } from 'redux';
import netWorth from './netWorthReducer';
import currency from './currencyReducer';
import projection from './projectionReducer';

export default combineReducers({
  netWorth,
  currency,
  projection
});