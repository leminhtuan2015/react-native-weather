import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer';
import EditViewContainer from '../../containers/EditViewContainer';
import DrawerNavigatorView from './DrawerNavigatorView';

export const styleHeader = {
  backgroundColor: 'transparent',
  position: 'absolute',
  height: 50,
  top: 0,
  left: 0,
  right: 15,
  borderBottomWidth: 0,
}

const StackNavigatorView = StackNavigator(
  {
    DrawerNavigatorView: {
      screen: DrawerNavigatorView
    },
    HomeView: {
      screen: HomeViewContainer,
      headerTitle: '',
      title: 'Title',
      headerStyle: styleHeader,
      headerTintColor: '#ffffff',
    },
    DetailView: {
      screen: DetailViewContainer,
      navigationOptions: {
        headerTitle: 'Places',
        headerStyle: styleHeader,
        headerTintColor: '#ffffff',
      },
    },
    EditView: {
      screen: EditViewContainer,
       navigationOptions: {
        headerTitle: 'Add Places',
        headerStyle: styleHeader,
        headerTintColor: '#ffffff',
      },

    },
  },
  {
  headerMode: 'none',
  }
);

export default StackNavigatorView
