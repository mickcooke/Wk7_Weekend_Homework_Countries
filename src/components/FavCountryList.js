import React from "react";
import FavCountry from "./FavCountry";


const FavCountryList = ({favCountries}) => {

  const favCountryNodes = favCountries.map(country => {
    return(
      <FavCountry country={country}></FavCountry>
    );
  });

return (
    <>
   {favCountryNodes}
  
   </>
  )
}

export default FavCountryList;