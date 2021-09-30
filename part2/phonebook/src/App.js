import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const saveName=(event)=>{
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const personToShow = filter === ''
    ? persons
    : persons.filter (person => person.name.toLowerCase().includes(filter.toLowerCase()))

 
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input 
            onChange={(event)=>setFilter(event.target.value)} 
            value={filter} /> <br />
      <h2>add a new</h2>
      <form onSubmit={saveName}>
        <div>
        name: <input 
            onChange={(event)=>setNewName(event.target.value)} 
            value={newName} /> <br />
        number: <input 
            onChange={(event)=>setNewNumber(event.target.value)} 
            value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personToShow.map((person)=> <Person key={person.name}  person={person} /> )}
    </div>
  )
}

export default App