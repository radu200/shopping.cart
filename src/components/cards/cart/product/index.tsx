import * as types from '../../../../types';

interface IProps extends types.CartProduct {
  onRemoveProduct: (id: string) => void;
  onIncreaseProductQty: (id: string) => void;
  onDecreaseProductQty: (id: string) => void;
}

const Product = ({
  name,
  brandName,
  totalProductPrice,
  recommendedRetailPriceCurrency,
  imageUrl,
  quantity,
  gtin,
  onRemoveProduct,
  onIncreaseProductQty,
  onDecreaseProductQty
}: IProps) => {
  return (
    <div className="py-6 px-4 mt-2 flex border border-gray-200 rounded-md">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a>{name}</a>
            </h3>
            <p className="ml-2">{totalProductPrice} {recommendedRetailPriceCurrency}</p>
          </div>
          <p>{brandName}</p>
        </div>
        <div className="inline-flex mt-2 mb-2">
          <button onClick={() => onDecreaseProductQty(gtin)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            -
          </button>
          <p className="m-3">{quantity}</p>
          <button onClick={() => onIncreaseProductQty(gtin)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            +
          </button>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>
          <div className="flex">
            <button onClick={() => onRemoveProduct(gtin)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Product;