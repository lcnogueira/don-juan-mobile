import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';

import SizesActions from '~/store/ducks/sizes';

export function* loadSizes({ typeId }) {
  try {
    const response = yield call(api.get, `types/${typeId}/sizes`);

    yield put(SizesActions.loadSizesSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load sizes'));
  }
}
