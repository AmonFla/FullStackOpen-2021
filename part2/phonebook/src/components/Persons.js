import React from "react";
import Person from "./Person";

const Persons = ({personToShow, deletePerson}) =>{

    return(
        <>
            <h2>Numbers</h2>
            {personToShow.map((person)=> <Person key={person.name}  person={person} deletePerson={deletePerson}/> )}
        </>
    )
}

export default Persons