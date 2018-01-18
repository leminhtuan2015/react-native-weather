import * as ActionTypes from "../constants/ActionTypes"

function setDetailData(stateObject, data){
  stateObject.data = data

  console.log("state detail data:" + JSON.stringify(stateObject))
  
  return stateObject
}

export const DetailReducer = (detailViewState = {number: 0}, action) => {
  const {type, data} = action 

  switch (type) {
  case ActionTypes.SET_DETAIL_DATA:
    return setDetailData(detailViewState, data) 
  case ActionTypes.UPDATE_DETAIL_DATA:
    return setDetailData(detailViewState, data)
  default:
    return detailViewState 
  }
}

export default DetailReducer
