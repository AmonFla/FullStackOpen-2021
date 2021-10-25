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
  return {
    type: 'ANECDOTE-VOTE',
    data
  }
}

export const newAnecdote = (data) =>{
  return {
    type: 'ANECDOTE-ADD',
    data
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