import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadTypeSizesRequest: ['typeId'],
  loadTypeSizesSuccess: ['data'],
});

export const TypeSizesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
});

/* Reducers */

export const loading = state => state.merge({ loading: true });

export const success = (state, { data }) => state.merge({ loading: false, data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_TYPE_SIZES_REQUEST]: loading,
  [Types.LOAD_TYPE_SIZES_SUCCESS]: success,
});
