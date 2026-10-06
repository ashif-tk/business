import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft, HiOutlineGlobeAlt } from 'react-icons/hi';

const NotFound = () => {
  return (
    <div className="not-found-page section-padding bg-light" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <div className="empty-state-box" style={{ maxWidth: '640px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem auto' }}>
            <HiOutlineGlobeAlt />
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
            404
          </h1>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '1rem' }}>
            Page Not Found
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            The trade page, product catalog reference, or service route you are attempting to access does not exist or has been relocated.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <HiOutlineArrowNarrowLeft /> Back to Home
            </Link>
            <Link to="/products" className="btn btn-outline-primary btn-lg">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
