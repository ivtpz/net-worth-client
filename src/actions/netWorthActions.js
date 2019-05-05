export const editLine = (line) => (dispatch, getState) => {
  // TODO: API call
  dispatch({
    type: 'EDIT_LINE',
    payload: line
  })
}