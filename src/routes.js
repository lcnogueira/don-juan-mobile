import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Products from '~/pages/Products';
import Orders from '~/pages/Orders';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import Flavor from '~/pages/Flavor';
import Size from '~/pages/Size';

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
        Flavor,
        Size,
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
