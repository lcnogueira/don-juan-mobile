import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Products from '~/pages/Products';
import Orders from '~/pages/Orders';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({
      SignIn,
      SignUp,
      Main: createStackNavigator({
        Products,
        Orders,
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
