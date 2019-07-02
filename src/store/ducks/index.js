import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import { reducer as auth } from './auth';
import { reducer as products } from './products';
import { reducer as types } from './types';
import { reducer as orders } from './orders';
import { reducer as typeSizes } from './typeSizes';
import { reducer as cart } from './cart';

const reducers = combineReducers({
  auth,
  products,
  types,
  orders,
  typeSizes,
  cart,
  toast,
});

export default reducers;
