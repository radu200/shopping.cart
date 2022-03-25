import * as types from '../../types';

export const ADD_PRODUCT = 'cart/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
export const INCREASE_QUANTITY_PRODUCT = 'cart/INCREASE_QUANTITY_PRODUCT';
export const DECREASE_QUANTITY_PRODUCT = 'cart/DECREASE_QUANTITY_PRODUCT';

interface IAddProduct {
  type: typeof ADD_PRODUCT;
  data: types.CartProduct;
}

interface IRemoveProduct {
  type: typeof REMOVE_PRODUCT;
  id: string;
}

interface IIncreaseProductQuantity {
  type: typeof INCREASE_QUANTITY_PRODUCT;
  id: string;
}

interface IDecreaseProductQuantity {
  type: typeof DECREASE_QUANTITY_PRODUCT;
  id: string;
}

export type cartActions =
  | IAddProduct
  | IRemoveProduct
  | IIncreaseProductQuantity
  | IDecreaseProductQuantity;
