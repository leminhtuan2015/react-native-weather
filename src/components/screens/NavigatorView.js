import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer';
import EditViewContainer from '../../containers/EditViewContainer';

const Navigator = StackNavigator(
  {
    HomeView: {
      screen: HomeViewContainer,
      navigationOptions: {
        headerTitle: 'Home',
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
    headerMode: 'screen'
  }
);

export default Navigator
