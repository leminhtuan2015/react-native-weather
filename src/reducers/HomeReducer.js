import * as ActionTypes from "../constants/ActionTypes"
import * as Utils from "../utils/Utils"

function setHomeData(stateObject){
  Utils.log("Data" + Utils.objectToJson(stateObject))
  stateObject.data = {key: "value"} 
  Utils.log("Data 1" + Utils.objectToJson(stateObject))
  return stateObject
}

export const HomeReducer = (homeViewState = {number: 0}, action) => {
  console.log("---------------------------------------Home Reducer")

  switch (action.type) {
  case ActionTypes.SET_HOME_DATA:
    return setHomeData(homeViewState)
  default:
    return homeViewState
  }
}

export default HomeReducer
