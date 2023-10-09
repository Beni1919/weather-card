import WeatherCard from "./logics/card_object";
import { useState,useEffect,useContext } from "react";
import DisplayIcon from "./display_weather_icon";
import { CityToFindContext} from "../App";
import { FirstLoadContext } from "../App";
import { CardDataContext } from "../App";
import { DeviceContext } from "../App";
import './weather_card.css'
import DisplayCity from "./display_city";
import DisplayCountry from "./display_coiuntry";
import DisplayTemp from "./display_temp";
import WeatherDesc from "./display_weather_code";
import night from './pics/night-sky.jpg';
import day from './pics/day-sky.jpg'

export default function NewCard(props){
    const [city,setCity] = useContext(CityToFindContext)
    const [firstLoad, setFirstLoad] = useContext(FirstLoadContext)
    const [cardDdata, setCardData] = useContext(CardDataContext)
    const [device, setDevice] = useContext(DeviceContext)
    const [backgroundImage, setBackgroundImage] = useState(null)

    useEffect(()=>{
        async function getCityData(){
        const weatherCard = new WeatherCard(city)
        await weatherCard.info
            setCardData(weatherCard)
            //console.log(weatherCard)
        }
        if (city != null){
           getCityData() 
        }
    },[city])

    useEffect(()=>{
        if(cardDdata.localtime>=cardDdata.sunrise && cardDdata.localtime<=cardDdata.sunset && device === 'desktop'){
            setBackgroundImage(day)
        }else{
            if(device === 'desktop'){
               setBackgroundImage(night) 
            }
        }
    },[cardDdata])
    
    return (
        <div className="current-weather" style={{backgroundImage: `url(${backgroundImage})`}}>
            <DisplayCity city={cardDdata.city} />
            <DisplayCountry country={cardDdata.country}/>
            <DisplayIcon weatherdesc={cardDdata.weatherdesc} time={cardDdata.localtime} city={cardDdata.city}/>
            <DisplayTemp temp={cardDdata.temperature}/>
            <WeatherDesc weatherdesc={cardDdata.weatherdesc}/>
        </div>
    )
}

