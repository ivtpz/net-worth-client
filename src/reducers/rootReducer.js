import { combineReducers } from 'redux';
import netWorth from './netWorthReducer';
import currency from './currencyReducer'

export default combineReducers({
  netWorth,
  currency
});