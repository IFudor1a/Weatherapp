export default class WeatherAPI {
    static KEY = '162fab1de89a53329477e7fe59bc88f9'

    static async Current(city, unit) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.KEY}&units=${unit}`).catch(Error => console.log(Error))
        return response.json()

    }

    static async WeatherByGeo(lat, lon, unit) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.KEY}&units=${unit}`)
            .catch(Error => {
                console.log(Error)
            })
        return response.json()
    }

    static async DailyForeCast(lat, lon, unit) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${this.KEY}&units=${unit}`)
            .catch(Error => {
                console.log(Error)
            })
        return response.json()
    }
}