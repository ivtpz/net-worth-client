import { pick } from 'lodash';

export const getProjection = () => (dispatch, getState) => {
  dispatch(requestProjection())

  const state = getState();
  const body = JSON.stringify({
    ...pick(state.netWorth, 'assets', 'liabilities')
  })

  return fetch(`${process.env.REACT_APP_CALCULATIONS_SERVICE}/api/networthcalculator/projection`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body
    })
    .then(
      response => response.json(),
      error => { 
        dispatch(requestProjectionError(error)) 
      }
    )
    .then(json => {
      if (json) {
        dispatch(recieveProjection(json))
      }
    })
}

export const FETCH_PROJECTION = 'FETCH_PROJECTION'

const requestProjection = () => ({
  type: FETCH_PROJECTION,
  status: 'fetching'
})

const recieveProjection = ({ projections }) => ({
  type: FETCH_PROJECTION,
  status: 'success',
  response: projections
})

const requestProjectionError = (error) => ({
  type: FETCH_PROJECTION,
  status: 'error',
  error
})