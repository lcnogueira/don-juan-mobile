import { call, select, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { AsyncStorage } from 'react-native';

import CartActions from '~/store/ducks/cart';

const KEY = '@Challenge:products';

export function* updateCart() {
  const products = yield select(state => state.cart.data);
  try {
    yield call([AsyncStorage, 'setItem'], KEY, JSON.stringify(products));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to update cart'));
  }
}

export function* emptyCart() {
  try {
    yield call([AsyncStorage, 'removeItem'], KEY);
    yield put(CartActions.emptyCart());
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to empty cart'));
  }
}
