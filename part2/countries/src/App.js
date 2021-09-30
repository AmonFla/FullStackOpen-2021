import React, { useEffect, useState } from "react"; 
import axios from 'axios'
import CountryData from './components/CountryData'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('') 

  useEffect(()=>{ 
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => setCountries(response.data)) 
        .catch(err => console.log(err.response.status))
  },[])

  const countriesToShow = search === ''
  ? countries
  : countries.filter (countries => countries.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        Find countries: <input valur={search} onChange={(event)=>setSearch(event.target.value)} />
        <br /> 
          <CountryData countries={countriesToShow} />
    </div>


  );
}

export default App;
