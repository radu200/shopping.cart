import * as actionTypes from './actionTypes';
import * as types from '../../types';

export const addProduct = (
  data: types.CartProduct
): { type: string; data: types.CartProduct } => {
  return {
    type: actionTypes.ADD_PRODUCT,
    data,
  };
};

export const removeProduct = (id: string): { type: string; id: string } => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    id,
  };
};

export const increaseProductQuantity = (
  id: string
): { type: string; id: string } => {
  return {
    type: actionTypes.INCREASE_QUANTITY_PRODUCT,
    id,
  };
};

export const decreaseProductQuantity = (
  id: string
): { type: string; id: string } => {
  return {
    type: actionTypes.DECREASE_QUANTITY_PRODUCT,
    id,
  };
};
