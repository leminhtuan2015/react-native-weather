import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  View,
} from "react-native"

import { 
  Icon,
} from 'react-native-elements'

class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen 1',
  };

  render() {
    return (
      <View>
      <Button
        onPress={() => this.props.navigation.navigate('Screen2')}
        title="Go to Screen 2"
      />
      <Button
        onPress={() => this.props.navigation.navigate('HomeView')}
        title="Go to Home"
      />

      </View>
    );
  }
}

class Screen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen 2',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back Screen 1"
      />
    );
  }
}

const DrawerNavigatorView = DrawerNavigator({
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
},
{
  gesturesEnabled: false
});

const drawerOnPress = (navigation) => {
  if (navigation.state.index === 0) {
    navigation.navigate('DrawerOpen')
  } else {
    navigation.navigate('DrawerClose')
  }
}

const drawerIcon = (navigation) => (<Icon 
  name="menu"
  style={{marginLeft: 30}}
  size={30}
  color='#ffffff'
  underlayColor="transparent"
  onPress={() => drawerOnPress(navigation)} 
  />)

const DrawerStackView = StackNavigator({
  drawer: { screen: DrawerNavigatorView }
}, {
  headerMode: 'none',
  //headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: '',
    gesturesEnabled: false,
    headerLeft: drawerIcon(navigation), 
  })
})

export default DrawerStackView

