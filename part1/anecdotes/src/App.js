import React, { useState } from 'react'

const AnecdoteBlock = ({title,anecdote, vote}) => {
  return(
    <>

      <h1>{title}</h1>
      {anecdote}
      <br />
      has {vote} votes
      <br />
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState({
    random:0,
    votes:   Array(anecdotes.length).fill(0)
  })

  const randomSelect = () => {
    const rand = Math.round(Math.random()*(anecdotes.length-1)) 
    setSelected({...selected, random: rand})
  }

  const voteAnecdote = () =>{
    const votes = [...selected.votes]
    votes[selected.random]+=1
    setSelected({...selected, votes: votes})
  }
  
  const maxVoted = selected.votes.indexOf(Math.max(...selected.votes))


  console.log(selected)
  return (
    <div>
      <AnecdoteBlock title="Anecdote of the Day" anecdote={anecdotes[selected.random]} vote={selected.votes[selected.random]} />
      <br />
      <button onClick={voteAnecdote} >vote</button>
      <button onClick={randomSelect} >next anecdote</button> 
      <AnecdoteBlock title="Anecdote with most votes" anecdote={anecdotes[maxVoted]} vote={selected.votes[maxVoted]} /> 
    </div>
  )
}

export default App
 