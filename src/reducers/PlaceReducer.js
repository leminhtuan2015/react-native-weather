import * as ActionTypes from "../constants/ActionTypes"
import Place from "../models/Place"

let place = new Place()
let places = []

export const PlaceReducer = (state = {place: place, places: places}, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.SAVE_PLACES:
    state.places = data
    return state   
  default:
    return state 
  }
}

export default PlaceReducer




