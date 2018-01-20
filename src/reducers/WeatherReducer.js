import * as ActionTypes from "../constants/ActionTypes"
import Weather from "../models/Weather"


let weather = new Weather() 

export const WeatherReducer = (weatherState = weather, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.GET_WEATHER_DATA:
    return weatherState
  case ActionTypes.SAVE_WEATHER_DATA:
    return data
  default:
    return weatherState 
  }
}

export default WeatherReducer




