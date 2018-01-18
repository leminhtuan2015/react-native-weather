import { NavigationActions } from 'react-navigation';
import NavigatorView from '../components/screens/NavigatorView';

const initialState = NavigatorView.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
    const nextState = NavigatorView.router.getStateForAction(actions, state);

    return nextState || state;
}
