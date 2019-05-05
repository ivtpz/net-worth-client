import { FETCH_CURRECIES, SELECT_CURRENCY } from '../actions/currencyActions';

export default (state = { currencies: [], selectedCurrency: 0 }, action) => {
  switch (action.type) {
  case SELECT_CURRENCY:
    return {
      ...state,
      selectedCurrency: action.payload
    };
  case FETCH_CURRECIES:
    if (action.status === 'fetching') {
      return {
        ...state,
        loading: true
      }
    } else if (action.status === 'success') {
      return { 
        ...state,
        currencies: action.response,
        loading: false,
        loaded: true,
        error: false 
      }
    } else {
      return { 
        ...state,
        currencies: [],
        loading: false,
        error: true 
      }
    }
  default:
    return state
  }
}