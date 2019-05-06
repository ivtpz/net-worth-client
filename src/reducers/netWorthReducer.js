import omit from 'lodash/omit';
import { FETCH_NET_WORTH, EDIT_LINE } from '../actions/netWorthActions';

export default (state = { loaded: false }, action) => {
  switch (action.type) {
  case EDIT_LINE: {
    const { prop, lineId, value } = action.payload
    const indexToEdit = state[prop].findIndex(({ id }) => id === lineId);
    const array = state[prop]
    return {
      ...state,
      [prop]: [
        ...array.slice(0, indexToEdit),
        {
          ...array[indexToEdit],
          value: Math.floor(parseFloat(value) * 100) / 100
        },
        ...array.slice(indexToEdit + 1)
      ]
    }
  }
  case FETCH_NET_WORTH:
    if (action.status === 'fetching') {
      return {
        ...state,
        loading: true
      }
    } else if (action.status === 'success') {
      return { 
        ...state,
        ...omit(action.response, 'convertedHoldings'),
        ...action.response.convertedHoldings,
        loading: false,
        loaded: true,
        error: false 
      }
    } else {
      return { 
        ...state,
        loading: false,
        error: true 
      }
    }
  default:
    return state
  }
}