import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as ActionTypes from "../constants/ActionTypes"
import Weather from "../models/Weather"
import Place from "../models/Place"

export function* hello() {
  yield delay(1000)
  console.log('HELLO')
  //yield put({type: 'INCREMENT'})
}

export function* bye(){
  console.log("BYE")
  yield
  console.log("bye 123")
}

export function* getWeatherData(action){
  let {data} = action

  console.log("Get Weather Data :" + JSON.stringify(data))
  let weather = new Weather()
  let response = yield call(weather.today, data.city, data.countryCode)
  console.log("Get Weather Data ::: " + JSON.stringify(response))
  yield put({ type: ActionTypes.SAVE_WEATHER_DATA, data: response })
}

export function* getPlaces(){
  console.log("Get Places")
  let places = yield call(Place.allFromStorage)
  //let places = yield call(Place.all)
  let weather = new Weather()

  for(i = 0; i < places.length; i++){
    let place = places[i]
    weather = yield call(weather.today, place.city, place.countryCode)
   
    place.temp = weather.temp 
    console.log("Temp 123: " + weather.temp)
  }

//  yield delay(5000)

  yield put({ type: ActionTypes.SAVE_PLACES, data: places })
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    // REGISTER actions
  yield takeEvery('HELLO', hello)
  yield takeEvery('BYE', bye)

  yield takeEvery(ActionTypes.GET_WEATHER_DATA, getWeatherData)
  yield takeEvery(ActionTypes.GET_PLACES, getPlaces)
}




