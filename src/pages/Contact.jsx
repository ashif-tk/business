import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane
} from 'react-icons/hi';
import { FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }

    if (!formData.phone.trim()) errs.phone = 'Please provide your phone number';
    if (!formData.message.trim()) errs.message = 'Please enter your message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
    companyInfo.contact.whatsappMessage
  )}`;

  return (
    <div className="contact-page">
      {/* Page Hero Header */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Contact</span>
          </div>
          <h1 className="page-hero-title">Let's Talk Business</h1>
          <p className="page-hero-subtitle">
            Have questions about product availability, export documentation, or container freight quotes? Reach out directly to our commercial trade desk.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '3rem', alignItems: 'start' }} className="details-layout-grid">
            {/* Left: Contact Info & WhatsApp Card */}
            <div>
              <div className="contact-details-card">
                <span className="section-tag" style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                  Direct Contact
                </span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.75rem' }}>
                  Get in Touch
                </h2>

                <div className="contact-info-list">
                  {/* Email */}
                  <div className="info-card">
                    <div className="info-icon-box">
                      <HiOutlineMail />
                    </div>
                    <div>
                      <div className="info-title">Corporate Email</div>
                      <div className="info-val">
                        <a href={`mailto:${companyInfo.contact.email}`} style={{ color: 'var(--primary)' }}>
                          {companyInfo.contact.email}
                        </a>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical response in 2-4 hours</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="info-card">
                    <div className="info-icon-box">
                      <HiOutlinePhone />
                    </div>
                    <div>
                      <div className="info-title">Direct Trade Helpline</div>
                      <div className="info-val">
                        <a href={`tel:${companyInfo.contact.phoneTel}`} style={{ color: 'var(--dark)' }}>
                          {companyInfo.contact.phone}
                        </a>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>International calling & WhatsApp enabled</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="info-card">
                    <div className="info-icon-box">
                      <HiOutlineLocationMarker />
                    </div>
                    <div>
                      <div className="info-title">Export Operations Hub</div>
                      <div className="info-val">{companyInfo.contact.location}</div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {companyInfo.contact.fullAddress}
                      </span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="info-card">
                    <div className="info-icon-box">
                      <HiOutlineClock />
                    </div>
                    <div>
                      <div className="info-title">Business Operating Hours</div>
                      <div className="info-val">{companyInfo.contact.businessHours}</div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Timezone: {companyInfo.contact.timezone}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Card */}
                <div className="whatsapp-direct-card">
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#065f46', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                      Fast-Track via WhatsApp
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#047857', marginBottom: '0.75rem' }}>
                      Connect immediately with an on-duty international trade specialist.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Chat on WhatsApp
                    </a>
                  </div>
                  <FaWhatsapp className="whatsapp-card-icon" />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="form-card">
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.5rem' }}>
                  Send Us a Direct Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
                  Fill in your details below and our trading representatives will get back to you promptly.
                </p>

                {submitted && (
                  <div className="alert alert-success animate-fade-in" style={{ marginBottom: '1.75rem' }}>
                    <HiOutlineCheckCircle style={{ fontSize: '1.8rem', color: '#059669', flexShrink: 0 }} />
                    <div>
                      <strong>Message Sent Successfully!</strong>
                      <p style={{ fontSize: '0.88rem', margin: 0 }}>
                        Thank you for reaching out. We have received your query and will reply via email/phone shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      className={`form-control ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Michael Smith / Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>

                  {/* Email & Phone in 2 cols */}
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactEmail">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        className={`form-control ${errors.email ? 'error' : ''}`}
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactPhone">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        className={`form-control ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 / +971 ..."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactMessage">
                      Your Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows="5"
                      className={`form-control ${errors.message ? 'error' : ''}`}
                      placeholder="Let us know how we can assist your business with export or import sourcing..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <HiOutlinePaperAirplane style={{ transform: 'rotate(90deg)' }} /> Send Message
                      </>
                    )}
                  </button>
                </form>

                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <FaShieldAlt className="text-secondary" /> We respect your privacy. No spam or unsolicited marketing communications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
