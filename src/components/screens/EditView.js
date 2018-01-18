import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {Divider,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import * as ActionTypes from "../../constants/ActionTypes"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class EditView extends Component<{}> {
  constructor(props) {
    super(props);
  }

  saveButtonPress = () => {
    this.inputName.shake()
    var user = this.props.store.detailViewState.data
    // TODO
    //user.name = this.inputNameText
    let newUser = {name: this.inputNameText} 
    this.props.dispatch({type: ActionTypes.UPDATE_DETAIL_DATA, data: newUser})
  }

  homeButtonPress = () => {
    this.props.navigation.goBack()
  }

  onTextChange = (text) => {
    this.inputNameText = text
  }
 
view = (
  <View style={styles.container}>
    <FormLabel>Name</FormLabel>
    <FormInput
      ref={(inputName) => {this.inputName = inputName}}
      onChangeText={(text) => {this.onTextChange(text)}}
      placeholder="Name"
      defaultValue={this.props.store.detailViewState.data.name} />
    <FormValidationMessage>Error message</FormValidationMessage>

      <Button
        raised
        onPress={this.saveButtonPress}
        backgroundColor="#E41E63"
        icon={{name: 'cached'}}
        title='Save' />

      <Text />
      <Divider style={{ backgroundColor: 'gray' }} />
      <Text />

      <Button
        raised
        onPress={this.homeButtonPress}
        backgroundColor="#E41E63"
        icon={{name: 'cached'}}
        title='Back' />

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
    paddingHorizontal: 30,
    paddingTop: 20
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,

  },
})

export default EditView

