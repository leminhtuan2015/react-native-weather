import React, { Component } from 'react';
import { List, ListItem, SearchBar, Divider} 
  from 'react-native-elements'
import {ImageBackground, Image}
  from "react-native"

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

  constructor(props) {
    super(props)
  }

  hourTemp = (hour, image, temp) => {
    return (
       <View style = {[styles.todayTempByHour]}>
         <View id="hour">
           <Text style={[styles.white]}>{hour}</Text> 
         </View>

         <View id="status">
           {ImageManager(image)}
         </View>

         <View id="tempAtHours">
           <Text style={[styles.white]} >{temp}</Text>
         </View>
       </View>
    )
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
              <Text id="textCityName" style={styles.textCityName} >Ha Noi</Text>
              <Text id="textDescription"style={styles.textDescription}>
                Mostly Cloudy
              </Text>

              <Text id="temp" style={styles.textTemp}>19 C</Text>
            </View>

            <Divider style={{backgroundColor: "blue"}} />

            <View id="todayTemp" style={styles.todayTemp} >

              <View 
                id="todayTempOverview"
                style={[styles.todayTempOverview]}>

                <Text style={{color: "#ffffff", fontSize: 30 }}>Today</Text> 
                <Text style={{color: "#ffffff", fontSize: 30 }}>23</Text> 
                <Text style={{color: "#ffffff", fontSize: 30 }}>18</Text> 
              </View>

              <ScrollView 
                id="todayTempDetail"
                style={styles.todayTempDetail}
                horizontal = {true}
                showsHorizontalScrollIndicator={false} >

                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "rainny", "23")}
                {this.hourTemp("1h", "storm", "23")}
                {this.hourTemp("1h", "cloudy", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}
                {this.hourTemp("1h", "sunny", "23")}

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
    fontSize: 60,
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


});

export default  HomeView







