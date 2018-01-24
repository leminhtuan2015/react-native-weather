import * as ActionTypes from "../constants/ActionTypes"
import Place from "../models/Place"

let place = new Place()
let places = []

export const PlaceReducer = (state = {place: place, places: places, isLoading: true}, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.SAVE_PLACES:
    //state.places = data  // NOT WORK
    state = {place: state.place, places: data, isLoading: false}
    return state   
  case ActionTypes.SET_PLACE_LOADING:
    state = {place: state.place, places: state.places, isLoading: true}
    return state   
  case ActionTypes.ADD_PLACE:
    let city = data.city
    let countryCode = data.countryCode
    let newPlace = new Place(1, city, countryCode, "--")
    state.places.push(newPlace)
    state = {place: state.place, places: state.places, isLoading: false}
    return state  
  default:
    return state 
  }
}

export default PlaceReducer




