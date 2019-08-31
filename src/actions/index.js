import * as types from './ActionType';

export const getToCart = () => ({
  type: types.LIST_PRODUCT,
});

export const addToCart = (product, quantity) => ({
  type: types.ADD_PRODUCT,
  product,
  quantity
});

export const removeToCart = (product) => ({
  type: types.REMOVE_PRODUCT,
  product
});

export const changeNotify = (content) => ({
  type: types.CHANGE_NOTIFY,
  content
});