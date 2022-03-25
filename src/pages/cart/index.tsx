import Layout from '../../components/layout';
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../redux/rootReducer';
import CartCard from '../../components/cards/cart/product';
import * as actions from '../../redux/cart/actions';
import * as selectors from '../../redux/cart/selectors';
import * as types from '../../types';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
  products: Array<types.CartProduct>;
  total: { totalPrice: string, totalQuantity: number; };
}

const CartPage = ({
  products,
  total,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity
}: IProps) => {
  return (
    <Layout cartQuantity={total.totalQuantity} >
      {products.length ?
        <h5 className="mt-4">Total Price: {total.totalPrice}
          <span className="ml-1">{products[0].recommendedRetailPriceCurrency}</span> </h5> :
        <h2 className="mt-4">{"Cart empty"}</h2>}
      {products.map(product => (
        <CartCard
          key={product.gtin} {...product}
          onRemoveProduct={(id) => removeProduct(id)}
          onDecreaseProductQty={(id) => decreaseProductQuantity(id)}
          onIncreaseProductQty={(id) => increaseProductQuantity(id)}
        />
      ))}
    </Layout>
  );
};

const mapState = (state: RootState) => ({
  products: selectors.selectCartProducts(state),
  total: selectors.selectTotal(state)
});

const connector = connect(
  mapState,
  {
    removeProduct: actions.removeProduct,
    increaseProductQuantity: actions.increaseProductQuantity,
    decreaseProductQuantity: actions.decreaseProductQuantity,
  }
);


export default connector(CartPage);
