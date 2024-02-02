// ProductFilter.js
import React from 'react';
import ProductFilterButton from './FilterButton';
import ProductFilterInput from './ProductFilterInput';

const ProductFilter = ({
  label,
  selected,
  showPopup,
  popupItems,
  onClick,
  placeholder,
  inputValue,
  onInputChange,
}) => (
  <div className="mb-6">
    {label && <h2 className="text-2xl font-bold mb-4">{label}</h2>}
    {selected !== undefined && (
      <ProductFilterButton
        onClick={onClick}
        selected={selected}
        label={label}
        showPopup={showPopup}
        popupItems={popupItems}
      />
    )}
    {placeholder && (
      <ProductFilterInput placeholder={placeholder} value={inputValue} onChange={onInputChange} />
    )}
  </div>
);

export default ProductFilter;
