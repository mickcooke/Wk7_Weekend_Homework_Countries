import React from "react";

const Country = ({country}) => {

    const handleFavCountrySelected = () => {
       
        console.log(country.name.common);

    }
   

    if (!country){
        return null
    }

 

    return (

        <>
        <span><h3>Name: {country.name.common}</h3></span>
        <p>{country.flag}</p>
        <button onClick={handleFavCountrySelected}>Favourite</button>
        </>
    )
  
}


export default Country;