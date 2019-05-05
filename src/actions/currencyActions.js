import fetch from 'cross-fetch';

export const SELECT_CURRENCY = 'SELECT_CURRENCY'

export const selectCurrency = (id) => ({
  type: SELECT_CURRENCY,
  payload: parseInt(id, 10)
})

export const getCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies())

  return fetch('http://localhost:5005/api/currencies')
    .then(
      response => response.json(),
      error => { 
        dispatch(requestCurrenciesError(error)) 
      }
    )
    .then(json => {
      if (json) {
        dispatch(recieveCurrencies(json))
      }
    })
}

export const FETCH_CURRECIES = 'FETCH_CURRENCIES'

const requestCurrencies = () => ({
  type: FETCH_CURRECIES,
  status: 'fetching'
})

const recieveCurrencies = (response) => ({
  type: FETCH_CURRECIES,
  status: 'success',
  response
})

const requestCurrenciesError = (error) => ({
  type: FETCH_CURRECIES,
  status: 'error',
  error
})