import React from "react";

const CountryItem = ({country, showDetail}) => {
    return(
        <>
            {country.name.common}  <button onClick={()=>showDetail(country.name.common)}>show</button>
            <br /> 
        </>
    )
}

export default CountryItem