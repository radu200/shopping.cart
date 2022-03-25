import cartReducer from '../reducers';
import * as actionTypes from '../actionTypes';

describe('Test cart reducer', () => {
  it('should  handle ADD_PRODUCT action', () => {
    const product = {
      quantity: 1,
      name: 'Parodontax Duplo Herbal Fresh 75ml',
      gtin: '5054563079435',
      recommendedRetailPrice: 29.99,
      recommendedRetailPriceCurrency: 'EUR',
      imageUrl: 'url',
      brandName: 'Parodontax',
      categoryName: 'Toothpaste',
    };

    const initialState = {
      products: [],
    };

    const outputState = {
      products: [product],
    };

    const reducer = cartReducer(initialState, {
      type: actionTypes.ADD_PRODUCT,
      data: product,
    });
    expect(reducer).toEqual(outputState);
  });

  it('should  handle REMOVE_PRODUCT action', () => {
    const product = {
      quantity: 1,
      name: 'Parodontax Duplo Herbal Fresh 75ml',
      gtin: '5054563079435',
      recommendedRetailPrice: 29.99,
      recommendedRetailPriceCurrency: 'EUR',
      imageUrl: 'url',
      brandName: 'Parodontax',
      categoryName: 'Toothpaste',
    };

    const initialState = {
      products: [product],
    };

    const outputState = {
      products: [],
    };

    const reducer = cartReducer(initialState, {
      type: actionTypes.REMOVE_PRODUCT,
      id: product.gtin,
    });
    expect(reducer).toEqual(outputState);
  });

  it('should  handle INCREASE_QUANTITY_PRODUCT action', () => {
    const initialState = {
      products: [
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
      ],
    };

    const outputState = {
      products: [
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
      ],
    };

    const reducer = cartReducer(initialState, {
      type: actionTypes.INCREASE_QUANTITY_PRODUCT,
      id: initialState.products[0].gtin,
    });
    expect(reducer).toEqual(outputState);
  });

  it('should  handle DECREASE_QUANTITY_PRODUCT action', () => {
    const initialState = {
      products: [
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
      ],
    };

    const outputState = {
      products: [
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
      ],
    };

    const reducer = cartReducer(initialState, {
      type: actionTypes.DECREASE_QUANTITY_PRODUCT,
      id: initialState.products[0].gtin,
    });
    expect(reducer).toEqual(outputState);
  });
});
