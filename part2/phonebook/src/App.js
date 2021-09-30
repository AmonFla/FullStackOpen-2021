import React, { useState } from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import NewPerson from './components/NewPerson'

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

 
  const name = {
    value: newName,
    onChange: (event) => setNewName(event.target.value)
  }
  const number = {
    value: newNumber,
    onChange: (event) => setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search  onChange={(event)=>setFilter(event.target.value)}  value={filter} /> 
      <NewPerson onSubmit={saveName} name={name} number={number} />      
      <Persons personToShow={personToShow} />
    </div>
  )
}

export default App