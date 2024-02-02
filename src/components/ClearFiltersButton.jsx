// ClearFiltersButton.js
import React from 'react';

const ClearFiltersButton = ({ onClearFilters }) => (
  <button
    className="w-full p-2 border mb-4 text-white bg-gray-600 hover:bg-gray-700 rounded-md focus:outline-none"
    onClick={onClearFilters}
  >
    Clear Filters
  </button>
);

export default ClearFiltersButton;
