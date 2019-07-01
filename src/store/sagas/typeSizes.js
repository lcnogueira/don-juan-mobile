import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';

import TypeSizesActions from '~/store/ducks/typeSizes';

export function* loadTypeSizes({ typeId }) {
  try {
    const response = yield call(api.get, `types/${typeId}/sizes`);

    yield put(TypeSizesActions.loadTypeSizesSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load types sizes'));
  }
}
