import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadTypesRequest: ['productId'],
  loadTypesSuccess: ['data'],
});

export const TypesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

export const loading = state => state.merge({ loading: true });

export const success = (state, { data }) => state.merge({ loading: false, data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_TYPES_REQUEST]: loading,
  [Types.LOAD_TYPES_SUCCESS]: success,
});
