import React from "react"
import {useDispatch}   from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { setNotificacion } from "../reducers/notificationReducer"

const AnecdoteForm = ()=>{
    const dispatch = useDispatch()

    const NewAnecdote = async (e) => {
        e.preventDefault() 
        dispatch(newAnecdote(e.target.anecdote.value))
        dispatch(setNotificacion(`Added anecdote '${e.target.anecdote.value}'`,5000))  
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