import React from 'react';

/**
 * SectionTitle Component
 * Standardizes section headings with optional subtitle/tag and description
 */
const SectionTitle = ({
  tag,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`}>
      {tag && <span className="section-tag">{tag}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionTitle;
