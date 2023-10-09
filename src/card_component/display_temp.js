import React from "react";

export default function DisplayTemp(props){
    return(
        <>
        <span className="temperature">{Math.round(props.temp)}</span>
        <span className="celsius-sign">&#9675;</span>
        </>
    )
}