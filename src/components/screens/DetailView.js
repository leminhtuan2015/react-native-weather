import React, { Component } from 'react';
import {
  Button,
  Icon,
} 
from 'react-native-elements'
import * as ActionTypes from "../../constants/ActionTypes"
import {styleHeader} from "./NavigatorView"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  ImageBackground, 
  ActivityIndicator,
} from 'react-native';


class DetailView extends Component<{}> {
  state = {}

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
		
		this.headerRight = 
      <Icon 
        name="add"
        color='#ffffff'
        onPress={params.rightButtonOnPress ? params.rightButtonOnPress : () => null} />
    
    return {
      headerTitle: '',
      title: 'Title',
		  headerStyle: styleHeader,
			headerRight: this.headerRight
		}
	}
 
  constructor(props) {
    super(props);
    
    this.bind()
  }

  bind = () => {
    this.props.navigation.setParams({rightButtonOnPress: this.rightButtonOnPress}); 
  }

  rightButtonOnPress = () => {
    console.log("Right button Pressed") 

    this.props.navigation.navigate('EditView') 
  }

  onPressButton = (place) => {
    console.log("press: " + place.city)

    this.props.dispatch({type: ActionTypes.GET_WEATHER_DATA, 
      data: {city: place.city, countryCode: place.countryCode}})

      this.props.navigation.goBack()
  }

  editButtonPress = () => {
    console.log("press")
    this.props.navigation.navigate('EditView') 
  }

  itemView = (place) => {
    return (
      <TouchableHighlight 
        onPress={() => {this.onPressButton(place)}}
        underlayColor="gray" key={place.city}>
        <View id="item" style={styles.item}>
          <Text style={styles.itemText}>{place.city}</Text>
          <Text style={styles.itemText}>{place.temp}°</Text>
        </View>
      </TouchableHighlight>
   )  
  }

  placeViews = () => {
    let places = this.props.store.placeState.places 

    let views = places.map((place) => {
      return this.itemView(place) 
    })
    return views 
  }

  componentWillMount(){
    this.props.dispatch({type: ActionTypes.SET_PLACE_LOADING})
    this.props.dispatch({type: ActionTypes.GET_PLACES})
  }

  render() {
    return (
      <View id="container" style={styles.container}>
        <ImageBackground 
          source={require('../../resources/images/background_3.jpg')} 
          style={styles.backgroundImage} >
          <View id="contentContainer" style={styles.contentContainer} >
          {this.props.store.placeState.isLoading && 
            (<ActivityIndicator size="large" color="#0000ff" />)
          }
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
    marginTop: 10,
    marginBottom: 10,
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
