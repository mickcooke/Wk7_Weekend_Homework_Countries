import React from "react";

const FavCountry = ({country}) => {

    if (!country){
        return null
    }

    return (

        <>
        <p>{country}</p>
        </>
    )
  
}


export default FavCountry;