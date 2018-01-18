import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* hello() {
  yield delay(1000)
  console.log('HELLO')
  //yield put({type: 'INCREMENT'})
}

export function* bye(){
  console.log("BYE")
}

export function* filterUser(action){
  console.log("FILTER_USER" + JSON.stringify(action))

  var {type, keyword, users} = action

  var data = []    

  if(keyword){
    data = [users[0]] 
  } else {
    data = users 
  }

  return data
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    // REGISTER actions
    // // Wait for (every) SAVE_SCORE action

    yield takeEvery('HELLO', hello)
    yield takeEvery('BYE', bye)
    yield takeEvery('FILTER_USER', filterUser)
}




