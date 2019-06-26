import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Products from '~/pages/Products';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({
      SignIn,
      SignUp,
      Main: createStackNavigator({
        Products,
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
