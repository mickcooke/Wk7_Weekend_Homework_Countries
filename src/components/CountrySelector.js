import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, onCountrySelected, onFavCountrySelected}) => {

    const handleChange = event => {
        const selectedCountryId = event.target.value;
        onCountrySelected(event.target.value);
    }

    const handleFavChange = event => {
        // onFavCountrySelected(selectedCountryId);
        console.log(event);
       
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
  

<button onClick={handleFavChange}>Favourite</button>
</>

  )
}

export default CountrySelector;