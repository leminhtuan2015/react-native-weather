import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
} from "react-native"

import HomeViewContainer from '../../containers/HomeViewContainer';

const DrawerNavigatorView = DrawerNavigator({
  HomeView: {screen: HomeViewContainer},
},
{
  gesturesEnabled: false
});

const DrawerStackView = StackNavigator({
  drawer: { screen: DrawerNavigatorView }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: '',
    gesturesEnabled: false,
    headerLeft: <Text onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>Menu</Text>
  })
})

export default DrawerStackView

