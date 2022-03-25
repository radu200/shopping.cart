import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../redux/rootReducer';
import API from '../../api/products';
import ProductDetailsCard from '../../components/cards/product/details';
import Layout from '../../components/layout';
import * as actions from '../../redux/cart/actions';
import * as selectors from '../../redux/cart/selectors';
import * as types from '../../types';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
  product: types.Product;
  total: { totalPrice: string, totalQuantity: number; };
}

interface IState {
  quantity: number;
}

const ProductDetails = ({
  product,
  total,
  addProduct
}: IProps) => {


  const [state, setState] = useState<IState>({
    quantity: 1
  });

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, quantity: e.target.valueAsNumber }));
  };

  const onAddToCart = () => {
    const newProduct = {
      quantity: state.quantity,
      ...product
    };
    addProduct(newProduct);
  };
  return (
    <Layout cartQuantity={total.totalQuantity}>
      <ProductDetailsCard
        quantityValue={state.quantity}
        {...product} onAddToCart={onAddToCart}
        onQuantityChange={onQuantityChange} />
    </Layout>
  );
};

const mapState = (state: RootState) => ({
  total: selectors.selectTotal(state)
});

const connector = connect(
  mapState,
  {
    addProduct: actions.addProduct
  }
);
export default connector(ProductDetails);

export const getServerSideProps: GetServerSideProps = async (context) => {

  const id: string = typeof context.query.gtin === 'string' ? context.query.gtin : "";

  const res: any = await API.getProductDetails(id);

  if (res.response?.status === 404) {
    return {
      notFound: true
    };
  }

  const { data }: { data: types.ProductResponse; } = res;

  return {
    props: {
      product: data
    },
  };
};






