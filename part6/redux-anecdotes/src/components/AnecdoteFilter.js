import React from "react"
import { setFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const AnecdoteFilter = ()=>{
    const dispatch = useDispatch()

    const filterAnecdote = (e) => {
        console.log(e.target.value)
        dispatch(setFilter(e.target.value))
    }

    return(
        <>filter: <input onChange={filterAnecdote} /></>
    )

}

export default AnecdoteFilter