import { call, put, select } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import { AsyncStorage } from 'react-native';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Omni:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Wrong email/password'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);

  NavigationService.navigate('SignIn');
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Wrong name/email/password'));
  }
}

export function* getPermissions() {
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn) return;

  try {
    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;
    yield put(AuthActions.getPermissionsSuccess(roles, permissions));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Error when trying to load permissions'));
  }
}
