import React from "react"
import {connect}   from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { setNotificacion } from "../reducers/notificationReducer"

const AnecdoteForm = (props)=>{ 

    const NewAnecdote = async (e) => {
        e.preventDefault() 
        props.newAnecdote(e.target.anecdote.value)
        props.setNotificacion(`Added anecdote '${e.target.anecdote.value}'`,5000)
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

export default connect (null, {newAnecdote, setNotificacion })(AnecdoteForm)