import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './WeatherGet.css'

const WeatherGet = () => { 
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState("New York")
    // const api = process.env.REACT_APP_WEATHER_API_KEY
    const getWeather = async () =>{
        try{
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=98d57c64fd5e404abf354419242210&q=${city}&aqi=no`)
            setWeather(response.data)
            console.log(response.data)
        }catch (error){
            console.error("Error fetching weather data: ", error)
        }
    }
    useEffect(()=>{
        getWeather()
    }, [])
  return (                                                                                                   
    <div className='weather-main'>
        <h1 className='weather-title'>Weather in {weather?.location?.name}</h1>
        <p className='weather-temp'> Temperature : {weather?.current?.temp_c} °C</p>
        <p className='weather-cond'> Condition: {weather?.current?.condition?.text}</p> 
        <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
        />
        <button onClick={getWeather}>Search</button>
    </div>
  )         
}

export default WeatherGet
