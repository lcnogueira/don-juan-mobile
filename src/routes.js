import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Products from '~/pages/Products';
import Orders from '~/pages/Orders';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import Types from '~/pages/Types';
import Sizes from '~/pages/Sizes';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator({
      SignIn,
      SignUp,
      Main: createStackNavigator({
        Products,
        Orders,
        Cart,
        Order,
        Types,
        Sizes,
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
