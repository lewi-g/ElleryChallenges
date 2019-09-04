import {createStackNavigator, createAppContainer} from 'react-navigation';

import CreateChallenge from '../screens/CreateChallenge'
import LoggedOut from '../screens/LoggedOut'
import SignIn from '../screens/SignIn'


const StackNavigator = createStackNavigator(
  {
    CreateChallenge,
    LoggedOut, 
    SignIn,
  }, 
  {
    initialRouteName: 'LoggedOut'
  }
)

const AppNavigation = createAppContainer(StackNavigator)

export default AppNavigation