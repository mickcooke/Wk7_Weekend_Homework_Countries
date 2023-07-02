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
        <span><h3>Name: {country.name.common}</h3></span>
        <p>{country.flag}</p>
        <button onClick={handleClick}>Favourite</button>
        </>
    )
  
}


export default Country;