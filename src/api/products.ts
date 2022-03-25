import request from './';

export default {
  async getProducts(page: string) {
    try {
      const url = `/products?page=${page}`;
      const res = await request.get(url);
      return res;
    } catch (err: unknown) {
      return err;
    }
  },
  async getProductDetails(id: string) {
    try {
      const url = `/products/${id}`;
      const res = await request.get(url);
      return res;
    } catch (err: unknown) {
      return err;
    }
  },
};
