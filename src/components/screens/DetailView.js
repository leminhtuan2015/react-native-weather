import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import * as ActionTypes from "../../constants/ActionTypes"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  ImageBackground, 
} from 'react-native';


class DetailView extends Component<{}> {
  state = {}
 
  constructor(props) {
    super(props);
  }

  onPressButton = (place, countryCode, id) => {
    console.log("press: " + id)

    this.props.dispatch({type: ActionTypes.GET_WEATHER_DATA, 
      data: {city: place, countryCode: countryCode}})

      this.props.navigation.goBack()
  }

  editButtonPress = () => {
    console.log("press")
    this.props.navigation.navigate('EditView') 
  }

  itemView = (place, countryCode, temp, id) => {
    return (
      <TouchableHighlight 
        onPress={() => {this.onPressButton(place, countryCode, id)}}
        underlayColor="white" key={id}>
        <View id="item" style={styles.item}>
          <Text style={styles.itemText}>{place}</Text>
          <Text style={styles.itemText}>{temp}</Text>
        </View>
      </TouchableHighlight>
   )  
  }

  placeViews = () => {
    let places = this.props.store.placeState.places 

    let views = places.map((place) => {
      return this.itemView(place.city, place.countryCode, place.temp, place.id) 
    })
    return views 
  }

  componentWillMount(){

    this.props.dispatch({type: ActionTypes.GET_PLACES})
  }

  render() {
    return (
      <View id="container" style={styles.container}>
        <ImageBackground 
          source={require('../../resources/images/background_3.jpg')} 
          style={styles.backgroundImage} >
          <View id="contentContainer" style={styles.contentContainer} >
          <ScrollView>
            {this.placeViews()}
          </ScrollView>
          </View>
        </ImageBackground> 
      </View>
   )
 
  }
}

 var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  itemText: {
    color: "#fff",
    fontSize: 40,
  },

  item: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  contentContainer: {
    flex: 1,
    marginTop: 50,
  }, 

})

export default DetailView
