import React from "react"
import { connect } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotificacion } from "../reducers/notificationReducer" 

const AnecdoteList = (props)=>{  
    
    

  const vote = async (id) => {
    const anecdote = props.anecdotes.find(a => a.id === id) 
    const modifiedEntry = {...anecdote, votes: anecdote.votes + 1}
    props.voteAnecdote(modifiedEntry)
    props.setNotificacion(`you voted '${anecdote.content}'`,5)
  }

  return(
      <>
        {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state)=>{
  return {
    anecdotes: state.anecdotes
      .filter(a => a.content.includes(state.filter))
      .sort((a, b) => a.votes < b.votes ? 1 : -1)
  }
}
export default connect(mapStateToProps, {voteAnecdote,setNotificacion})(AnecdoteList)