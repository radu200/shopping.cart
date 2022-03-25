import * as types from '../../types';

export const decreaseProductQtyFromCart = (
  cartProducts: Array<types.CartProduct>,
  productId: string
): Array<types.CartProduct> => {
  //check if product is already in the cart
  const existingCartProduct: types.CartProduct | undefined = cartProducts.find(
    (product: types.CartProduct) => product.gtin === productId
  );
  //if there is only 1, upon clicking, we should remove the product from the array
  if (existingCartProduct?.quantity === 1) {
    return cartProducts.filter(
      (product: types.CartProduct) => product.gtin !== productId
    );
  }

  return cartProducts.map((product: types.CartProduct) =>
    product.gtin === productId
      ? {
          ...product,
          quantity: product.quantity - 1,
        }
      : product
  );
};

export const increseaProductQtyFromCart = (
  cartProducts: Array<types.CartProduct>,
  productId: string
): Array<types.CartProduct> =>
  cartProducts.map((product) =>
    product.gtin === productId
      ? {
          ...product,
          quantity: product.quantity + 1,
        }
      : product
  );

export const addToCart = (
  cartProducts: Array<types.CartProduct>,
  newProduct: types.CartProduct
): Array<types.CartProduct> => {
  //check if product is already in the cart
  const existingCartProduct: types.CartProduct | undefined = cartProducts.find(
    (product: types.CartProduct) => product.gtin === newProduct.gtin
  );

  // if there is product increase quantity
  if (existingCartProduct) {
    return cartProducts.map((product: types.CartProduct) =>
      product.gtin === newProduct.gtin
        ? {
            ...product,
            quantity: product.quantity + newProduct.quantity,
          }
        : product
    );
  }

  return [...cartProducts, newProduct];
};

export const formatPrice = (price: number): string => {
  return Number(price).toFixed(2);
};
