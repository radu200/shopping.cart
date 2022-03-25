import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { connect } from "react-redux";
import { RootState } from '../redux/rootReducer';
import API from '../api/products';
import ProductCard from '../components/cards/product';
import Layout from '../components/layout';
import Pagination from '../components/pagination';
import * as selectors from '../redux/cart/selectors';
import * as types from '../types';


interface IProps {
  products: Array<types.Product>;
  count: number,
  page: number;
  errorCode: number | undefined,
  totalCart: { totalPrice: string, totalQuantity: number; };
}

const HomePage = ({
  products,
  count,
  page,
  totalCart,

}: IProps) => {
  const router = useRouter();

  const handleChangePage = (currentPage: number) => {
    if (currentPage) {
      router.push({
        query: {
          page: currentPage.toString()
        }
      });
    }
  };

  return (
    <Layout cartQuantity={totalCart.totalQuantity} >
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map(product => (
          <ProductCard key={product.gtin} {...product} />
        ))}
      </div>
      <Pagination handleChangePage={handleChangePage} itemsCount={count} itemsPerPage={20} currentPage={page} />
    </Layout>
  );
};
const mapState = (state: RootState) => ({
  totalCart: selectors.selectTotal(state)
});

const connector = connect(
  mapState,
);

export default connector(HomePage);

export const getServerSideProps: GetServerSideProps = async (context) => {

  const page: string = typeof context.query.page === 'string' ? context.query.page : "1";

  const res: any = await API.getProducts(page);

  if (res.response?.status === 404) {
    return {
      notFound: true
    };
  }

  const { data }: { data: types.ProductsResponse; } = res;

  return {
    props: {
      count: data.count,
      page: data.page,
      products: data.results
    },
  };
};

