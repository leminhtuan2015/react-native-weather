import React, { Component } from 'react';
import { List, ListItem, SearchBar, Divider} 
  from 'react-native-elements'
import {
  ImageBackground,
  Image,
  ActivityIndicator,
}
  from "react-native"

import {Button} from 'react-native';

import * as ActionTypes from "../../constants/ActionTypes"
import User from "../../models/User"
import ImageManager from "../../utils/ImageManager"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
} from 'react-native';


class HomeView extends Component<{}> {
  static headerRight = null

  state = {isSaving: false}

  constructor(props) {
    super(props)

  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
		
		this.headerRight = <Button title="Add"
      onPress={params.rightButtonOnPress ? params.rightButtonOnPress : () => null} />
   
    return {
      headerTitle: '',
      title: 'Title',
		  headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
        height: 50,
				borderBottomWidth: 0,
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			},
			headerRight: this.headerRight
		}
	}

  rightButtonOnPress = () => {
    console.log("Right button Pressed") 

    this.props.navigation.navigate('DetailView') 
  }

  hourTempForecast = () => {
    let array = [
      {h: 1, image: "rainny"},
      {h: 2, image: "sunny"},
      {h: 3, image: "rainny"},
      {h: 4, image: "sunny"},
      {h: 5, image: "rainny"},
      {h: 6, image: "sunny"},
      {h: 7, image: "rainny"},
      {h: 8, image: "sunny"},
      {h: 9, image: "rainny"},
      {h: 10, image: "rainny"},
      {h: 11, image: "rainny"},
      {h: 12, image: "rainny"},
      {h: 13, image: "rainny"},
    ]
    
    let view = array.map((data) => {
      return this.hourTemp(data.h + "h", data.image, "23", data.h)
    })

    return view
  }

  hourTemp = (hour, image, temp, key) => {
    return (
       <View style = {[styles.todayTempByHour]} key={key} >
         <View id="hour">
           <Text style={[styles.white, styles.todayTempByHourText]}>{hour}</Text> 
         </View>

         <View id="status">
           {ImageManager(image)}
         </View>

         <View id="tempAtHours">
           <Text style={[styles.white, styles.todayTempByHourText]} >{temp}°</Text>
         </View>
       </View>
    )
  }

  componentWillMount(){
    console.log("Home component will mount")

    this.props.dispatch({type: ActionTypes.GET_WEATHER_DATA, 
      data: {city: "Hanoi", countyCode: "vn"}})
    //this.props.dispatch({type: ActionTypes.GET_WEATHER_DATA})
  }

  componentDidMount(){
    console.log("Home component Did mount")
    this.props.navigation.setParams({rightButtonOnPress: this.rightButtonOnPress}); 
    this.props.dispatch({type: "BYE"})
  }

   render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../../resources/images/background_2.jpg')} 
          style={styles.backgroundImage} >
         
          <ScrollView> 
          <View id="contentContainer" style={styles.contentContainer}>
            
            <View id="topView" style={styles.topView}>
              <Text id="textCityName" style={styles.textCityName} >
                {this.props.store.weatherState.city}
              </Text>
              <Text id="textDescription"style={styles.textDescription}>
                {this.props.store.weatherState.description}
              </Text>

              <Text id="temp" style={styles.textTemp}>{this.props.store.weatherState.temp}°</Text>
            </View>

            <Divider style={{backgroundColor: "blue"}} />

            <View id="todayTemp" style={styles.todayTemp} >

              <View 
                id="todayTempOverview"
                style={[styles.todayTempOverview]}>

                <Text style={{color: "#ffffff", fontSize: 30 }}>Today</Text> 
                <Text style={{color: "#ffffff", fontSize: 30 }}>{this.props.store.weatherState.tempMax}°⤒</Text> 
                <Text style={{color: "#ffffff", fontSize: 30 }}>{this.props.store.weatherState.tempMin}°⤓</Text> 
              </View>

              <ScrollView 
                id="todayTempDetail"
                style={styles.todayTempDetail}
                horizontal = {true}
                showsHorizontalScrollIndicator={false} >

                {this.hourTempForecast()}
              </ScrollView>

            </View>

          </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
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
    flexDirection: "column",
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
    fontSize: 80,
    color: '#ffffff',
    marginTop: 15,
  },
  
  white: {
    color: "#ffffff",
  },

  todayTemp: {
    marginTop: 5,
    justifyContent:'space-between'
  },

  todayTempOverview: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  todayTempDetail: {
    marginTop: 20,
  },

  todayTempByHour: {
    flex: 1,
    width: 50,
    height: 100,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  todayTempByHourText: {
    fontSize: 20, 
  }

});

export default  HomeView







