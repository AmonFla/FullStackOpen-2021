const filterReducer = (state = '', action)=>{
    switch(action.type){
        case 'SET-FILTER':
            return action.data
        default:
            return state
    }
}

export const setFilter = (filter)=>{
    return {
        type: 'SET-FILTER',
        data: filter
    }
}

export default filterReducer