import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight, HiOutlineLocationMarker, HiOutlineCheckCircle } from 'react-icons/hi';

const ProductCard = ({ product, onQuickView }) => {
  const {
    id,
    name,
    category,
    shortDescription,
    description,
    image,
    origin,
    availability,
    type,
    minOrderQuantity
  } = product;

  return (
    <div className="product-card card">
      {/* Product Image Frame */}
      <div className="product-img-frame">
        <img
          src={image}
          alt={name}
          className="product-card-img"
          loading="lazy"
        />
        {/* Type & Availability Badges */}
        <div className="product-card-badges">
          <span className={`badge ${type === 'Export' ? 'badge-export' : 'badge-import'}`}>
            {type}
          </span>
          <span className="badge badge-primary">
            {category}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="product-card-body">
        <div className="product-meta-row">
          <span className="product-origin">
            <HiOutlineLocationMarker className="meta-icon" /> {origin}
          </span>
          <span className="product-stock">
            <HiOutlineCheckCircle className="meta-icon text-secondary" /> {availability}
          </span>
        </div>

        <h3 className="product-title">
          <Link to={`/products/${id}`} title={name}>
            {name}
          </Link>
        </h3>

        <p className="product-desc">
          {shortDescription || (description && description.slice(0, 95) + '...')}
        </p>

        {minOrderQuantity && (
          <div className="product-moq-chip">
            <span>MOQ:</span> <strong>{minOrderQuantity}</strong>
          </div>
        )}

        {/* Card Actions */}
        <div className="product-card-footer">
          <Link to={`/products/${id}`} className="btn btn-outline-primary btn-sm btn-full">
            View Details <HiOutlineArrowNarrowRight />
          </Link>
          {onQuickView && (
            <button
              type="button"
              className="quick-view-btn"
              onClick={() => onQuickView(product)}
              title="Quick preview"
            >
              Quick View
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
