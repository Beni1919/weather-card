import React from 'react'
import { useContext, useState, useEffect } from 'react'
import {CardDataContext,DeviceContext } from '../App'
import './hourly_forecast.css'
import './roller.css'
import night from './pics/night-sky.jpg'
import day from './pics/day-sky.jpg'

export default function DisplayHourlyForecast(){

    const [cardDdata, setCardData] = useContext(CardDataContext)
    const [device, setDevice] = useContext(DeviceContext)
    const [backgroundImage, setBackgroundImage] = useState(null)

    let forecastHoursArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,]
    let chartArray = []

    useEffect(()=>{
        if(cardDdata.localtime>=cardDdata.sunrise && cardDdata.localtime<=cardDdata.sunset && device === 'desktop'){
            setBackgroundImage(day)
        }else{
            if(device === 'desktop'){
                setBackgroundImage(night) 
             }
        }
    },[cardDdata])

    if(cardDdata.hourlyForecastTemp != null){
    for(let i=0; i<forecastHoursArray.length; i++){

        chartArray.push(
        <div key={i} className='chart-container'>
        <div className='hourly-temp'>{Math.round(cardDdata.hourlyForecastTemp[i])}</div>
        <div className='hourly-celsius-sign'>&#9675;</div>
        <div className='chart-bar' style={{height:cardDdata.hourlyForecastTemp[i]*2.2,}}></div>
        <div className = 'forecast-hours'>{forecastHoursArray[i]}h</div>
        </div>
        )
    }

    return(
        <div className="hourly-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPositionY: '650px', backgroundSize: '100%',}}>
            <div className='today-label-container'><h3 className='today-label'>Hourly forecast</h3></div>
            {chartArray}
        </div> 
    )
    }else{
        return(
            <p>Loading...</p>
        )
    }
}