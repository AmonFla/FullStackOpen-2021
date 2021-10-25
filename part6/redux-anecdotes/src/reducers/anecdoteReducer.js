 import servAnecdote from '../services/anecdotes'

const reducer = (state = [], action) => { 
  switch(action.type){
    case 'ANECDOTE-ADD':
      return [...state, action.data]
    case 'ANECDOTE-VOTE': 
      return state.map(a=> a.id !== action.data.id ? a: action.data )
    case 'ANECDOTE-INIT':
      return action.data
    default:
      return state
  }
}

export const voteAnecdote = (data) =>{
  return async dispatch => {
    const modifiedEntry = await servAnecdote.update(data)
    dispatch({
      type: 'ANECDOTE-VOTE',
      data: modifiedEntry
    })
  }
} 

export const newAnecdote = (data) =>{
  return async dispatch => {
    const newEntry = await servAnecdote.save(data)
    dispatch({
      type: 'ANECDOTE-ADD',
      data: newEntry
    })
  }
}

export const initAnecdote = () =>{
  return async dispatch =>{
    const data = await servAnecdote.getAll()
    dispatch({
      type: 'ANECDOTE-INIT',
      data

    })
  }
}

export default reducer