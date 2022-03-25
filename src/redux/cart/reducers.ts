import * as actionTypes from './actionTypes';
import * as types from '../../types';
import * as helpers from './helpers';

interface ICartState {
  products: Array<types.CartProduct>;
}

const cartState: ICartState = {
  products: [],
};

const cart = (state = cartState, action: actionTypes.cartActions) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: helpers.addToCart(state.products, action.data),
      };
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.gtin !== action.id
        ),
      };
    case actionTypes.INCREASE_QUANTITY_PRODUCT:
      return {
        ...state,
        products: helpers.increseaProductQtyFromCart(state.products, action.id),
      };
    case actionTypes.DECREASE_QUANTITY_PRODUCT:
      return {
        ...state,
        products: helpers.decreaseProductQtyFromCart(state.products, action.id),
      };
    default:
      return state;
  }
};

export default cart;
