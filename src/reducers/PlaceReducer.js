import * as ActionTypes from "../constants/ActionTypes"
import Place from "../models/Place"

let place = new Place()

export const PlaceReducer = (state = place, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.GET_WEATHER_DATA:
    return state
  case ActionTypes.SAVE_WEATHER_DATA:
    return data
  default:
    return state 
  }
}

export default PlaceReducer




