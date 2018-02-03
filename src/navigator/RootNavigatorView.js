import { StackNavigator } from 'react-navigation';

import StackNavigatorView from '../components/screens/StackNavigatorView';
import DrawerNavigatorView from '../components/screens/DrawerNavigatorView';

const RootNavigatorView = StackNavigator({
  Stack: { screen: StackNavigatorView },
  Drawer: { screen: DrawerNavigatorView }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'Drawer'
})


export default RootNavigatorView
