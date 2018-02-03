import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import PlaceViewContainer from '../../containers/PlaceViewContainer';
import AddPlaceViewContainer from '../../containers/AddPlaceViewContainer';

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
    HomeView: {
      screen: HomeViewContainer,
      headerTitle: '',
      title: 'Title',
      headerStyle: styleHeader,
      headerTintColor: '#ffffff',
    },
    PlaceView: {
      screen: PlaceViewContainer,
      navigationOptions: {
        headerTitle: 'Places',
        headerStyle: styleHeader,
        headerTintColor: '#ffffff',
      },
    },
    AddPlaceView: {
      screen: AddPlaceViewContainer,
       navigationOptions: {
        headerTitle: 'Add Places',
        headerStyle: styleHeader,
        headerTintColor: '#ffffff',
      },

    },
  },
  {
//  headerMode: 'none',
  }
);

export default StackNavigatorView
