import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const saveName=(event)=>{
    event.preventDefault()
    if(persons.find(person => person.name == newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={saveName}>
        <div>
          name: <input 
            onChange={(event)=>setNewName(event.target.value)} 
            value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=><Person key={person.name}  name={person.name} />) }
    </div>
  )
}

export default App