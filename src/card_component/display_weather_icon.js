import sun from './pics/sun.svg'
import moon from './pics/moon.svg'
import sun_cloud from './pics/sun-cloud.svg'
import moon_cloud from './pics/moon-cloud.svg'
import cloudy from './pics/cloudy.svg'
import foggy from './pics/foggy.svg'
import drizzle from './pics/drizzle.svg'
import rain from './pics/rain.svg'
import rain_moon from './pics/rain-moon.svg'
import snow from './pics/snow.svg'
import thunderstorm from './pics/thunderstorm.svg'

import React, { useState,useEffect,useContext } from 'react'
import { CardDataContext } from '../App'

const weatherObjects = [

    {code: 0, description: 'Clear sky', icon_day: sun, icon_night: moon},
    {code: 1, description: 'Mainly clear', icon_day: sun, icon_night: moon},
    {code: 2, description: 'Partly cloudy', icon_day: sun_cloud, icon_night: moon_cloud},
    {code: 3, description: 'Overcast', icon_day: cloudy, icon_night: cloudy},
    {code: 45, description: 'Fog', icon_day: foggy, icon_night: foggy},
    {code: 48, description: 'Rime fog', icon_day: foggy, icon_night: foggy},
    {code: 51, description: 'Light drizzle', icon_day: drizzle, icon_night: drizzle},
    {code: 53, description: 'Moderate drizzle', icon_day: drizzle, icon_night: drizzle},
    {code: 55, description: 'Dense drizzle', icon_day: drizzle, icon_night: drizzle},
    {code: 56, description: 'Freezing Drizzle', icon_day: drizzle, icon_night: drizzle},
    {code: 57, description: 'Freezing Drizzle', icon_day: drizzle, icon_night: drizzle},
    {code: 61, description: 'Slight rain', icon_day: rain, icon_night: rain_moon},
    {code: 63, description: 'Moderate Rain', icon_day: rain, icon_night: rain_moon},
    {code: 65, description: 'Heavy rain', icon_day: rain, icon_night: rain_moon},
    {code: 71, description: 'Slight Snow fall', icon_day: snow, icon_night: snow},
    {code: 73, description: 'Moderate Snow fall', icon_day: snow, icon_night: snow},
    {code: 75, description: 'Heavy Snow fall', icon_day: snow, icon_night: snow},
    {code: 77, description: 'Snow grains', icon_day: snow, icon_night: snow},
    {code: 80, description: 'Slight rain shower', icon_day: rain, icon_night: rain_moon},
    {code: 81, description: 'Moderate rain shower', icon_day: rain, icon_night: rain_moon},
    {code: 82, description: 'Violent rain shower', icon_day: rain, icon_night: rain_moon},
    {code: 85, description: 'Sight snow shower', icon_day: snow, icon_night: snow},
    {code: 86, description: 'Heavy snow shower', icon_day: snow, icon_night: snow},
    {code: 95, description: 'Thunderstorm', icon_day: thunderstorm, icon_night: thunderstorm},
    {code: 96, description: 'Thunderstorm and hail', icon_day: thunderstorm, icon_night: thunderstorm},
    {code: 99, description: 'Thunderstorm and heavy hail', icon_day: thunderstorm, icon_night: thunderstorm}
]

export default function DisplayIcon(props){

    const [weatherIcon, setWeatherIcon] = useState('')
    const [cardDdata, setCardData] = useContext(CardDataContext)

    useEffect(()=>{
        for(let i=0; i<weatherObjects.length; i++){
        if(weatherObjects[i].code === props.weatherdesc){
            if(cardDdata.localtime>=cardDdata.sunrise && cardDdata.localtime<=cardDdata.sunset) {
                setWeatherIcon(weatherObjects[i].icon_day)
            } else {
                setWeatherIcon(weatherObjects[i].icon_night)
            }
        }
    }
    },[props.city])
    

    return(
        <div className="weather-icon"><img src={weatherIcon} alt={weatherIcon} /></div>
    )
}