import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
} from "react-native"


class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen 1',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Screen2')}
        title="Go to Screen 2"
      />
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

