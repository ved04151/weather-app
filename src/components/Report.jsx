import React from 'react'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'
import cloudIcon from '../assets/cloud.png'
// import {WeatherData} from './WeatherData'
import NotFound from '../assets/not-found.png'

const Report = ({weatherData}) => {

    // const API_KEY = process.env.REACT_APP_API_KEY;

    // console.log("API",weatherData)
    

  return (
    <>
        {
        weatherData?.cod == "404" ?
                 (
                  <div className='flex items-center justify-center mt-4'>
                    <img src={NotFound} width={400}/>
                  </div>
                 ) :
                 (
                    <div>
                        <div className='flex flex-col items-center text-4xl mt-4 text-center mb-4'>
                            <div className='flex gap-4 items-center'>
                                <h1>{weatherData?.name}</h1>
                                <img src={`https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`} alt='Country flag' className=' w-8 h-7'/>
                            </div>
                            
                            <p className='my-4 text-3xl'>{weatherData?.weather?.[0]?.description}</p>
                            
                            <img src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`} alt='Weather Icon' width={100}/>
                            
                            <p className='my-4 font-bold text-5xl'>{weatherData?.main?.temp} °C</p>

                            <div className='flex gap-6 mt-4 flex-wrap items-center justify-center'>
                                <div className=' bg-slate-400 py-4 px-8 flex flex-col justify-center items-center rounded-lg w-[210px] text-xl'>
                                    <img src={windIcon} alt='WindIcon' width={50}/>
                                    <p className=' font-semibold'>WINDSPEED</p>
                                    <p>{weatherData?.wind?.speed} m/s</p>
                                </div>
                                <div className=' bg-slate-400 py-4 px-8 flex flex-col justify-center items-center rounded-lg w-[210px]  text-xl '>
                                    <img src={humidityIcon} alt='Humidity Icon' width={50}/>
                                    <p className=' font-semibold'>HUMIDITY</p>
                                    <p>{weatherData?.main?.humidity} %</p>
                                </div>
                                <div className=' bg-slate-400 py-4 px-8 flex flex-col justify-center items-center rounded-lg w-[210px]  text-xl'>
                                    <img src={cloudIcon} alt='Cloud Icon' width={50}/>
                                    <p className=' font-semibold'>CLOUDS</p>
                                    <p>{weatherData?.clouds?.all} %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
    }
    </>
    
    
  )
}

export default Report