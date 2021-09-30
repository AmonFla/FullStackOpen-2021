import React, { useEffect, useState } from 'react' 
import servPerson from './services/persons'
import Persons from './components/Persons'
import Search from './components/Search'
import NewPerson from './components/NewPerson'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(()=>{
    servPerson.getAll().then(persons => setPersons(persons))
  },[])
  
  const saveName=(event)=>{
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      servPerson.createPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id) =>{
    const toDelete = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${toDelete.name}?`))
      servPerson
      .deletePerson(id)
      .then(()=>{
          setPersons(persons.filter((person)=> person.id !== id))
      })
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
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App