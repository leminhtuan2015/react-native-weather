import AsyncStorage from "react-native"

class Place {
  static ALL_PLACE = "ALL_PLACE"

  constructor(id, city, countryCode, temp){
    if(id){
      this.id = id
      this.city = city
      this.countryCode = countryCode
      this.temp = temp
    } else {
      this.init()
    }
  }

  init(){
    this.id = 0
    this.city = "--"
    this.countryCode = ""
    this.temp = "--"
  }

  static all = () => {
    
    let place1 = new Place(1, "Hanoi", "vn", "--")
    let place2 = new Place(2, "Danang", "vn", "--")
    let place3 = new Place(3, "London", "uk", "--")
    let place4 = new Place(4, "New York", "us", "--")
    let place5 = new Place(5, "Tokyo", "jp", "--")

    let places = [place1, place2, place3, place4, place5] 
    
    return places
  }

 static async allFromStorage() {
    console.log("123 ccccc")
//    await AsyncStorage.setItem('key', 'I like to save it.');
//      let key = await AsyncStorage.getItem('key')
      console.log("key : " + key)

  AsyncStorage.getItem('key')
    .then((response) => {
      return JSON.parse(response); 
    }) 
    .then((parsedResponse) => { 
      console.log("xxccdd")
    });

  }

  static todayWeather = () => {
    return Place.all() 
  }
}

export default Place





