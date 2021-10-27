let timeId

const NotificationReducer = (state = null, action) => {
  switch(action.type){
  case 'NOTIFICACTION-SET':
    return action.data
  case 'NOTIFICATION-CLEAN':
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
        type:'NOTIFICATION-CLEAN'
      })
    }, time * 1000)
    dispatch({
      type:'NOTIFICACTION-SET',
      data: notificaction
    })
  }
}

export default NotificationReducer