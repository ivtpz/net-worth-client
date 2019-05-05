export default (state = {}, action) => {
  switch (action.type) {
  case 'EDIT_LINE':
    return {
      result: action.payload
    }
  default:
    return state
  }
}