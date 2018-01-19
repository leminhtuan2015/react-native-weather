import * as ActionTypes from "../constants/ActionTypes"
import Weather from "../models/Weather"

function getWeatherData(weatherState, data){
   
  return fetch(Weather.URL)
    .then((response) => {return response.json()})
    .then((responseJson) => {
      console.log("state of weather:" + JSON.stringify(responseJson))

      let weather = new Weather()
      weather.toObject(responseJson)

      weatherState = weather
      
      console.log("weather now: " + JSON.stringify(weatherState))

      return weatherState
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getWeatherData1(weatherState, data) {
  try {
    let response = await fetch(Weather.URL)
    let responseJson = await response.json();

    let weather = new Weather()
    weather.toObject(responseJson)

    weatherState = weather
      
    console.log("weather now: " + JSON.stringify(weatherState))

    return weatherState
  } catch (error) {
    console.error(error);
  }
}

let weather = new Weather() 

export const WeatherReducer = (weatherState = weather, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.GET_WEATHER_DATA:
    let weather1 = getWeatherData(weatherState, data) 
    console.log("my weather1 :" + JSON.stringify(weather1))
    return weather1
  default:
    return weatherState 
  }
}

export default WeatherReducer




