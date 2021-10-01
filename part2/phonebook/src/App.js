import React, { useEffect, useState } from 'react' 
import servPerson from './services/persons'
import Persons from './components/Persons'
import Search from './components/Search'
import NewPerson from './components/NewPerson'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)

  useEffect(()=>{
    servPerson.getAll().then(persons => setPersons(persons))
  },[])
  
  const saveName=(event)=>{
    event.preventDefault()
    const person = {...persons.find(person => person.name === newName)} 
    if(Object.entries(person).length !== 0){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
         person.number = newNumber
         servPerson.updatePerson(person.id, person).then(resp =>
            setPersons(persons.map(data => data.id !== person.id?data:resp)) 
         )
      }
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
          setNotificationMessage(`Added ${response.name}`)
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
      <Notification message={notificationMessage} />
      <Search  onChange={(event)=>setFilter(event.target.value)}  value={filter} /> 
      <NewPerson onSubmit={saveName} name={name} number={number} />      
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App