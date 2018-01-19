import * as ActionTypes from "../constants/ActionTypes"

function setDetailData(state, data){
  state.data = data

  console.log("state detail data:" + JSON.stringify(state))
  
  return state
}

export const WeatherReducer = (weatherState = {number: 0}, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.SET_DETAIL_DATA:
    return setDetailData(weatherState, data) 
  case ActionTypes.UPDATE_DETAIL_DATA:
    return setDetailData(weatherState, data)
  default:
    return weatherState 
  }
}

export default WeatherReducer
