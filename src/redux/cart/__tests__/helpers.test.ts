import * as helpers from '../helpers';

describe('Test decreaseProductQtyFromCart helper', () => {
  it('should remove product from cart when quantity equals one ', () => {
    const cartProducts = [
      {
        quantity: 1,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];
    const productId = cartProducts[0].gtin;
    expect(helpers.decreaseProductQtyFromCart(cartProducts, productId)).toEqual(
      []
    );
  });

  it('should decrease product quantity by one', () => {
    const cartProducts = [
      {
        quantity: 3,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];
    const cartProductsOutput = [
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
    const productId = cartProducts[0].gtin;
    expect(helpers.decreaseProductQtyFromCart(cartProducts, productId)).toEqual(
      cartProductsOutput
    );
  });

  it('should return same cart products if product id is not found ', () => {
    const cartProducts = [
      {
        quantity: 1,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];
    const productId = '123';
    expect(helpers.decreaseProductQtyFromCart(cartProducts, productId)).toEqual(
      cartProducts
    );
  });
});

describe('Test addToCart helper', () => {
  it('should increase product quantity if product already exist', () => {
    const cartProducts = [
      {
        quantity: 1,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];

    const cartProductsOutput = [
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
    const newProduct = cartProducts[0];
    expect(helpers.addToCart(cartProducts, newProduct)).toEqual(
      cartProductsOutput
    );
  });

  it('should add product if product is not in the cart', () => {
    const cartProducts = [
      {
        quantity: 1,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },
    ];

    const newProduct = {
      quantity: 1,
      totalPrice: 29.99,
      name: 'Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health',
      gtin: '8411047151242',
      recommendedRetailPrice: 22.99,
      recommendedRetailPriceCurrency: 'EUR',
      imageUrl: 'url',
      brandName: 'Instituto Espanol',
      categoryName: "Men's Perfume",
    };
    const cartProductsOutput = [
      {
        quantity: 1,
        name: 'Parodontax Duplo Herbal Fresh 75ml',
        gtin: '5054563079435',
        recommendedRetailPrice: 29.99,
        recommendedRetailPriceCurrency: 'EUR',
        imageUrl: 'url',
        brandName: 'Parodontax',
        categoryName: 'Toothpaste',
      },

      newProduct,
    ];
    expect(helpers.addToCart(cartProducts, newProduct)).toEqual(
      cartProductsOutput
    );
  });
});

describe('Format price', () => {
  it('should return 2 fixed decimals', () => {
    expect(helpers.formatPrice(59.980000000000004)).toEqual('59.98');
  });

  it('should return 2 zero fixed decimals ', () => {
    expect(helpers.formatPrice(59.000000000000004)).toEqual('59.00');
  });
});
