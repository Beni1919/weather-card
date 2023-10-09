import React from "react"
import { useState, useEffect } from "react"

const weatherObjects = [

    {code: 0, description: 'Clear sky'},
    {code: 1, description: 'Mainly clear'},
    {code: 2, description: 'Partly cloudy'},
    {code: 3, description: 'Overcast'},
    {code: 45, description: 'Fog'},
    {code: 48, description: 'Rime fog'},
    {code: 51, description: 'Light drizzle'},
    {code: 53, description: 'Moderate drizzle'},
    {code: 55, description: 'Dense drizzle'},
    {code: 56, description: 'Freezing Drizzle'},
    {code: 57, description: 'Freezing Drizzle'},
    {code: 61, description: 'Slight rain'},
    {code: 63, description: 'Moderate Rain'},
    {code: 65, description: 'Heavy rain'},
    {code: 71, description: 'Slight Snow fall'},
    {code: 73, description: 'Moderate Snow fall'},
    {code: 75, description: 'Heavy Snow fall'},
    {code: 77, description: 'Snow grains'},
    {code: 80, description: 'Slight rain shower'},
    {code: 81, description: 'Moderate rain shower'},
    {code: 82, description: 'Violent rain shower'},
    {code: 85, description: 'Sight snow shower'},
    {code: 86, description: 'Heavy snow shower'},
    {code: 95, description: 'Thunderstorm'},
    {code: 96, description: 'Thunderstorm and hail'},
    {code: 99, description: 'Thunderstorm and heavy hail'}
]

export default function WeatherDesc(props){
    const [weatherDesc, setWeatherDesc] = useState('')
    const weatherCode = props.weatherdesc

    useEffect(()=>{
        for(let i=0; i<weatherObjects.length; i++){
        if(weatherObjects[i].code === props.weatherdesc){
                setWeatherDesc(weatherObjects[i].description)
        }
    }
    },)

    return(
        <p>{weatherDesc}</p>
    )
}