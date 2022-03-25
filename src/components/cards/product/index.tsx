import * as types from '../../../types';

const Product = ({
  name,
  brandName,
  recommendedRetailPrice,
  recommendedRetailPriceCurrency,
  imageUrl,
  gtin
}: types.Product) => {

  return (
    <a href={`/products/${gtin}`} className="group rounded-md p-3 border border-gray-200">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={imageUrl}
          alt={brandName}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h2 className="mt-4 text-md text-gray-900 truncate">{name}</h2>
      <p className="text-sm text-gray-500" >{brandName}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{recommendedRetailPrice} {recommendedRetailPriceCurrency}</p>
    </a>
  );
};
export default Product;