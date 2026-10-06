import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  HiOutlineCheckCircle, 
  HiOutlineShieldCheck, 
  HiOutlineDocumentText, 
  HiOutlineClock,
  HiOutlineTrash,
  HiOutlineSparkles
} from 'react-icons/hi';
import { FaHandshake } from 'react-icons/fa';

const Deals = () => {
  const location = useLocation();

  // Parse any query params if user arrived with ?product=... or ?type=...
  const queryParams = new URLSearchParams(location.search);
  const initialProduct = queryParams.get('product') || location.state?.selectedProduct || '';
  const initialType = queryParams.get('type') || location.state?.dealType || 'Export';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    country: '',
    businessType: 'Importer',
    productInterestedIn: initialProduct,
    dealType: initialType,
    quantity: '',
    budget: '',
    message: '',
    agreeTerms: false
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  
  // Lazy initialize saved demo enquiries from localStorage
  const [savedEnquiries, setSavedEnquiries] = useState(() => {
    try {
      const stored = localStorage.getItem('globaltrade_enquiries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  
  const [showHistory, setShowHistory] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid business email address';
    }

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.productInterestedIn.trim()) newErrors.productInterestedIn = 'Please specify the product or commodity';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to be contacted regarding this enquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate rapid enterprise submission process
    setTimeout(() => {
      const referenceId = 'GT-' + Math.floor(100000 + Math.random() * 900000);
      const submissionRecord = {
        ...formData,
        id: referenceId,
        date: new Date().toLocaleString()
      };

      // Store in localStorage for demo review
      const updatedList = [submissionRecord, ...savedEnquiries];
      setSavedEnquiries(updatedList);
      try {
        localStorage.setItem('globaltrade_enquiries', JSON.stringify(updatedList));
      } catch (err) {
        console.error('Storage error', err);
      }

      setSubmittedData(submissionRecord);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        country: '',
        businessType: 'Importer',
        productInterestedIn: '',
        dealType: 'Export',
        quantity: '',
        budget: '',
        message: '',
        agreeTerms: false
      });
    }, 700);
  };

  const handleClearHistory = () => {
    localStorage.removeItem('globaltrade_enquiries');
    setSavedEnquiries([]);
  };

  return (
    <div className="deals-page">
      {/* Page Hero Header */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Business Deals</span>
          </div>
          <h1 className="page-hero-title">Start a Business Deal</h1>
          <p className="page-hero-subtitle">
            Tell us what you are looking for and our team will contact you with suitable product and trading options.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section-padding bg-light">
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Success Banner if just submitted */}
          {submittedData && (
            <div className="alert alert-success animate-fade-in" style={{ padding: '1.75rem', marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <HiOutlineCheckCircle style={{ fontSize: '2.5rem', color: '#059669', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#065f46', marginBottom: '0.4rem' }}>
                    Thank you! Your business enquiry has been submitted successfully.
                  </h3>
                  <p style={{ color: '#047857', marginBottom: '0.5rem', fontSize: '0.98rem' }}>
                    Reference Tracking Number: <strong>#{submittedData.id}</strong>. A dedicated commercial trade officer will analyze your request and reply to <strong>{submittedData.email}</strong> within 24 business hours.
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#065f46' }}>
                    A demo copy of your enquiry has also been recorded in your local browser storage.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="form-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--dark)' }}>
                  Commercial Trade Enquiry Form
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Please fill in your company and commodity requirements with as much detail as possible.
                </p>
              </div>

              {savedEnquiries.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowHistory(!showHistory)}
                  className="btn btn-outline-primary btn-sm"
                >
                  <HiOutlineDocumentText /> {showHistory ? 'Hide Stored Quotes' : `View Saved Demo Quotes (${savedEnquiries.length})`}
                </button>
              )}
            </div>

            {/* Saved Enquiries Drawer for demo verification */}
            {showHistory && savedEnquiries.length > 0 && (
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>
                    Saved Demo Enquiries (Browser LocalStorage)
                  </h4>
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="btn btn-sm"
                    style={{ color: '#ef4444', borderColor: '#fca5a5' }}
                  >
                    <HiOutlineTrash /> Clear History
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '220px', overflowY: 'auto' }}>
                  {savedEnquiries.map((enquiry) => (
                    <div key={enquiry.id} style={{ background: 'var(--white)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--primary)' }}>
                        <span>Ref #{enquiry.id} - {enquiry.companyName} ({enquiry.country})</span>
                        <span style={{ color: 'var(--text-muted)' }}>{enquiry.date}</span>
                      </div>
                      <div>Product: <strong>{enquiry.productInterestedIn}</strong> | Type: <strong>{enquiry.dealType}</strong> | Qty: {enquiry.quantity || 'N/A'}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: Full Name & Company Name */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-control ${errors.fullName ? 'error' : ''}`}
                    placeholder="e.g. John Doe / Tariq Al-Mansoor"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">
                    Company Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className={`form-control ${errors.companyName ? 'error' : ''}`}
                    placeholder="e.g. Al-Bahar General Trading LLC"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && <div className="form-error">{errors.companyName}</div>}
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Corporate Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'error' : ''}`}
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phoneNumber">
                    Phone / WhatsApp Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={`form-control ${errors.phoneNumber ? 'error' : ''}`}
                    placeholder="e.g. +971 50 123 4567 / +91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <div className="form-error">{errors.phoneNumber}</div>}
                </div>
              </div>

              {/* Row 3: Country & Business Type */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="country">
                    Country of Operation <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className={`form-control ${errors.country ? 'error' : ''}`}
                    placeholder="e.g. UAE, Saudi Arabia, Germany, Singapore"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && <div className="form-error">{errors.country}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="businessType">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="form-control"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="Importer">Importer / Overseas Buyer</option>
                    <option value="Exporter">Exporter / Supplier</option>
                    <option value="Wholesaler">Wholesaler / Distributor</option>
                    <option value="Retailer">Supermarket / Retail Chain</option>
                    <option value="Manufacturer">Manufacturer / Industrial User</option>
                    <option value="Sourcing Agent">Broker / Sourcing Agent</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Product Interested In & Deal Type */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="productInterestedIn">
                    Product / Commodity Interested In <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="productInterestedIn"
                    name="productInterestedIn"
                    className={`form-control ${errors.productInterestedIn ? 'error' : ''}`}
                    placeholder="e.g. Tellicherry Black Pepper, Cardamom, Cashews"
                    value={formData.productInterestedIn}
                    onChange={handleChange}
                  />
                  {errors.productInterestedIn && <div className="form-error">{errors.productInterestedIn}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="dealType">
                    Deal Type
                  </label>
                  <select
                    id="dealType"
                    name="dealType"
                    className="form-control"
                    value={formData.dealType}
                    onChange={handleChange}
                  >
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                    <option value="Product Sourcing">Product Sourcing</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Quantity & Budget */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control"
                    placeholder="e.g. 1 x 20ft FCL Container / 5 Metric Tons"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="budget">
                    Target Budget / Target Pricing (USD or Local)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    className="form-control"
                    placeholder="e.g. CIF Jebel Ali / Target $8,500/MT"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 6: Detailed Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Specific Requirements / Packaging / Quality Specs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Provide specifications such as grade, moisture percentage, customized private labeling, port of destination, or target shipping timeline..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Agreement Checkbox */}
              <div className="form-group">
                <label className="form-check" htmlFor="agreeTerms">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to be contacted regarding my business enquiry and confirm that the information provided is accurate for commercial evaluation. <span className="required">*</span>
                  </span>
                </label>
                {errors.agreeTerms && <div className="form-error">{errors.agreeTerms}</div>}
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '2rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Processing Enquiry...'
                  ) : (
                    <>
                      <FaHandshake /> Send Business Enquiry
                    </>
                  )}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <HiOutlineClock /> Reply within 24h
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <HiOutlineShieldCheck /> Strictly Confidential
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <HiOutlineSparkles /> Free Consultation & Rate Sheet
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
