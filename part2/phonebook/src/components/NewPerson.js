import React from "react";

const NewPerson = ({onSubmit, name, number}) => {
    return(
        <>
            <h2>Add a new</h2>
            <form onSubmit={onSubmit}>
                name: <input onChange={name.onChange} value={name.value} /> <br />
                number: <input onChange={number.onChange} value={number.value} /> <br /> 
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default NewPerson