import React, { useState } from "react"
import { useContext, useEffect } from "react"
import { CardDataContext } from "../App"
import './map.css'

export default function DisplayMap(){
    const [cardDdata, setCardData] = useContext(CardDataContext)
    const [mapImage, setMapImage] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(()=>{

        if(windowWidth>767) {
            setMapImage(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${cardDdata.longitude},${cardDdata.latitude},8,0/725x230?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`)
        }else if(windowWidth<767){
            setMapImage(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${cardDdata.longitude},${cardDdata.latitude},12,0/767x500?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`)
        }
    },[windowWidth,cardDdata])

    function handleWindowChange(){
        setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', function(){setTimeout(handleWindowChange,2000)})

    return(
        <img className="map-img" src={mapImage}></img>
    )
}