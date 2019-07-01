import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts() {
  try {
    const response = yield call(api.get, 'products');

    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load projects'));
  }
}
