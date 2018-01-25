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
    return savePlace(state, data)   
  case ActionTypes.SET_PLACE_LOADING:
    return setPlaceLoading(state)  
  case ActionTypes.ADD_PLACE:
    return addPlace(state, data)  
  case ActionTypes.FILTER_PLACE:
    return filterPlace(state, data)
  case ActionTypes.DELETE_PLACE:
    return deletePlace(state, data)
  default:
    return state 
  }
}

function deletePlace(state, data){
  console.log("place reducer - delete place: " + data)

  let places = state.places

  for(i = 0; i < places.length; i++){
    let place = places[i]
    
    if(place.id == data){
      let index = places.indexOf(place)  
      console.log("delete at index : " + index)
      places.splice(index, 1);
    }
  }
  
  state = {place: state.place, places: places, cities: state.cities, isLoading: false}
  return state
}

function setPlaceLoading(state){
  state = {place: state.place, places: state.places, cities: state.cities, isLoading: true}
  return state
}

function savePlace(state, data){
  //state.places = data  // NOT WORK
  console.log("place reducer - save place: " + data)
  state = {place: state.place, places: data, cities: state.cities, isLoading: false}
 
  return state
}

function addPlace(state, data){
  console.log("place reducer - add place: " + data)
  let city = data.city
  let countryCode = data.countryCode
  let newPlace = new Place("", city, countryCode, "--")
  state.places.push(newPlace)
  Place.save(JSON.stringify(state.places))
  state = {place: state.place, places: state.places, cities: state.cities, isLoading: false}
  return state 
}

function filterPlace(state, keyword){
	console.log("place reducer - add place: " + keyword)
	let citiesFilter = filter(keyword)
	state = {place: state.place, places: state.places, cities: citiesFilter, isLoading: false}
  
  return state
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




