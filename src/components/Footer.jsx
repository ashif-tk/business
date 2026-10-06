import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiGlobeAlt, 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaShieldAlt 
} from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {

  return (
    <footer className="footer-wrapper">
      {/* Upper Footer Newsletter / Trust Strip */}
      <div className="footer-top-strip">
        <div className="container footer-strip-content">
          <div className="strip-item">
            <FaShieldAlt className="strip-icon" />
            <div>
              <h4 className="strip-title">Certified Global Exporter</h4>
              <p className="strip-desc">Verified international trade compliance and quality checks</p>
            </div>
          </div>
          <div className="strip-item">
            <HiGlobeAlt className="strip-icon" />
            <div>
              <h4 className="strip-title">Worldwide Sea & Air Freight</h4>
              <p className="strip-desc">Reliable logistics pipelines across GCC, Europe, and Asia</p>
            </div>
          </div>
          <div className="strip-cta">
            <Link to="/deals" className="btn btn-secondary btn-sm">
              Initiate Trade Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Company Profile */}
          <div className="footer-col col-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon-badge footer-badge">
                <HiGlobeAlt />
              </div>
              <span className="logo-brand">
                Global<span className="logo-accent">Trade</span>
              </span>
            </Link>
            <p className="footer-tagline">
              {companyInfo.name} - {companyInfo.tagline}.
            </p>
            <p className="footer-bio">
              We specialize in reliable supply chain partnerships, bridging Indian agriculture, spices, food, and industrial commodities with buyers worldwide.
            </p>

            {/* Social Links */}
            <div className="footer-socials">
              <a 
                href={companyInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="social-btn"
              >
                <FaFacebookF />
              </a>
              <a 
                href={companyInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="social-btn"
              >
                <FaInstagram />
              </a>
              <a 
                href={companyInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="social-btn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href={companyInfo.socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="social-btn whatsapp-btn"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Products Catalog
                </Link>
              </li>
              <li>
                <Link to="/analytics">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Trade Analytics & Live Rates
                </Link>
              </li>
              <li>
                <Link to="/imports">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Import Solutions
                </Link>
              </li>
              <li>
                <Link to="/exports">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Export Solutions
                </Link>
              </li>
              <li>
                <Link to="/deals">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Business Deals
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Business Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/deals?type=Sourcing">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Product Sourcing
                </Link>
              </li>
              <li>
                <Link to="/imports">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Global Import
                </Link>
              </li>
              <li>
                <Link to="/exports">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> International Export
                </Link>
              </li>
              <li>
                <Link to="/deals?type=Wholesale">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Wholesale & Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/deals?type=Partnership">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Long-Term Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <HiOutlineArrowNarrowRight className="link-arrow" /> Quality Inspections
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <HiOutlineLocationMarker className="contact-icon" />
                <div>
                  <strong>Registered Office:</strong>
                  <p>{companyInfo.contact.fullAddress}</p>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlineMail className="contact-icon" />
                <div>
                  <strong>Email:</strong>
                  <p>
                    <a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlinePhone className="contact-icon" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p>
                    <a href={`tel:${companyInfo.contact.phoneTel}`}>{companyInfo.contact.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            © {CURRENT_YEAR} {companyInfo.name}. All Rights Reserved.
          </p>
          <div className="footer-meta-links">
            <span>Designed for Modern Global Commerce</span>
            <span className="dot">•</span>
            <Link to="/contact">Privacy & Compliance</Link>
            <span className="dot">•</span>
            <Link to="/deals">Terms of Trading</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
