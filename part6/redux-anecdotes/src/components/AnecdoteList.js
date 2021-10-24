import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotificacion, cleanNotificacion } from "../reducers/notificationReducer"
import servAnecdote from '../services/anecdotes'

const AnecdoteList = ()=>{
  const state = useSelector(state => state)
  const anecdotes = state.anecdotes
    .filter(a => a.content.includes(state.filter))
    .sort((a, b) => a.votes < b.votes ? 1 : -1)

  const dispatch = useDispatch()

  const vote = async (id) => {
    const anecdote = anecdotes.find(a => a.id === id) 
    const modifiedEntry = {...anecdote, votes: anecdote.votes + 1}
    await servAnecdote.update(modifiedEntry)
    dispatch(voteAnecdote(modifiedEntry))
    
    dispatch(setNotificacion(`you voted '${anecdote.content}'`))
    setTimeout(() => { dispatch(cleanNotificacion()) }, 5000)
  }

  return(
      <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
      </>
  )
}

export default AnecdoteList