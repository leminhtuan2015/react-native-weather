import React, { Component } from 'react';
import { Button, List, ListItem, } from 'react-native-elements'
import {Divider,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {
  RkButton,
  RkTextInput,  
}
from 'react-native-ui-kitten';
import {ListView, } from 'react-native'

import * as ActionTypes from "../../constants/ActionTypes"
import {styleHeader} from "./NavigatorView"
import cities from '../../resources/jsons/city.list.json';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

class EditView extends Component<{}> {

  static navigationOptions = ({navigation}) => {
    
    const { params = {} } = navigation.state;
		
    return {
      headerTitle: '',
      title: 'Title',
		}
	}

  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds.cloneWithRows(cities),
    };

  }

  saveButtonPress = () => {
    this.inputCity.shake()
    this.inputCountryCode.shake()
    
    let cityText = this.inputCityText
    let countryCodeText = this.inputCountryCodeText

    this.props.dispatch({type: ActionTypes.ADD_PLACE, 
      data: {city: cityText, countryCode: countryCodeText}})

    this.props.navigation.goBack()
  }

  homeButtonPress = () => {
    this.props.navigation.goBack()
  }

  onCityTextChange = (text) => {
    this.inputCityText = text
  }

  onCountryCodeTextChange = (text) => {
    this.inputCountryCodeText = text
  }

renderRow = (rowData, sectionID) => {
  return (
    <ListItem
      subtitleStyle={{color: "#2196F3"}}
      titleStyle={{color: "#ffffff"}}
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.country}
    />
  )
}
 
view = () => (
  <View id="container" style={styles.container}>
    <ImageBackground 
      source={require('../../resources/images/background_3.jpg')} 
      style={styles.backgroundImage} >

      <View id="contentContainer" style={styles.contentContainer}>
          <FormInput
            key="city"
            inputStyle={{color: "red", marginLeft: 20}}
            containerStyle={{backgroundColor: "#B2DFDB", borderRadius: 25}}
            ref={(inputCity) => {this.inputCity = inputCity}}
            onChangeText={(text) => {this.onCityTextChange(text)}}
            placeholder="City"
            defaultValue="" />
          
          <Text />

          <FormInput
            key="countryCode"
            inputStyle={{color: "red", marginLeft: 20}}
            containerStyle={{backgroundColor: "#B2DFDB", borderRadius: 25}}
            ref={(inputCountryCode) => {this.inputCountryCode = inputCountryCode}}
            onChangeText={(text) => {this.onCountryCodeTextChange(text)}}
            placeholder="County Code"
            defaultValue="" />

          <Text />

          <Button
            raised
            onPress={this.saveButtonPress}
            backgroundColor="#2196F3"
            icon={{name: "save"}}
            title='Save' />

          <List 
            containerStyle={{backgroundColor: "transparent"}}>
            <ListView 
              renderRow={this.renderRow}
              dataSource={this.state.dataSource}
            />
          </List>

      </View>
     </ImageBackground>
  </View>
 )

 render() {
    return this.view()
  }
}

 var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 80,
  },

  button: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,

  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

})

export default EditView

