import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';

import OrdersActions from '~/store/ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrdersActions.loadOrdersSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load orders'));
  }
}
