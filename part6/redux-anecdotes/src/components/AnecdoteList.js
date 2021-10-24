import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotificacion, cleanNotificacion } from "../reducers/notificationReducer"

const AnecdoteList = ()=>{
  const state = useSelector(state => state)
  const anecdotes = state.anecdotes
    .filter(a => a.content.includes(state.filter))
    .sort((a, b) => a.votes < b.votes ? 1 : -1)

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(a => a.id === id) 
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