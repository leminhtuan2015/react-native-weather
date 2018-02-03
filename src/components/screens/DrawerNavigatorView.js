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

import TabNavigatorView from './TabNavigatorView';
import NavBarItem from '../views/NavBarItem';

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

const drawerOnPress = (navigation) => {
  console.log("Drawer Button Pressed: " + JSON.stringify(navigation.state))

  if (navigation.state.index === 0) {
    navigation.navigate('DrawerOpen')
  } else {
    navigation.navigate('DrawerClose')
  }
}

const drawerIcon1 = navigation => (
  <NavBarItem
    iconName="bars"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

const drawerIcon = (navigation) => (<Icon 
  name="menu"
  marginLeft={30}
  size={30}
  color='#ffffff'
  underlayColor="transparent"
  onPress={() => drawerOnPress(navigation)} 
  />)

const DrawerNavigatorView = DrawerNavigator({
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
  Screen0: {screen: TabNavigatorView},
},
{
  drawerWidth: 200,
  drawerPosition: "right",
  initialRouteName: "Screen1",
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'DrawerStackView',
    headerLeft: drawerIcon1(navigation), 
  })
});

const DrawerStackView = StackNavigator({
  drawer: { screen: DrawerNavigatorView }
}, {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'DrawerStackView',
    gesturesEnabled: false,
    headerLeft: drawerIcon1(navigation), 
  })
})

export default DrawerStackView
//export default DrawerNavigatorView

