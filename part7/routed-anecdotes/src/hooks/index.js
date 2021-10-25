import { useState } from "react"

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const reset = (e) => {
        setValue('')
    }

    const render = ()=> {        return {
            type, 
            value,
            onChange}
     }
    
      return{
        type, 
        value,
        onChange,
        reset,
        render
    }
}