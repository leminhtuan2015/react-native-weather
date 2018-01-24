import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {Divider,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {
  RkButton,
  RkTextInput,  
}
from 'react-native-ui-kitten';

import * as ActionTypes from "../../constants/ActionTypes"
import {styleHeader} from "./NavigatorView"

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
  }

  saveButtonPress = () => {
    this.inputName.shake()
  }

  homeButtonPress = () => {
    this.props.navigation.goBack()
  }

  onTextChange = (text) => {
    this.inputNameText = text
  }
 
view = (
  <View id="container" style={styles.container}>
    <ImageBackground 
      source={require('../../resources/images/background_3.jpg')} 
      style={styles.backgroundImage} >

      <View id="contentContainer" style={styles.contentContainer}>
          <FormInput
            inputStyle={{color: "red", marginLeft: 20}}
            containerStyle={{backgroundColor: "#B2DFDB", borderRadius: 25}}
            ref={(inputName) => {this.inputName = inputName}}
            onChangeText={(text) => {this.onTextChange(text)}}
            placeholder="Name"
            defaultValue="" />
          
          <Text />
          <Button
            raised
            onPress={this.saveButtonPress}
            backgroundColor="#E41E63"
            icon={{name: "save"}}
            title='Save' />
      </View>
     </ImageBackground>
  </View>
 )

 render() {
    return this.view
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

