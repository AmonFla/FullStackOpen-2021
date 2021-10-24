const notificationReducer = (state=null, action)=>{
    switch(action.type){
        case 'SET':
            return action.data
        case 'CLEAN':
            return null
        default:
            return state
    }
}

export const setNotificacion = (notification)=>{
    return {
        type: 'SET',
        data: notification
    }
}

export const cleanNotificacion = (notification)=>{
    return {
        type: 'CLEAN'
    }
}

export default notificationReducer