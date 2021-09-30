import React, { useEffect, useState } from "react";
import axios from "axios";  



const CountryWeather = ({country}) =>{
    const [weather, setWeather] = useState('')

    useEffect(()=>{ 
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${country.name.common}`)
            .then(response=>{  
                if (!response.data.hasOwnProperty('success'))
                     setWeather(response.data)
                })
            .catch(error => console.log(error))
    },[country])   
    
   
    console.log(weather)
    if (weather !== '')
        return(
            <>
                <h3>Weather in {country.name.common}</h3>
                Temperature: {weather.current.temperature}<br />
                <img src={weather.current.weather_icons[0]} alt={country.name.common} /> <br />
                Wind: {weather.current.wind_speed}
            </>
        )
    return <></>

}

export default CountryWeather