import * as selectors from '../selectors';

describe('Test selectTotal selector', () => {
  it('should compute total products price and quantity ', () => {
    const cartProducts = [
      {
        quantity: 2,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
      {
        quantity: 1,
        name: 'Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health',
        gtin: '8411047151242',
        recommendedRetailPrice: 22.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Instituto Espanol',
        categoryName: "Men's Perfume",
      },
    ];

    const state = {
      cart: {
        products: [...cartProducts],
      },
    };

    expect(selectors.selectTotal(state)).toEqual({
      totalPrice: '82.97',
      totalQuantity: 3,
    });
  });
});

describe('Test selectCartProducts selector', () => {
  it('should return cart products with total product price', () => {
    const cartProducts = [
      {
        quantity: 2,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];

    const state = {
      cart: {
        products: [...cartProducts],
      },
    };

    const cartProductsOutput = [
      {
        quantity: 2,
        totalProductPrice: '59.98',
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];

    expect(selectors.selectCartProducts(state)).toEqual(cartProductsOutput);
  });
});
