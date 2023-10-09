import React from "react";
import { useState,useContext, useEffect } from "react";
import {CardDataContext,DeviceContext} from "../App";
import DisplayDay from "./display_day";
import ForecastWeatherIcon from "./display_forecast_icon";
import DisplayForecastTemp from "./display_forecast_temp";
import './7_forecast.css'
import night from './pics/night-sky.jpg'
import day from './pics/day-sky.jpg'


export default function SevenDays(){

    const [cardDdata, setCardData] = useContext(CardDataContext)
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [device, setDevice] = useContext(DeviceContext)

    useEffect(()=>{
        if(cardDdata.localtime>=cardDdata.sunrise && cardDdata.localtime<=cardDdata.sunset && device === 'desktop'){
            setBackgroundImage(day)
        }else{
            if(device === 'desktop'){
                setBackgroundImage(night) 
             }
        }
    },[cardDdata])

    let forecastCardArr = []

    if(cardDdata.tempForecastSevenDays !=null){
        for(let i=0; i<cardDdata.tempForecastSevenDays.length; i++){
            forecastCardArr.push(
        <div className="forecast-card" key={i} style={{ backgroundImage: `url(${backgroundImage})`, backgroundPositionY: '750px'}}>
            <DisplayDay date={cardDdata.forecastTimeSevenDays[i]}/>
            <ForecastWeatherIcon code={cardDdata.forecasWeatherCodeSevenDays[i]}/>
            <DisplayForecastTemp temp={cardDdata.tempForecastSevenDays[i]}/>
        </div>
        )}
        return(
            <div className="forecast-container">{forecastCardArr}</div>
        )
    }else{
        return(
            <p>Loading</p>
        )
    }
    

 
}