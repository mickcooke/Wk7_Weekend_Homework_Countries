import React from "react";

const Country = ({country, onFavCountrySelected}) => {

    const handleClick = () => {
       
        onFavCountrySelected(country.name.common);

    }
   

    if (!country){
        return null
    }

 

    return (

        <>
        <span><p>Name: {country.name.common}</p></span>
        <p>Population: {country.population}</p>
        <p>{country.flag}</p>
        <button onClick={handleClick}>Favourite</button>
        </>
    )
  
}


export default Country;