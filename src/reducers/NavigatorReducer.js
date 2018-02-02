import { NavigationActions } from 'react-navigation';
import StackNavigatorView from '../components/screens/StackNavigatorView';

const initialState = StackNavigatorView.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
    const nextState = StackNavigatorView.router.getStateForAction(actions, state);

    return nextState || state;
}
