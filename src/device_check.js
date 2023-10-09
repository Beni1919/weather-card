import React, { useEffect } from "react";
import { useContext,createContext,useState } from "react";
import { DeviceContext } from "./App";

export default function DeviceCheck(){

    const [device, setDevice] = useContext(DeviceContext)

    let userAgent = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(userAgent);
      
    useEffect(()=>{
         if (isMobileDevice) {
         setDevice('mobile')
         //console.log('Its a Mobile Device');
      } else {
         setDevice('desktop')
         //console.log('Its a Desktop');
      }
    },[])
}