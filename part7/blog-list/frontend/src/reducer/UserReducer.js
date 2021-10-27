
const UserReducer = (state = null, action) => {
  switch(action.type){
  case 'USER-SET':
    return action.data
  case 'USER-CLEAN':
    return null
  default:
    return state
  }
}

export const setUser = (user) => {
  return dispatch => {
    dispatch({
      type:'USER-SET',
      data: user
    })
  }
}

export const cleanUser = () => {
  return dispatch => {
    dispatch({
      type:'USER-CLEAN'
    })
  }
}

export default UserReducer