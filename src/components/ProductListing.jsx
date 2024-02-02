// ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ filteredProducts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductListing;
