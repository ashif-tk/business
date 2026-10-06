import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  HiX, 
  HiOutlineLocationMarker, 
  HiOutlineCheckCircle, 
  HiOutlineTag,
  HiOutlineDocumentText,
  HiOutlineCube
} from 'react-icons/hi';

const ProductModal = ({ product, onClose }) => {
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleRequestQuote = () => {
    onClose();
    // Navigate to /deals with query param and state to auto-fill the inquiry form!
    navigate(`/deals?product=${encodeURIComponent(product.name)}&type=${encodeURIComponent(product.type)}`, {
      state: { selectedProduct: product.name, dealType: product.type }
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close product preview"
        >
          <HiX />
        </button>

        <div className="modal-grid">
          {/* Modal Left: Product Image */}
          <div className="modal-img-col">
            <img 
              src={product.image} 
              alt={product.name} 
              className="modal-product-img"
            />
            <div className="modal-badges-row">
              <span className={`badge ${product.type === 'Export' ? 'badge-export' : 'badge-import'}`}>
                {product.type} Commodity
              </span>
              <span className="badge badge-primary">
                {product.category}
              </span>
            </div>
          </div>

          {/* Modal Right: Product Details & Action */}
          <div className="modal-info-col">
            <div className="modal-header-meta">
              <span className="origin-badge">
                <HiOutlineLocationMarker /> Origin: {product.origin}
              </span>
              <span className="stock-badge">
                <HiOutlineCheckCircle className="text-secondary" /> {product.availability}
              </span>
            </div>

            <h2 id="modal-product-title" className="modal-title">
              {product.name}
            </h2>

            <p className="modal-description">
              {product.description}
            </p>

            {/* Product Specifications Table / Specs */}
            <div className="modal-specs-box">
              <h4 className="specs-heading">Export Specifications:</h4>
              <div className="specs-list">
                {product.minOrderQuantity && (
                  <div className="spec-row">
                    <span className="spec-key"><HiOutlineCube /> Minimum Order:</span>
                    <span className="spec-val">{product.minOrderQuantity}</span>
                  </div>
                )}
                {product.packaging && (
                  <div className="spec-row">
                    <span className="spec-key"><HiOutlineDocumentText /> Packaging:</span>
                    <span className="spec-val">{product.packaging}</span>
                  </div>
                )}
                {product.grade && (
                  <div className="spec-row">
                    <span className="spec-key"><HiOutlineTag /> Quality Grade:</span>
                    <span className="spec-val">{product.grade}</span>
                  </div>
                )}
                {product.hsCode && (
                  <div className="spec-row">
                    <span className="spec-key"><HiOutlineTag /> HS Code:</span>
                    <span className="spec-val">{product.hsCode}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Group */}
            <div className="modal-actions-row">
              <button 
                type="button" 
                className="btn btn-primary btn-block"
                onClick={handleRequestQuote}
              >
                Request Quote For This Product
              </button>
              <Link 
                to={`/products/${product.id}`} 
                className="btn btn-outline-primary btn-block"
                onClick={onClose}
              >
                View Full Product Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
