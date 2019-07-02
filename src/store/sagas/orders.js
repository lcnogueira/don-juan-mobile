import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import NavigationService from '~/services/navigation';
import OrdersActions from '~/store/ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrdersActions.loadOrdersSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load orders'));
  }
}

export function* createOrder({ order }) {
  try {
    yield call(api.post, 'orders', order);

    yield put(OrdersActions.createOrderSuccess());
    yield put(ToastActionsCreators.displayInfo('Order successfully created'));
    NavigationService.navigate('Products');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to create order'));
  }
}
