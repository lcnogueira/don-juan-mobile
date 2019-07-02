import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addProduct: ['product'],
  removeProduct: ['product'],
  updateProduct: ['id', 'quantity'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const add = (state, { product }) => {
  const found = state.data.find(data => data.id === product.id);
  if (found) {
    return state.merge({ data: state.data.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)) });
  }

  return state.merge({ data: [...state.data, { ...product, quantity: 1 }] });
};

export const remove = (state, { product }) => state.merge({ data: state.data.filter(data => data.id !== product.id) });

export const update = (state, { id, quantity }) => state.merge({ data: state.data.map(data => (data.id === id ? { ...data, quantity } : data)) });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: add,
  [Types.REMOVE_PRODUCT]: remove,
  [Types.UPDATE_PRODUCT]: update,
});
