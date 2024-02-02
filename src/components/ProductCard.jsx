import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 mb-4 bg-white rounded-lg shadow-sm">
    <img src={product.thumbnail} className=' h-40 rounded-lg w-full'/>
      <h3 className="text-lg font-bold my-2">{product.title.toUpperCase()}</h3>
      <div className='flex gap-4'>
      <p className="text-gray-700">Rating: {product.rating} ⭐</p>
      <p className="text-gray-700">Price: Rs  {product.price}💰</p>
      </div>

    </div>
  );
};

export default ProductCard;
