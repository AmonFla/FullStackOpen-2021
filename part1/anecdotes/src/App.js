import React, { useState } from 'react'

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
    votes:  [1].concat(Array(anecdotes.length-2).fill(0))
  })

  const randomSelect = () => {
    const rand = Math.round(Math.random()*(anecdotes.length-1))
    const votes = [...selected.votes]
    votes[rand]+=1
    setSelected({...selected, random: rand, votes: votes})
  }
  

  console.log(selected)
  return (
    <div>
      {anecdotes[selected.random]}
      <br />
      has {selected.votes[selected.random]} votes
      <br />
      <button onClick={randomSelect} >next anecdote</button>
    </div>
  )
}

export default App
 