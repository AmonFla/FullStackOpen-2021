import React from "react";

const Search=({onChange, filter})=>{
    return(
        <>
            filter shown with: <input onChange={onChange} value={filter} /> <br />

        </>
    )
}

export default Search