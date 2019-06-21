import { all, takeLatest } from 'redux-saga/effects';

import {
  signIn, signOut, init, getPermissions,
} from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    init(),

    // AUTH
    takeLatest(AuthTypes.INIT_CHECK_SUCCESS, getPermissions),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}
