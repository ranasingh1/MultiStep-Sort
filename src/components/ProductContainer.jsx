import React, { useState, useEffect } from 'react';
import { PRODUCT_API } from '../constants';
import ProductListing from './ProductListing';
import ClearFiltersButton from './ClearFiltersButton';
import TextInput from './TextInput';
import FilterButton from './FilterButton';
import Header from './Header';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterByCategory, setFilterByCategory] = useState('');
  const [filterByDiscount, setFilterByDiscount] = useState('');
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [showBrandsPopup, setShowBrandsPopup] = useState(false);
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);

  const clearFilters = () => {
    setSelectedBrand('');
    setSelectedCategory('');
    setShowBrandsPopup(false);
    setShowCategoriesPopup(false);
    setFilterByCategory('');
    setFilterByDiscount('');
  };

  useEffect(() => {
    fetch(PRODUCT_API)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setUniqueBrands([...new Set(data.products.map(product => product.brand))]);
        setUniqueCategories([...new Set(data.products.map(product => product.category))]);
      });
  }, []);

  useEffect(() => {
    const filteredAndSortedProducts = products
      .filter(product =>
        (!selectedBrand || product.brand === selectedBrand) &&
        (!selectedCategory || product.category === selectedCategory) &&
        product.category.toLowerCase().includes(filterByCategory.toLowerCase()) &&
        (!filterByDiscount || (
          filterByDiscount === 'lessThan25' && Number(product.discountPercentage) < 25) ||
          (Number(product.discountPercentage) >= parseInt(filterByDiscount))
        )
      )
      .sort((a, b) => {
        if (sortBy === 'priceLowToHigh') return a.price - b.price;
        if (sortBy === 'priceHighToLow') return b.price - a.price;
        if(sortBy === 'rating') return b.rating-a.rating;
        return 0;
      });

    setFilteredProducts(filteredAndSortedProducts);
  }, [sortBy, selectedBrand, selectedCategory, filterByCategory, filterByDiscount, products]);

  const handleFilter = (value, setSelected, setShowPopup) => {
    setSelected(value);
    setShowPopup(false);
  };

  return (
    <>
    <div className="container mx-auto mt-8 flex justify-center">
      <aside className=" max-sm:w-[50%] md:w-1/4 md:ml-14 mt-14 h-[80vh]   sticky  top-20 p-4  bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        {/* Brand Filter */}
        <FilterButton
          label="Select Brand"
          selectedValue={selectedBrand}
          options={uniqueBrands}
          onSelect={(brand) => handleFilter(brand, setSelectedBrand, setShowBrandsPopup)}
          showPopup={showBrandsPopup}
          setShowPopup={setShowBrandsPopup}
        />

        {/* Category Filter */}
        <FilterButton
          label="Select Category"
          selectedValue={selectedCategory}
          options={uniqueCategories}
          onSelect={(category) => handleFilter(category, setSelectedCategory, setShowCategoriesPopup)}
          showPopup={showCategoriesPopup}
          setShowPopup={setShowCategoriesPopup}
        />

        {/* Search by Category */}
        <TextInput
          placeholder="Search by category"
          value={filterByCategory}
          onChange={(e) => setFilterByCategory(e.target.value)}
        />

        {/* Minimum Discount Percentage */}
        <TextInput
          placeholder="Minimum discount percentage"
          value={filterByDiscount}
          onChange={(e) => setFilterByDiscount(e.target.value)}
        />

        {/* Clear Filters Button */}
        <ClearFiltersButton onClearFilters={clearFilters} />

        {/* Sort By Dropdown */}
        <label htmlFor="sort" className="text-lg font-semibold mb-2">Sort By:</label>
        <select
          id="sort"
          className="w-full p-2 border mb-4 rounded-md focus:outline-none"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
          <option value= "rating">Rating</option>
        </select>
      </aside>

      {/* Product Listing Section */}
      <section className="w-3/4 p-4">
        <div className="flex justify-center items-center mb-4">
          <p className="text-gray-500">Search Results: {filteredProducts.length}</p>
        </div>

        {/* Product Listing Component */}
        <ProductListing filteredProducts={filteredProducts} />
      </section>
    </div>
    </>
  );
};

export default ProductContainer;
