
import * as types from '../../../types';

interface IProps extends types.Product {
  onAddToCart: () => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  quantityValue: number;
}

const ProductDetails = ({
  name,
  recommendedRetailPrice,
  recommendedRetailPriceCurrency,
  imageUrl,
  brandName,
  categoryName,
  quantityValue,
  onAddToCart,
  onQuantityChange
}: IProps) => {
  return (
    <div className="mt-4">
      <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-1xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 border border-gray-200 rounded-md">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            <img src={imageUrl} alt={brandName} className="object-center object-cover" />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{name}</h3>
            <p className="text-1xl text-gray-900 sm:pr-12">{brandName} - {categoryName}</p>
            <section aria-labelledby="information-heading" className="mt-2">
              <p className="text-1xl text-gray-900">{recommendedRetailPrice} {recommendedRetailPriceCurrency}</p>
            </section>
            <section aria-labelledby="options-heading" className="mt-10">
              <input className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="qty" type="number" placeholder="Qty" min={1} max={100} onChange={onQuantityChange} value={quantityValue} />
              <button
                onClick={onAddToCart}
                className="mt-6 w-2/4 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;