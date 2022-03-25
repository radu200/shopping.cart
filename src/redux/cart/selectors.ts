import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import * as helpers from './helpers';
import * as types from '../../types';

const products = (state: RootState): Array<types.CartProduct> =>
  state.cart.products;

export const selectCartProducts = createSelector(
  products,
  (products): Array<types.CartProduct> => {
    return products.map((product) => ({
      ...product,
      totalProductPrice: helpers.formatPrice(
        product.quantity * product.recommendedRetailPrice
      ),
    }));
  }
);

export const selectTotal = createSelector(
  products,
  (products): { totalPrice: string; totalQuantity: number } => {
    const {
      totalPrice,
      totalQuantity,
    }: { totalPrice: number; totalQuantity: number } = products.reduce<{
      totalPrice: number;
      totalQuantity: number;
    }>(
      (accumulator, current) => ({
        totalPrice:
          accumulator.totalPrice +
          current.recommendedRetailPrice * current.quantity,

        totalQuantity: accumulator.totalQuantity + current.quantity,
      }),
      { totalPrice: 0, totalQuantity: 0 }
    );

    return {
      totalPrice: helpers.formatPrice(totalPrice),
      totalQuantity,
    };
  }
);
