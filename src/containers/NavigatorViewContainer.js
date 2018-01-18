import React  from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';
import NavigatorView from '../components/screens/NavigatorView';

const mapStateToProps = (state) => ({
  nav: state.nav
});

const NavigatorViewHelper = ({ dispatch, nav }) =>  (
  <NavigatorView
    navigation={addNavigationHelpers({
        dispatch,
        state: nav
    })}
  />
);

const NavigatorViewContainer = connect(mapStateToProps)(NavigatorViewHelper);

//export default () => (
//  <Provider store={Store}>
//    <NavigatorViewContainer />
//  </Provider>
//);

export default NavigatorViewContainer
