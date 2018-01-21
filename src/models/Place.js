

class Place {
  constructor(id, city, countryCode, temp){
    this.id = id
    this.city = city
    this.countryCode = countryCode
    this.temp = temp
  }

  static all = () => {
  
    let place1 = new Place(1, "Hanoi", "vn", 20)
    let place2 = new Place(2, "Danang", "vn", 20)
    let place3 = new Place(3, "London", "uk", 20)
    let place4 = new Place(4, "New York", "us", 20)
    let place5 = new Place(5, "Tokyo", "jp", 20)

    let places = [place1, place2, place3, place4, place5] 
    
    return places
  }

  weather = () => {
  
  }
}

export default Place





