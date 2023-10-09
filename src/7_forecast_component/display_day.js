export default function DisplayDay(props){

    const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let nameOfDay = ''

    if (new Date(props.date).getDay()>=1 && new Date(props.date).getDay()<=7 ){
        nameOfDay = daysOfWeek[(new Date(props.date).getDay())-1]
    }else{
        nameOfDay = daysOfWeek[(new Date(props.date).getDay())+6]
    }
    return(
        <p className="forecast-day">{nameOfDay}</p>
    )
}