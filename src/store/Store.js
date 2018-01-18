import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'

import HomeReducer from '../reducers/HomeReducer'
import DetailReducer from '../reducers/DetailReducer'
import NavigatorReducer from '../reducers/NavigatorReducer'

import rootSaga from '../sagas/Sagas'

const reducers = combineReducers({
 homeViewState: HomeReducer,
 detailViewState: DetailReducer,
 nav: NavigatorReducer,
});

const sagaMiddleware = createSagaMiddleware()

let Store = createStore(reducers, applyMiddleware(sagaMiddleware))

console.log("Store state: " + JSON.stringify(Store.getState()))

sagaMiddleware.run(rootSaga)


export default Store;
