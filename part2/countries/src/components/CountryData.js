import React from "react";
import CountryItem from "./CountryItem";
import CountryDetail from "./CountryDetail";

const CountryData= ({countries}) =>{
    if(countries.length > 10)
        return(<>Too many matches, specify another filter</>)

    if(countries.length === 1)
        return (<CountryDetail country={countries[0]} />)
    return(
        <>
            {countries.map( country =>  <CountryItem key={country.cca2} country={country} />)}
        </>
    )
        
}

export default CountryData