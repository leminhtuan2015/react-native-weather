import React, { Component } from 'react';
import { Button } from 'react-native-elements'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class DetailView extends Component<{}> {
  state = {}
 
  constructor(props) {
    super(props);
    
    console.log("--------------------")
    console.log("DetailViewState:" + JSON.stringify(this.props))
    console.log("--------------------")
  }

  buttonPress = () => {
    console.log("press")
    this.props.navigation.goBack()
  }

  editButtonPress = () => {
    console.log("press")
    this.props.navigation.navigate('EditView') 
  }
 
  render() {
    return (
    <View style={styles.container}>
     <Button
       onPress={this.buttonPress}
       color="#009688"
       backgroundColor="#FFC107"
       title='Back' />

     <Text></Text>

      <Button
        raised
        onPress={this.editButtonPress}
        backgroundColor="#E41E63"
        icon={{name: 'cached'}}
        title='Edit' />

      <View style={styles.container}>
        <Text>{this.props.store.detailViewState.data.name}</Text>
      </View>
    </View>
   )
 
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

export default DetailView
