import React from "react";

const FavCountry = ({country}) => {

    if (!country){
        return null
    }

    return (

        <>
        <h4>{country}</h4>
        </>
    )
  
}


export default FavCountry;