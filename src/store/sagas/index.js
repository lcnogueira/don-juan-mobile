import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { ProductsTypes } from '~/store/ducks/products';
import { TypesTypes } from '~/store/ducks/types';
import { TypeSizesTypes } from '~/store/ducks/typeSizes';
import { OrdersTypes } from '~/store/ducks/orders';

import {
  signIn, signOut, init, signUp, // getPermissions,
} from './auth';

import { loadProducts } from './products';
import { loadTypes } from './types';
import { loadTypeSizes } from './typeSizes';
import { loadOrders } from './orders';

export default function* rootSaga() {
  yield all([
    init(),

    // takeLatest(AuthTypes.INIT_CHECK_SUCCESS, getPermissions),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(TypesTypes.LOAD_TYPES_REQUEST, loadTypes),
    takeLatest(TypeSizesTypes.LOAD_TYPE_SIZES_REQUEST, loadTypeSizes),
    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),

  ]);
}
