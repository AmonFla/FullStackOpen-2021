import React from "react";

const CountryItem = ({country}) => {
    return(
        <>
            {country.name.common} 
            <br /> 
        </>
    )
}

export default CountryItem