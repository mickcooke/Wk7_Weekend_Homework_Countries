import React from "react";
import FavCountry from "./FavCountry";


const FavCountryList = ({favCountries, clearFavList}) => {


  const favCountryNodes = favCountries.map(country => {
    return(
      <FavCountry country={country}></FavCountry>
    );
  });

  const handleClick = () => {
       
    clearFavList();

}


return (
    <>
    <h4>Favourite Countries</h4>
   {favCountryNodes}
<button onClick={handleClick}>Clear List</button>
  
  
   </>
  )
}


export default FavCountryList;