import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, onCountrySelected, onFavCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value);
    }

    const handleFavChange = (event) => {
        event.preventDefault();
        onFavCountrySelected();
        // console.log(selectedCountryCCA3Code);
       
    }


  return (
    <>
    <form onSubmit={handleFavChange}>
    <select onChange={handleChange}>
        {countries.map(country => {
            return (
                <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
            

            )
        })
    }
   </select>
            <input
                type="submit"
                value="Post"
            />

   </form>
</>

  )
}

export default CountrySelector;