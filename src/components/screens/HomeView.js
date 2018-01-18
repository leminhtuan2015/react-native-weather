import React, { Component } from 'react';
import { List, ListItem, SearchBar} from 'react-native-elements'
import {ImageBackground} from "react-native"

import * as ActionTypes from "../../constants/ActionTypes"
import User from "../../models/User"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
} from 'react-native';


class HomeView extends Component<{}> {

  constructor(props) {
    super(props)
  }

 render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../../resources/images/background_2.jpg')} 
          style={styles.backgroundImage} >
          
          <View id="contentContainer" style={styles.contentContainer}>
            
            <View id="topView" style={styles.topView}>
              <Text id="textCityName" style={styles.textCityName} >Ha Noi</Text>
              <Text id="textDescription"style={styles.textDescription}>
                Mostly Cloudy
              </Text>

              <Text id="temp" style={styles.textTemp}>19 C</Text>
            </View>

            <View></View>
            <View></View>
            <View></View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  contentContainer: {
    flex: 1,
    marginTop: 80,
    //justifyContent: 'center',
    alignItems: 'center',
  }, 
 
  topView: {
    flex: 1,
    alignItems: 'center',

  },

  textCityName: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: 'center',
    marginTop: 2,
  },

  textDescription: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 2,
  },
  
  textTemp: {
    fontSize: 60,
    color: '#ffffff',
    marginTop: 2,
  },

});

export default  HomeView







