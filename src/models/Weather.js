let sample = {"coord":{"lon":-122.08,"lat":37.39},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":277.14,"pressure":1025,"humidity":86,"temp_min":275.15,"temp_max":279.15},"visibility":16093,"wind":{"speed":1.67,"deg":53.0005},"clouds":{"all":1},"dt":1485788160,"sys":{"type":1,"id":471,"message":0.0116,"country":"US","sunrise":1485789140,"sunset":1485826300},"id":5375480,"name":"Mountain View","cod":200}


class Weather {
  
  static URL = "http://api.openweathermap.org/data/2.5/weather?q=Hanoi,vn&appid=1f484364cbdbb2dc68c73f079df0a4c7"

  constructor() {
    this.city = "--"
    this.description = "--"
    this.temp = "--"
    this.tempMax = "--"
    this.tempMin = "--"
    this.sunrise = "--"
    this.sunset = "--"
    this.wind = "__"
    this.visibility = "--"
    this.pressure = "--"
    this.humidity = "--"
  }

  toObject(jsonData) {
    console.log("toObject " + jsonData["name"])
    this.city = jsonData["name"]  
  }
}

export default Weather
