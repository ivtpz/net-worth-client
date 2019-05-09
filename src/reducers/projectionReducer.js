import { FETCH_PROJECTION } from '../actions/projectionActions';

export default (state = { currencies: [], selectedCurrency: 0 }, action) => {
  switch (action.type) {
  case FETCH_PROJECTION:
    if (action.status === 'fetching') {
      return {
        ...state,
        loading: true
      }
    } else if (action.status === 'success') {
      return { 
        ...state,
        chartData: action.response.map((value, i) => ({
          name: `Year ${i}`,
          uv: value
        })),
        loading: false,
        error: false 
      }
    } else {
      return { 
        ...state,
        chartData: [],
        loading: false,
        error: true 
      }
    }
  default:
    return state
  }
}