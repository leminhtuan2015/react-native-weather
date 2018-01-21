import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import * as ActionTypes from "../../constants/ActionTypes"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
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
        underlayColor="white">
        <View id="item" style={styles.item}>
          <Text style={styles.itemText}>{place}</Text>
          <Text style={styles.itemText}>{temp}</Text>
        </View>
      </TouchableHighlight>
   )  
  }


  render() {
    return (
      <View id="container" style={styles.container}>
        <ScrollView>
          {this.itemView("Hanoi","vn", 20, 1)}
          {this.itemView("Tokyo", "jp", 20, 2)}
          {this.itemView("New York", "us", 20, 3)}
          {this.itemView("London", "uk", 20, 4)}
          {this.itemView("Danang", "vn", 20, 5)}
        </ScrollView>
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

})

export default DetailView
