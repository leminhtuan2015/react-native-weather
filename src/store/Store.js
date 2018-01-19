import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'

import WeatherReducer from '../reducers/WeatherReducer'
import NavigatorReducer from '../reducers/NavigatorReducer'

import rootSaga from '../saga/Saga'

const reducers = combineReducers({
  weatherState: WeatherReducer,  // WeatherReducer is manage weatherState data object
  nav: NavigatorReducer,
});

const sagaMiddleware = createSagaMiddleware()

let Store = createStore(reducers, applyMiddleware(sagaMiddleware))

console.log("Store state: " + JSON.stringify(Store.getState()))

sagaMiddleware.run(rootSaga)


export default Store;
