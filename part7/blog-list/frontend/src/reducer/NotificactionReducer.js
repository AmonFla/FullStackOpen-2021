let timeId

const NotificationReducer = (state = null, action) => {
  switch(action.type){
  case 'SET-NOTIFICACTION':
    return action.data
  case 'CLEAN-NOTIFICATION':
    return null
  default:
    return state
  }
}

export const setNotification = (notificaction, time) => {
  return dispatch => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      dispatch({
        type:'CLEAN-NOTIFICATION'
      })
    }, time * 1000)
    dispatch({
      type:'SET-NOTIFICACTION',
      data: notificaction
    })
  }
}

export default NotificationReducer