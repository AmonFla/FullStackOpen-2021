import React, {useEffect} from 'react' 
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'
import servAnecdotes from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { initAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    servAnecdotes.getAll().then(data => dispatch(initAnecdote(data)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App