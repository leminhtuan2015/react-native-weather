export function log(message){
  console.log("Logger : " + message)
}

export function objectToJson(object){
  let json = JSON.stringify(object)

  return json
}

