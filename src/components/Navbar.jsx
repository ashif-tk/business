import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  HiMenuAlt3, 
  HiX, 
  HiGlobeAlt, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker 
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for shadow depth adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Trade Analytics', path: '/analytics', isLive: true },
    { title: 'Imports', path: '/imports' },
    { title: 'Exports', path: '/exports' },
    { title: 'Business Deals', path: '/deals' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar-wrapper">
      {/* Top Header Contact Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <HiOutlineLocationMarker className="topbar-icon" />
              <span>{companyInfo.contact.location}</span>
            </span>
            <a href={`mailto:${companyInfo.contact.email}`} className="topbar-item">
              <HiOutlineMail className="topbar-icon" />
              <span>{companyInfo.contact.email}</span>
            </a>
            <a href={`tel:${companyInfo.contact.phoneTel}`} className="topbar-item">
              <HiOutlinePhone className="topbar-icon" />
              <span>{companyInfo.contact.phone}</span>
            </a>
          </div>
          <div className="topbar-right">
            <span className="topbar-text">Hours: Mon - Sat 9:00 AM - 6:00 PM</span>
            <a 
              href={companyInfo.socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-whatsapp"
              title="Chat with our trade team on WhatsApp"
            >
              <FaWhatsapp /> <span>Quick Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="GlobalTrade Exports Home">
            <div className="logo-icon-badge">
              <HiGlobeAlt className="logo-svg" />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-brand">
                Global<span className="logo-accent">Trade</span>
              </span>
              <span className="logo-sub">EXPORTS & IMPORTS</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu desktop-menu">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''} ${link.isLive ? 'nav-link-live' : ''}`
                  }
                >
                  {link.title}
                  {link.isLive && <span className="nav-live-badge">LIVE</span>}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Action Button */}
          <div className="navbar-actions">
            <Link to="/deals" className="btn btn-primary btn-sm cta-quote-btn">
              Request a Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <div className={`mobile-menu-container ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-inner container">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="mobile-nav-item">
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.title}</span>
                    {link.isLive && <span className="nav-live-badge">LIVE</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <Link
                to="/deals"
                className="btn btn-primary btn-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Quote
              </Link>
              <div className="mobile-contact-strip">
                <p><strong>Direct Helpline:</strong> {companyInfo.contact.phone}</p>
                <p><strong>Email:</strong> {companyInfo.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
