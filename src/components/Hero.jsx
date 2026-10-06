import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineArrowNarrowRight, 
  HiOutlineShieldCheck, 
  HiOutlineGlobeAlt, 
  HiOutlineTrendingUp,
  HiOutlineTruck
} from 'react-icons/hi';
import { FaShip, FaPlaneDeparture } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Decorative background grid and soft ambient light */}
      <div className="hero-ambient-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Hero Left: Text Content & CTAs */}
          <div className="hero-content animate-fade-in">
            <div className="hero-badge">
              <span className="badge-pulse-dot"></span>
              <span>Leading Cross-Border Trade Partner</span>
            </div>

            <h1 className="hero-heading">
              Global Trade. <span className="text-primary-gradient">Trusted Connections.</span> Quality Products.
            </h1>

            <p className="hero-description">
              We connect businesses across international markets by sourcing, importing and exporting quality products with reliable service and professional business support.
            </p>

            <div className="hero-cta-group">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <HiOutlineArrowNarrowRight className="btn-icon" />
              </Link>
              <Link to="/deals" className="btn btn-outline-primary btn-lg">
                Start a Business Deal
              </Link>
            </div>

            {/* Micro Feature Indicators */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <HiOutlineShieldCheck className="highlight-icon text-secondary" />
                <span>Verified Quality Inspection</span>
              </div>
              <div className="highlight-item">
                <HiOutlineTruck className="highlight-icon text-primary" />
                <span>End-to-End Multimodal Logistics</span>
              </div>
              <div className="highlight-item">
                <HiOutlineGlobeAlt className="highlight-icon text-secondary" />
                <span>Direct Port-to-Port Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Professional Visual Graphics */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="International cargo shipping containers and global trade vessels"
                className="hero-main-img"
                loading="eager"
              />
              <div className="hero-img-overlay"></div>

              {/* Floating Badge 1: Logistics Badge */}
              <div className="floating-badge badge-top animate-float">
                <div className="floating-icon-box bg-primary-soft text-primary">
                  <FaShip />
                </div>
                <div>
                  <div className="floating-badge-title">Sea & Air Freight</div>
                  <div className="floating-badge-subtitle">Global Ports Coverage</div>
                </div>
              </div>

              {/* Floating Badge 2: Verified Deals */}
              <div className="floating-badge badge-bottom animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="floating-icon-box bg-secondary-light text-secondary">
                  <HiOutlineTrendingUp />
                </div>
                <div>
                  <div className="floating-badge-title">100+ Trade Deals</div>
                  <div className="floating-badge-subtitle">99.4% On-Time Clearance</div>
                </div>
              </div>
            </div>

            {/* Quick Transport Mode Ribbon */}
            <div className="transport-modes-ribbon">
              <span className="mode-tag"><FaShip /> Ocean Cargo</span>
              <span className="mode-tag"><FaPlaneDeparture /> Air Freight Express</span>
              <span className="mode-tag"><HiOutlineTruck /> Overland Transit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
