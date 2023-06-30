import React from "react";

const Country = ({country}) => {

    if (!country){
        return null
    }

    return (

        <>
        <span><h3>Name: {country.name.common}</h3></span>
        <span>{country.flag}</span>
        </>
    )
  
}


export default Country;