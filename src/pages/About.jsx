import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  HiOutlineShieldCheck, 
  HiOutlineHeart, 
  HiOutlineSparkles, 
  HiOutlineBadgeCheck,
  HiOutlineThumbUp,
  HiOutlineGlobeAlt,
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { FaCheckCircle, FaAward, FaAnchor } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const About = () => {
  const coreValues = [
    {
      title: "Quality",
      desc: "We enforce stringent laboratory testing, sorting, and grading to guarantee zero defects in every export consignment.",
      icon: <HiOutlineBadgeCheck />
    },
    {
      title: "Trust",
      desc: "Our business is built on handshake integrity, honoring contracts, and standing firmly behind every trading commitment.",
      icon: <HiOutlineShieldCheck />
    },
    {
      title: "Reliability",
      desc: "Predictable schedules, verified shipping partners, and transparent tracking from port departure to destination arrival.",
      icon: <FaAnchor />
    },
    {
      title: "Transparency",
      desc: "Clear itemized pricing, transparent inspection reports, and honest communication at all stages.",
      icon: <HiOutlineSparkles />
    },
    {
      title: "Customer Satisfaction",
      desc: "Customized packaging, flexible payment terms (LC/TT), and responsive multilingual customer support.",
      icon: <HiOutlineThumbUp />
    }
  ];

  return (
    <div className="about-page">
      {/* Page Hero Header */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-hero-title">About GlobalTrade</h1>
          <p className="page-hero-subtitle">
            GlobalTrade Exports is an import and export business focused on connecting quality products with businesses and customers across global markets.
          </p>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Story Text */}
            <div>
              <span className="section-tag" style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem' }}>
                Who We Are
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Pioneering Sustainable & Reliable Cross-Border Trade
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Headquartered strategically in Kerala, India — world-renowned as the historic cradle of the global spice route and home to international maritime transshipment hubs — <strong>{companyInfo.name}</strong> operates as a full-service merchant exporter and sourcing firm.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                We bridge regional agricultural growers, certified food processors, and artisanal manufacturers with commercial buyers across the Middle East, Southeast Asia, Europe, and North America. By managing strict supplier verification, packaging, Phytosanitary certification, and multimodal logistics, we eliminate the friction in cross-border commerce.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--dark)' }}>
                  <FaCheckCircle className="text-secondary" /> APEDA & Spice Board Registered
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--dark)' }}>
                  <FaCheckCircle className="text-secondary" /> Multi-Port Logistics Operations
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--dark)' }}>
                  <FaCheckCircle className="text-secondary" /> 100% Quality Guaranteed Shipments
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--dark)' }}>
                  <FaCheckCircle className="text-secondary" /> Strict Incoterms Compliance
                </div>
              </div>

              <Link to="/deals" className="btn btn-primary">
                Partner With Us <HiOutlineArrowNarrowRight />
              </Link>
            </div>

            {/* Corporate Visual Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--white)' }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                  alt="GlobalTrade executive business trading partners in meeting"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-1.5rem', 
                  left: '1.5rem', 
                  background: 'var(--white)', 
                  padding: '1.25rem 1.75rem', 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-lg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <FaAward />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--dark)' }}>Certified Standards</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>FSSAI, ISO & Global Export Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Mission Card */}
            <div className="card" style={{ padding: '2.75rem 2.25rem', borderLeft: '6px solid var(--primary)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                <HiOutlineGlobeAlt />
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--dark)' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                "Our mission is to create reliable international trading connections while providing quality products and professional service."
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1rem' }}>
                We empower regional producers to access fair, lucrative international markets while equipping overseas importers with vetted goods and predictable logistics.
              </p>
            </div>

            {/* Vision Card */}
            <div className="card" style={{ padding: '2.75rem 2.25rem', borderLeft: '6px solid var(--secondary)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                <HiOutlineHeart />
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--dark)' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                "Our vision is to become a trusted global trading partner for businesses looking for quality products and dependable international connections."
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1rem' }}>
                We strive to be the benchmark for ethical trading, pioneering digital transparency and sustainable packaging across worldwide commercial routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="Guiding Principles"
            title="Our Core Values"
            description="The bedrock of our business ethos, ensuring mutual prosperity, transparency, and high performance across every border."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {coreValues.map((val, index) => (
              <div key={index} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    background: 'var(--primary-light)', 
                    color: 'var(--primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.75rem',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  {val.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.65rem' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Let's Build Long-Term Commercial Ties</h2>
            <p className="cta-description">
              Connect with our international trade desk to schedule an introductory consultation, request commodity samples, or discuss container contracts.
            </p>
            <div className="cta-buttons">
              <Link to="/deals" className="btn btn-secondary btn-lg">
                Initiate Trade Inquiry
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Contact Our Kerala Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
