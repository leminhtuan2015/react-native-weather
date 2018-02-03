import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

class DetailsScreen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details 1!</Text>
      </View>
    );
  }
}

class HomeScreen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="HOME 1: Go to Details 1"
          onPress={() => this.props.navigation.navigate('Details1')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="HOME : Go to Details"
          onPress={() => this.props.navigation.navigate('HomeView')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="SETTING : Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home1: { screen: HomeScreen1 },
  Details1: { screen: DetailsScreen1 },
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default TabNavigator(
  {
    HomeStack: { screen: HomeStack },
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
  },
  {
    /* Other configuration remains unchanged */
  }
);


