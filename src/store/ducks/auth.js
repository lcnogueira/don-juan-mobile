import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signInFail: null,
  signOut: null,
  signUpRequest: ['name', 'email', 'password'],
  getPermissionsSuccess: ['roles', 'permissions'],
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
});

/* Reducers */

export const loading = state => state.merge({ loading: true });

export const stopLoading = state => state.merge({ loading: false });

export const success = (state, { token }) => state.merge({ signedIn: true, token, loading: false });

export const logout = state => state.merge({
  signedIn: false, token: null, roles: [], permissions: [], authChecked: false,
});

const permissionsSuccess = (state, { roles, permissions }) => state.merge({ roles, permissions });

const checkSuccess = state => state.merge({ authChecked: true });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: loading,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAIL]: stopLoading,
  [Types.SIGN_OUT]: logout,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
});
