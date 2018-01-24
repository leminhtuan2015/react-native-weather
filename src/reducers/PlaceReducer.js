import * as ActionTypes from "../constants/ActionTypes"
import Place from "../models/Place"

import cities from '../resources/jsons/city.list.json';

let place = new Place()
let places = []

export const PlaceReducer = (state = {
  place: place, 
  places: places, 
  cities: cities, 
  isLoading: true}, action) => {

  const {type, data} = action 

  switch (type) {
  case ActionTypes.SAVE_PLACES:
    //state.places = data  // NOT WORK
    state = {place: state.place, places: data, cities: state.cities, isLoading: false}
    return state   
  case ActionTypes.SET_PLACE_LOADING:
    state = {place: state.place, places: state.places, cities: state.cities, isLoading: true}
    return state   
  case ActionTypes.ADD_PLACE:
    let city = data.city
    let countryCode = data.countryCode
    let newPlace = new Place(1, city, countryCode, "--")
    state.places.push(newPlace)
    Place.save(JSON.stringify(state.places))
    state = {place: state.place, places: state.places, cities: state.cities, isLoading: false}
    return state  
  case ActionTypes.FILTER_PLACE:
    console.log("filter place: " + data)
    let citiesFilter = filter(data)
    state = {place: state.place, places: state.places, cities: citiesFilter, isLoading: false}
    return state
  default:
    return state 
  }
}

  function filter(keyword){
    var data = []    

    if(keyword){
      var dataFilter = cities.filter(function (city) {
        return city.name.toLowerCase() == keyword.toLowerCase() 
          || city.name.toLowerCase().includes(keyword.toLowerCase());
      })

      data = dataFilter
    } else {
      data = cities    
    }

    return data
  }



export default PlaceReducer




