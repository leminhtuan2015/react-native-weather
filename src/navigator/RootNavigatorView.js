import { StackNavigator } from 'react-navigation';

import StackNavigatorView from '../components/screens/StackNavigatorView';

const RootNavigatorView = StackNavigator({
  Stack: { screen: StackNavigatorView },
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'Stack'
})


export default RootNavigatorView
