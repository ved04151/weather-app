import React from 'react'
import searchIcon from '../assets/search.png'
import { useState } from 'react';
import Report from './Report';


const Search = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState();
  const [weatherData, setWeatherData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query === "")
      return;
    else 
      fetchSearchWeatherInfo(query);
  }

  async function fetchSearchWeatherInfo(city) {
    try{
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    }
    catch(err) {

    }
    
  }

  return (
    <div className=' mt-4'>
      <form onSubmit={handleSubmit} className='w-full flex gap-4 justify-center items-center'>
        <input
          type = 'text'
          placeholder='Search for City...'
          value={query}
          onChange={(e) => setQuery(e.target.value) }
          className=' bg-slate-400  w-full h-10 rounded-lg px-4 text-white placeholder:text-white'
        />
        <button type='submit' className=' bg-[#3F72AF] rounded-full w-12 h-10 flex justify-center items-center'>
          <img src={searchIcon} width={20} height={20} loading='lazy' alt='search'/>
        </button>
      </form>
      {
        weatherData && 
         <Report weatherData={weatherData}/>
      }
    </div>
  )
}

export default Search