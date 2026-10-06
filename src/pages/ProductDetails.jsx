import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { 
  HiOutlineLocationMarker, 
  HiOutlineCheckCircle, 
  HiOutlineCube, 
  HiOutlineDocumentText, 
  HiOutlineTag,
  HiOutlineArrowNarrowLeft,
  HiOutlineShieldCheck,
  HiOutlineQuestionMarkCircle
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="section-padding container text-center">
        <div className="empty-state-box" style={{ maxWidth: '600px', margin: '4rem auto' }}>
          <HiOutlineQuestionMarkCircle className="empty-icon text-primary" />
          <h2 className="empty-title">Product Not Found</h2>
          <p className="empty-text">
            The commodity or product you are looking for does not exist in our current catalog.
          </p>
          <Link to="/products" className="btn btn-primary">
            <HiOutlineArrowNarrowLeft /> Return to Product Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleRequestQuote = () => {
    navigate(`/deals?product=${encodeURIComponent(product.name)}&type=${encodeURIComponent(product.type)}`, {
      state: { selectedProduct: product.name, dealType: product.type }
    });
  };

  const whatsappInquiryUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
    `Hello GlobalTrade, I am inquiring about: ${product.name} (Origin: ${product.origin}, MOQ: ${product.minOrderQuantity || 'Wholesale'}). Please provide pricing.`
  )}`;

  return (
    <div className="product-details-page">
      {/* Breadcrumb Header */}
      <section className="page-hero" style={{ padding: '3.5rem 0' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{product.name}</span>
          </div>
          <h1 className="page-hero-title">{product.name}</h1>
          <p className="page-hero-subtitle">
            Export Grade Commodity | Certified {product.category} Produce
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.25fr', gap: '3.5rem', alignItems: 'start' }} className="details-layout-grid">
            {/* Left: Product Image Gallery */}
            <div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '460px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', display: 'flex', gap: '0.5rem' }}>
                  <span className={`badge ${product.type === 'Export' ? 'badge-export' : 'badge-import'}`}>
                    {product.type} Commodity
                  </span>
                  <span className="badge badge-primary">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Quality & Logistics Assurance Box */}
              <div style={{ marginTop: '1.5rem', background: 'var(--light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dark)' }}>
                  <HiOutlineShieldCheck className="text-secondary" style={{ fontSize: '1.3rem' }} /> Quality & Shipping Assurance
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Pre-shipment inspection with SGS / Bureau Veritas available upon buyer request. Fumigation certificates, Certificate of Origin, and Phytosanitary documentation included.
                </p>
              </div>
            </div>

            {/* Right: Specifications & Inquiries */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <HiOutlineLocationMarker className="text-primary" /> Origin: <strong>{product.origin}</strong>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <HiOutlineCheckCircle className="text-secondary" /> Availability: <strong>{product.availability}</strong>
                </span>
              </div>

              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                {product.name}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Specifications Card */}
              <div className="card" style={{ padding: '1.75rem', marginBottom: '2rem', background: '#fafbfc' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--dark)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                  Technical Trade Specifications
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="specs-subgrid">
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HiOutlineCube /> Minimum Order Quantity (MOQ)
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--dark)' }}>{product.minOrderQuantity || 'Negotiable'}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HiOutlineDocumentText /> Export Packaging
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--dark)' }}>{product.packaging || 'Standard Export Packaging'}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HiOutlineTag /> Quality Grade / Calibre
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--dark)' }}>{product.grade || 'Commercial Grade A'}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HiOutlineTag /> Harmonized Tariff Code (HS Code)
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--dark)' }}>{product.hsCode || 'Available upon request'}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleRequestQuote}
                  style={{ flex: 1, minWidth: '220px' }}
                >
                  Request a Formal Quote
                </button>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <FaWhatsapp style={{ fontSize: '1.25rem' }} /> Inquire via WhatsApp
                </a>
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Need custom branding or private labeling? Mention your packaging specs in the quote form.
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-light)', paddingTop: '3.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '2rem' }}>
                Related {product.category} Products
              </h3>
              <div className="products-grid">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
