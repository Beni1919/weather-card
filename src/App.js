import React from "react";
import { useContext,createContext,useState, useEffect } from "react";
import NewCard from "./card_component/new_card_object";
import SearchBar from "./search_component/search";
import BrowserLocation from "./card_component/logics/browser_location";
import SevenDays from "./7_forecast_component/7_forecast";
import DisplayMap from "./map_component/display_map";
import DisplayHourlyForecast from "./hourly_forecast _component/display_hourly_forecast";
import DeviceCheck from "./device_check";
import './app.css'
import mobile_day from './app_pics/day-sky-big.jpg'
import mobile_night from './app_pics/nightsky.jpg'

export const CityToFindContext = createContext()
export const FirstLoadContext = createContext()
export const CardDataContext = createContext()
export const DeviceContext = createContext()

function App() {
  const [city, setCity] = useState(null)
  const [firstLoad, setFirstLoad] = useState(true)
  const [cardDdata, setCardData] = useState('')
  const [device, setDevice] = useState('')
  const [appBackground, setAppBackground] = useState(null)

  useEffect(()=>{
    if (cardDdata.localtime>=cardDdata.sunrise && cardDdata.localtime<=cardDdata.sunset && device === 'mobile') {
    setAppBackground(mobile_day)
  }else{
    if(device === 'mobile'){
      setAppBackground(mobile_night) 
   }
  }
  })
  

  return (
    <div className="app-container" style={{backgroundImage: `url(${appBackground})`}}>
    <DeviceContext.Provider value={[device, setDevice]}>
    <CardDataContext.Provider value={[cardDdata, setCardData]}>
    <FirstLoadContext.Provider value={[firstLoad,setFirstLoad]}>
    <CityToFindContext.Provider value={[city,setCity]}>
      <DeviceCheck/>
      <BrowserLocation/>
      <SearchBar/>
      <NewCard/>
      <SevenDays/>
      <DisplayHourlyForecast/>
      <DisplayMap/>
    </CityToFindContext.Provider>
    </FirstLoadContext.Provider>
    </CardDataContext.Provider>
    </DeviceContext.Provider>
    </div>
  );
}

export default App;
