import fetch from 'cross-fetch';

export const EDIT_LINE = 'EDIT_LINE'

export const editLine = (value, lineId, prop, field) => (dispatch, getState) => {
  dispatch({
    type: EDIT_LINE,
    payload: { value, lineId, prop, field }
  })
}

export const calculate = (currencyId) => (dispatch, getState) => {
  dispatch(requestCalculation());

  const state = getState();
  const body = JSON.stringify({
    ...state.netWorth,
    resultCurrencyId: currencyId || state.currency.selectedCurrency
  })

  return fetch(`${process.env.REACT_APP_CALCULATIONS_SERVICE}/api/networthcalculator`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body
    })
    .then(
      response => response.json(),
      error => { 
        dispatch(requestCalculationError(error)) 
      }
    )
    .then(json => {
      if (json) {
        dispatch(recieveCalculation(json))
      }
    })
}

export const FETCH_NET_WORTH = 'FETCH_NET_WORTH'

const requestCalculation = () => ({
  type: FETCH_NET_WORTH,
  status: 'fetching'
})

const recieveCalculation = (response) => ({
  type: FETCH_NET_WORTH,
  status: 'success',
  response
})

const requestCalculationError = (error) => ({
  type: FETCH_NET_WORTH,
  status: 'error',
  error
})