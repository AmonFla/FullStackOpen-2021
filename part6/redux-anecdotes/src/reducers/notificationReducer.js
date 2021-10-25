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
        clearTimeout(localStorage.getItem('timeId'))
        const timeId = setTimeout(() => { 
            dispatch({
                type: 'CLEAN-NOTIFICATION'
            })
         }, time * 1000)
        dispatch({
            type: 'SET-NOTIFICATION',
            data: notification
        })
        localStorage.setItem('timeId',timeId ) 
    }    
}


export default notificationReducer