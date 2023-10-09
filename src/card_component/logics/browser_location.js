
import { useContext} from "react";
import {useEffect} from "react"
import { CityToFindContext } from "../../App"
import { FirstLoadContext } from "../../App";

export default function BrowserLocation(){
    const [city, setCity] = useContext(CityToFindContext)
    const [firstLoad, setFirstLoad] = useContext(FirstLoadContext)

    // Böngésző helyzetének meghatározása: 1.
    useEffect(()=>{
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getBrowserPosition);
    } else { 
        console.log( "Geolocation is not supported by this browser.");
    }

    function getBrowserPosition(position) {
        const fetchArea = async () => {
        const areaResult = await fetch("https://api-bdc.net/data/reverse-geocode?latitude="+position.coords.latitude+"&longitude="+position.coords.longitude+"&localityLanguage=en&key=bdc_dcba5a999e4c42498a29262012f82e42")
        areaResult.json()
        .then(json => {
        //console.log(json)
        setCity(json.city)
        })
        }
        if (firstLoad===true){
          fetchArea()  
        }
        }}, [])
}