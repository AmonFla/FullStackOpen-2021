const notificationReducer = (state=null, action)=>{
    switch(action.type){
        case 'SET-NOTIFICATION':
            return action.data
        case 'CLEAN-NOTIFICATION':
            return null
        default:
            return state
    }
}

export const setNotificacion = (notification)=>{
    return {
        type: 'SET-NOTIFICATION',
        data: notification
    }
}

export const cleanNotificacion = (notification)=>{
    return {
        type: 'CLEAN-NOTIFICATION'
    }
}

export default notificationReducer