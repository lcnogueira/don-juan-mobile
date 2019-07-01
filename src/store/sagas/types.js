import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';

import TypesActions from '~/store/ducks/types';

export function* loadTypes({ productId }) {
  try {
    const response = yield call(api.get, `products/${productId}/types`);

    yield put(TypesActions.loadTypesSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load types'));
  }
}
