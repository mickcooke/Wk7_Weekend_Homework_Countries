import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = event => {
        const selectedCountryId = event.target.value
        onCountrySelected(event.target.value);
    }

    // const handleFavChange = event => {
    //     const id = 
    //     onFavCountrySelected(id)
    // }

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

//<button onChange={handleFavChange}>Favourite</button>

  )
}

export default CountrySelector;