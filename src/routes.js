import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import { colors } from './styles';


import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({
      SignIn,
      SignUp,
      Main: createStackNavigator({
        Main,
      }, {
        defaultNavigationOptions: {
          header: null,
        },
      }),
    }, {
      initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
    }),
  );
}
