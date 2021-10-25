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

export const setNotificacion = (notification, time)=>{
    return async dispatch =>{
        dispatch({
            type: 'SET-NOTIFICATION',
            data: notification
        })
        setTimeout(() => { 
            dispatch({
                type: 'CLEAN-NOTIFICATION'
            })
         }, time)
    }    
}


export default notificationReducer