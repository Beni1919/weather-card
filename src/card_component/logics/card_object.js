
export default class WeatherCard {

    constructor(city){
        this.city = city
        this.info = this.fetchCityData()
    }

    async fetchCityData(){

        await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+this.city+"&count=3")
        .then(response => response.json())
        .then((cityData) => {
            this.country = cityData.results[0].country
            this.city = (cityData.results[0].name)
            this.latitude = (cityData.results[0].latitude)
            this.longitude = (cityData.results[0].longitude)
            //console.log(cityData)
            })
        
        await fetch("https://api.open-meteo.com/v1/forecast?latitude="+this.latitude+"&longitude="+this.longitude+"&hourly=temperature_2m&daily=weathercode,temperature_2m_max,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin")

        .then(response => response.json())
        .then((weatherData) => {
            //console.log(weatherData)
            this.temperature = (weatherData.current_weather.temperature)
            this.weatherdesc = (weatherData.current_weather.weathercode)
            this.tempForecastSevenDays = (weatherData.daily.temperature_2m_max)
            this.forecastTimeSevenDays = (weatherData.daily.time)
            this.forecasWeatherCodeSevenDays = (weatherData.daily.weathercode)
            this.hourlyForecastTemp = (weatherData.hourly.temperature_2m)
            this.sunrise = (weatherData.daily.sunrise[0].substring(10,16))
            this.sunset = (weatherData.daily.sunset[0].substring(10,16))
            })

        await fetch(`https://api-bdc.net/data/timezone-by-location?latitude="+this.latitude+"&longitude="+this.longitude+"&key=${process.env.REACT_APP_TIMEZONE_API_KEY}`)
        .then(response => response.json())
        .then((timeData) => {
            this.localtime = (timeData.localTime.substring(10,16))
            })
    }
}