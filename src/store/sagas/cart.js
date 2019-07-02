import { put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import CartActions from '~/store/ducks/cart';

export function* emptyCart() {
  try {
    yield put(CartActions.emptyCart());
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to empty cart'));
  }
}
