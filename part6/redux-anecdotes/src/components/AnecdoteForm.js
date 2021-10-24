import React from "react"
import {useDispatch}   from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = ()=>{
    const dispatch = useDispatch()

    const NewAnecdote = (e) => {
        e.preventDefault()
        dispatch(newAnecdote(e.target.anecdote.value))
        e.target.anecdote.value = ''
    }
    return( 
        <>
            <h2>create new</h2>
            <form onSubmit={NewAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm