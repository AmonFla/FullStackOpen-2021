import React from "react";
import CountryWeather from "./CountryWeather";

const CountryDetail = ({country}) => {
 
    return(
        <>
            <h2>{country.name.common}</h2>
            <p>
                Capital: {country.capital[0]}<br />
                Population: {country.population} <br /> 
            </p>
            <h3>Languages</h3>
                <ul>
                    {Object.entries(country.languages).map((lang) => <li key={lang[0]}>{lang[1]}</li>)}
                </ul>
            <img src={country.flags.png} alt={country.name.official} width="20%"/>
            <CountryWeather country={country} />
        </>
    )
}             


export default CountryDetail