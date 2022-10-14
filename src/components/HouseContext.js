import React, { createContext, useState, useEffect } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [date,setDate]=useState('Select Move-In Date (any)')
  useEffect(() => {
 
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];


    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {

    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

 
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
 
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };


    const minPrice = parseInt(price.split(' ')[0]);

    const maxPrice = parseInt(price.split(' ')[2]);
    const start_date=date.split(' ')[0];
    const end_date=date.split(' ')[2];
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseDate=house.move_in_date;
  
      if (
        house.country === country &&
        house.type === property &&
        (houseDate===start_date || houseDate===end_date)
        &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
     
   
      if (isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date)) {
        return house;
      }
  
      if (!isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price) && isDefault(date)) {
        return house.type === property;
      }
  
      if (!isDefault(price) && isDefault(country) && isDefault(property) &&isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          console.log(date)
          return house;
        }
      }
      if(!isDefault(date) && isDefault(country) && isDefault(property) &&isDefault(price)){
        if(houseDate===start_date || houseDate===end_date){
         
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price) &&isDefault(date)) {
        return house.country === country && house.type === property;
      }
    
      if (!isDefault(country) && isDefault(property) && !isDefault(price) &&isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price) &&!isDefault(date)) {
        if (houseDate === start_date || houseDate === end_date) {
          return house.country === country;
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price) &&isDefault(date) ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      if (isDefault(country) && !isDefault(property) && isDefault(price) && !isDefault(date) ) {
        if (houseDate=== start_date || houseDate ===end_date) {
          
          return house.type === property;
        }
      }
      if(!isDefault(date) && isDefault(country) && isDefault(property) &&!isDefault(price)){
        if(houseDate===start_date || houseDate===end_date){
         if(housePrice >= minPrice && housePrice <= maxPrice)
         return house;
        }
      }

    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        date,
        setDate,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
