import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [modalProduct, setModalProduct] = useState(null);

  // Filter products based on search input, category, and trade type
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Search Query Match
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Category Match
      const matchesCategory =
        selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();

      // 3. Trade Type Match
      const matchesType =
        selectedType === 'All' || product.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedType('All');
  };

  return (
    <div className="products-page">
      {/* Page Hero Header */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Products</span>
          </div>
          <h1 className="page-hero-title">Product Catalog</h1>
          <p className="page-hero-subtitle">
            Explore our curated selection of high-grade agricultural produce, spices, food ingredients, textiles, and imported industrial machinery.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="section-padding bg-light">
        <div className="container">
          {/* Interactive Filter & Search Controls */}
          <ProductFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            totalResults={filteredProducts.length}
            onResetFilters={handleResetFilters}
          />

          {/* Products Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setModalProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <HiOutlineEmojiSad className="empty-icon" />
              <h3 className="empty-title">No matching products found</h3>
              <p className="empty-text">
                We couldn't find any products matching your current search or filter criteria.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleResetFilters}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
