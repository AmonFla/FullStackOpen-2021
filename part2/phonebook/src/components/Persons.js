import React from "react";
import Person from "./Person";

const Persons = ({personToShow}) =>{

    return(
        <>
            <h2>Numbers</h2>
            {personToShow.map((person)=> <Person key={person.name}  person={person} /> )}
        </>
    )
}

export default Persons