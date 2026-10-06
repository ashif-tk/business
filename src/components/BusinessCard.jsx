import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

/**
 * Reusable BusinessCard Component
 * Used across Home (What We Do & Why Choose Us), About, and Service Pages
 */
const BusinessCard = ({
  icon,
  title,
  description,
  linkText = 'Learn More',
  linkUrl,
  badge,
  className = '',
  stepNumber
}) => {
  return (
    <div className={`business-card card ${className}`}>
      {stepNumber && (
        <div className="card-step-badge">
          Step {stepNumber}
        </div>
      )}
      
      <div className="card-header-icon">
        <div className="card-icon-bubble">
          {icon}
        </div>
        {badge && <span className="badge badge-secondary">{badge}</span>}
      </div>

      <div className="card-content-body">
        <h3 className="card-heading">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      {linkUrl && (
        <div className="card-footer-action">
          <Link to={linkUrl} className="card-action-link">
            <span>{linkText}</span>
            <HiOutlineArrowNarrowRight className="action-arrow" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
