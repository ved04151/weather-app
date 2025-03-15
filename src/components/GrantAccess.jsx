import React, { useState } from 'react'
import locImg from '../assets/location.png';
import Report from './Report';
import { useEffect } from 'react';


const GrantAccess = () => {


    const API_KEY = process.env.REACT_APP_API_KEY;
    const [access, setAccess] = useState(true);
    const [weatherData, setWeatherData] = useState(null); 

    useEffect(()=> {
        getfromSessionStorage();
    },[])
    
    function getfromSessionStorage() {
        const localCoordinates = sessionStorage.getItem("location");
        console.log("access:", access);
        if(!localCoordinates) {
            setAccess(false);
            // grantAccessContainer.classList.add("active");
            
        }
        else {
            setAccess(true);
            const coordinates = JSON.parse(localCoordinates);
            console.log("Hello vedu",coordinates);
            fetchUserWeatherInfo(coordinates);
        }
    }

    async function fetchUserWeatherInfo(coordinates) {
        
        const {lat,lon} = coordinates;
        console.log("latitude: " + lat);
        console.log("longitude: " + lon);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            )
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
        }
        catch(err) {

        }
    }

    function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            setAccess(true);
            // getfromSessionStorage();
        }
        else {
            getfromSessionStorage();
        }
    }

    function showPosition (position) {
        const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        }
        sessionStorage.setItem('location',JSON.stringify(userCoordinates))
        fetchUserWeatherInfo(userCoordinates)
        // console.log(sessionStorage.getItem('location'));
        // console.log("access:", access);
    }

    const localCoordinates = sessionStorage.getItem("location");
    const coordinates = JSON.parse(localCoordinates);
    console.log("local coordinates:", localCoordinates);
    
  return (
    <>

        {
            access ?
            (<Report weatherData = {weatherData}/>) :
            (
                <div className=' flex flex-col items-center justify-center gap-5'>
            <img src= {locImg} width={80}/>
            <p className=' font-semibold text-3xl text-center'>Grant Location Access</p>
            <p className='text-lg text-center'>Allow Access to get Weather Information</p>
            <button 
            onClick={getLocation}
            className=' bg-[#3F72AF] py-2 px-4 text-lg rounded-md'>
                GRANT-ACCESS
            </button>
        </div>
            )
        }
        
    </>
  ) 
}

export default GrantAccess