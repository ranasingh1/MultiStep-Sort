import React from 'react';

const FilterButton = ({ label, selectedValue, options, onSelect, showPopup, setShowPopup }) => (
  <div className="relative">
    <button
      className={`w-full p-2 border mb-2 text-left rounded-md focus:outline-none ${showPopup ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
      onClick={() => {
        setShowPopup(!showPopup);
      }}
    >
      {selectedValue || label}
    </button>
    {showPopup && (
      <div className="absolute top-full z-10 h-44 overflow-x-scroll left-0 bg-white p-2 border rounded-md shadow-md">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-2 border mb-2 text-left rounded-md focus:outline-none ${selectedValue === option ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default FilterButton;
