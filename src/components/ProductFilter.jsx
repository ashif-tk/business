import React from 'react';
import { HiOutlineSearch, HiX, HiFilter } from 'react-icons/hi';
import { productCategories, productTypes } from '../data/products';

const ProductFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  totalResults,
  onResetFilters
}) => {
  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || selectedType !== 'All';

  return (
    <div className="product-filter-container">
      {/* Top Filter Bar: Search Box and Type Filter */}
      <div className="filter-top-row">
        {/* Search Input */}
        <div className="search-box-wrapper">
          <HiOutlineSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search products by name, category, or origin..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              <HiX />
            </button>
          )}
        </div>

        {/* Type Toggle Buttons (All / Export / Import) */}
        <div className="type-filter-group">
          <span className="filter-label-inline"><HiFilter /> Trade Type:</span>
          <div className="type-buttons">
            {productTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`type-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => onTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="category-pills-row">
        <div className="category-scroll-container">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reset Filter Button if active */}
        {isFiltered && (
          <button
            type="button"
            className="filter-reset-btn"
            onClick={onResetFilters}
            title="Reset all filters"
          >
            <HiX /> Clear Filters
          </button>
        )}
      </div>

      {/* Results Status Bar */}
      <div className="filter-status-bar">
        <p className="results-count">
          Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'product' : 'products'}
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          {selectedType !== 'All' && <span> ({selectedType}s)</span>}
          {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductFilter;
