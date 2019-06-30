import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { ProductsTypes } from '~/store/ducks/products';

import {
  signIn, signOut, init, signUp, // getPermissions,
} from './auth';

import { loadProducts } from './products';

export default function* rootSaga() {
  yield all([
    init(),

    // AUTH
    // takeLatest(AuthTypes.INIT_CHECK_SUCCESS, getPermissions),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}
