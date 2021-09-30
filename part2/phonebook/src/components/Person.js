import React from "react";

const Person = ({person,deletePerson}) =>{
    return(
        <>
            {person.name} {person.number} <button key={person.id} onClick={() => deletePerson(person.id)}> borrar</button><br />
        </>
    )
}

export default Person
