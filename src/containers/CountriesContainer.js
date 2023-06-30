import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import Country from "../components/Country";
import FavCountryList from "../components/FavCountryList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('');
    const [worldPopulation, setWorldPopulation] = useState(0);
    const [selectedFavCountryCCA3, setSelectedFavCountryCCA3] = useState('');
    const [favCountryList, setFavCountryList] = useState([]);

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
    getWorldPopulation();
},[])

useEffect(() => {
  getCountries();
},[])

const handleCountrySelected = cca3 => {
    setSelectedCountryCCA3Code(cca3);
    console.log(selectedCountryCCA3Code);
}

const handleFavCountrySelected = () => {
    setSelectedFavCountryCCA3(selectedCountryCCA3Code);
    console.log(selectedFavCountryCCA3);
}

const selectedFavCountry = countries.find(
    country => country.cca3 === selectedFavCountryCCA3
)

const selectedCountry = countries.find(
    country => country.cca3 === selectedCountryCCA3Code
)

  return (
<>
<h2>Population of the world is {worldPopulation}</h2>
<h3>Choose your country:</h3>
<CountrySelector countries={countries} onCountrySelected={handleCountrySelected}  onFavCountrySelected={handleFavCountrySelected}/>
<Country country={selectedCountry}/>
<FavCountryList countries={favCountryList} />
</>

  )
}

export default CountriesContainer;

