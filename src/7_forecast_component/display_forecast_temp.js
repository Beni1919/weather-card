export default function DisplayForecastTemp(props){
    return(
        <>
        <span className="sevendays-temperature">{Math.round(props.temp)}</span>
        <span className="sevendays-celsius-sign">&#9675;</span>
        </>
    )
}