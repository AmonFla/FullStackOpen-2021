import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Search from './components/Search'
import NewPerson from './components/NewPerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  },[])
  
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