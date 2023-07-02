import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import Country from "../components/Country";
import FavCountryList from "../components/FavCountryList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('');
    const [worldPopulation, setWorldPopulation] = useState(0);
    const [favCountryList, setFavCountryList] = useState(['']);

const getCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countriesData => setCountries(countriesData));
}

const getWorldPopulation = () => {
  const population = countries.reduce((total, country) => {
    return total += country.population;
  }, 0)
  setWorldPopulation(population);
}



useEffect(() => {
  getCountries();
},[])

useEffect(() => {
    getWorldPopulation();
},[countries])


const handleCountrySelected = cca3 => {
    setSelectedCountryCCA3Code(cca3);
    console.log(selectedCountryCCA3Code);
}

const handleFavouriteCountrySelected = countryName => {
    const updatedFavCountryList = [...favCountryList, countryName];
    setFavCountryList(updatedFavCountryList);
    console.log(favCountryList);

}

const clearFavList = () => {
    setFavCountryList(['']);
}


const selectedCountry = countries.find(
    country => country.cca3 === selectedCountryCCA3Code
)

  return (
<>
<h2>Population of the world is {worldPopulation}</h2>
<h3>Choose your country:</h3>
<CountrySelector countries={countries} onCountrySelected={handleCountrySelected} />

<Country country={selectedCountry} onFavCountrySelected={handleFavouriteCountrySelected} />
<FavCountryList favCountries={favCountryList} clearFavList={clearFavList}/>
</>

  )
}

export default CountriesContainer;

