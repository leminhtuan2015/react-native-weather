import React, { Component } from 'react';
import { Button, List, ListItem, } from 'react-native-elements'

import {
  Divider,
  FormLabel, 
  FormInput, 
  FormValidationMessage 
} from 'react-native-elements'

import {
  RkButton,
  RkTextInput,  
} from 'react-native-ui-kitten';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  ListView,
} from 'react-native';

import * as ActionTypes from "../../constants/ActionTypes"
import {styleHeader} from "./NavigatorView"

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
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.store.placeState.cities),
      place: {city: "", countryCode: ""},
    };
  }

  saveButtonPress = () => {
    this.inputCity.shake()
    this.inputCountryCode.shake()

    this.props.dispatch({type: ActionTypes.ADD_PLACE, 
      data: {city: this.state.place.city, countryCode: this.state.place.countryCode}})

    this.props.navigation.goBack()
  }

  homeButtonPress = () => {
    this.props.navigation.goBack()
  }

  onPressListItem = (rowData) => {
    console.log("Pressed : " + JSON.stringify(rowData))
    this.setState({
      dataSource: this.state.dataSource,
      place: {city: rowData.name, countryCode: rowData.country}
    }) 
  }

  onCityTextChange = (text) => {
    this.state.place.city = text

    this.props.dispatch({type: ActionTypes.FILTER_PLACE, data: text})
  }

  onCountryCodeTextChange = (text) => {
    this.state.place.countryCode = text
  }

  componentWillReceiveProps = (newProps) => {
    console.log("will receive props")

    this.setState({
      dataSource: this.ds.cloneWithRows(newProps.store.placeState.cities),
      place: this.state.place
    })
  }

  renderRow = (rowData, sectionID) => {
    return (
      <ListItem
        onPress={() => {this.onPressListItem(rowData)}}
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
        source={require('../../resources/images/background_1.jpg')} 
        style={styles.backgroundImage} >

        <View id="contentContainer" style={styles.contentContainer}>
            <FormInput
              key="city"
              value={this.state.place.city}
              inputStyle={{color: "red", marginLeft: 20}}
              containerStyle={{backgroundColor: "#B2DFDB", borderRadius: 25}}
              ref={(inputCity) => {this.inputCity = inputCity}}
              onChangeText={(text) => {this.onCityTextChange(text)}}
              placeholder="City"
              defaultValue="" />
            
            <Text />

            <FormInput
              key="countryCode"
              value={this.state.place.countryCode}
              inputStyle={{color: "red", marginLeft: 20}}
              containerStyle={{backgroundColor: "#B2DFDB", borderRadius: 25}}
              ref={(inputCountryCode) => {this.inputCountryCode = inputCountryCode}}
              onChangeText={(text) => {this.onCountryCodeTextChange(text)}}
              placeholder="County Code"
              defaultValue="" />

            <Text />

            <Button
              raised
              style={styles.button}
              onPress={this.saveButtonPress}
              backgroundColor="#2196F3"
              icon={{name: "save"}}
              title='Save' />

            <View style={{flex: 1}}>
              <List 
                style={{flex: 1}}
                containerStyle={{backgroundColor: "transparent"}}>
                <ListView 
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource}
                />
              </List>
            </View>

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
    marginTop: 90,
  },

  button: {
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

})

export default EditView

