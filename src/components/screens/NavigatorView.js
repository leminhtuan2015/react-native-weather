import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer';
import EditViewContainer from '../../containers/EditViewContainer';

const Navigator = StackNavigator(
  {
    HomeView: {
      screen: HomeViewContainer,
      navigationOptions: {
        headerTitle: '',
        title: 'Title',
        headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 50,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#ffffff'
      },
    },
    DetailView: {
      screen: DetailViewContainer,
      navigationOptions: {
        headerTitle: 'Detail',
      },
    },
    EditView: {screen: EditViewContainer,},
  },
  {
    headerMode: 'screen',
    mode: 'card',
    cardStyle: { backgroundColor: 'transparent' },
    tintColor: '#ffffff',
  }
);

export default Navigator
