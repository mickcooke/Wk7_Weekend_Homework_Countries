import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value);
    }




  return (
    <>
  
    <select onChange={handleChange}>
        {countries.map(country => {
            return (
                <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
            

            )
        })
    }
   </select>
            
</>

  )
}

export default CountrySelector;