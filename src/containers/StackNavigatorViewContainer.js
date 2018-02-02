import React  from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';
import StackNavigatorView from '../components/screens/StackNavigatorView';

const mapStateToProps = (state) => ({
  nav: state.nav
});

const NavigatorViewHelper = ({ dispatch, nav }) =>  (
  <StackNavigatorView
    navigation={addNavigationHelpers({
        dispatch,
        state: nav
    })}
  />
);

const StackNavigatorViewContainer = connect(mapStateToProps)(NavigatorViewHelper);

//export default () => (
//  <Provider store={Store}>
//    <NavigatorViewContainer />
//  </Provider>
//);

export default StackNavigatorViewContainer
