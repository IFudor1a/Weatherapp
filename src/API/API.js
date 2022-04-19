export default class WeatherAPI {
    static KEY = '162fab1de89a53329477e7fe59bc88f9'
    static async Current (city)  {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.KEY}`).catch(Error => console.log(Error))
        return response.json()

}
    static async WeatherByGeo (lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.KEY}`)
            .catch(Error => {
            console.log(Error)
        })
        return response.json()
    }
    static async ForCastFiveDays(city) {
        const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.KEY}`).then(data => {return data.json()}).catch(Error => console.log(Error))
   return response.json()
    }
}