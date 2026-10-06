import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  HiOutlineSearch, 
  HiOutlineShieldCheck, 
  HiOutlineClipboardCheck, 
  HiOutlineTruck, 
  HiOutlineDocumentText, 
  HiOutlineCheckCircle,
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { 
  FaCogs, 
  FaMicrochip, 
  FaBoxOpen, 
  FaUtensils, 
  FaIndustry, 
  FaShoppingBag 
} from 'react-icons/fa';

const Imports = () => {
  // 6-step Import Process
  const importProcessSteps = [
    {
      step: 1,
      icon: <HiOutlineSearch />,
      title: "Product Sourcing",
      desc: "Identifying certified overseas manufacturers that match your exact technical blueprints, pricing, and volume thresholds."
    },
    {
      step: 2,
      icon: <HiOutlineShieldCheck />,
      title: "Supplier Verification",
      desc: "Auditing production facilities, trade credentials, credit ratings, and labor compliance before contract finalization."
    },
    {
      step: 3,
      icon: <HiOutlineClipboardCheck />,
      title: "Quality Checking",
      desc: "Deploying certified third-party testing labs (SGS, TUV, Bureau Veritas) for pre-shipment sample and container inspection."
    },
    {
      step: 4,
      icon: <HiOutlineTruck />,
      title: "Shipping & Logistics",
      desc: "Arranging secure ocean container bookings (FCL/LCL) or rapid air cargo charters with premier global freight carriers."
    },
    {
      step: 5,
      icon: <HiOutlineDocumentText />,
      title: "Customs & Documentation",
      desc: "Managing Bill of Lading, HS code tariff classification, Import Export Code (IEC) protocols, and duty clearances."
    },
    {
      step: 6,
      icon: <HiOutlineCheckCircle />,
      title: "Delivery",
      desc: "Door-to-door or port-to-warehouse inland haulage ensuring safe handover straight to your manufacturing facility or distribution depot."
    }
  ];

  // Imported Products Categories
  const importedProducts = [
    {
      title: "Industrial Machinery",
      desc: "Automated processing lines, CNC machinery, food packaging equipment, and hydraulic spare parts.",
      icon: <FaCogs />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      origin: "Germany, Taiwan, Japan"
    },
    {
      title: "Electronics & Components",
      desc: "Microcontrollers, semiconductor assemblies, commercial solar inverters, and industrial sensor modules.",
      icon: <FaMicrochip />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      origin: "South Korea, Taiwan"
    },
    {
      title: "Packaging Materials",
      desc: "Biodegradable polymers, barrier films, high-tensile corrugated Kraft rolls, and aseptic beverage cartons.",
      icon: <FaBoxOpen />,
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
      origin: "Southeast Asia, Europe"
    },
    {
      title: "Food Ingredients",
      desc: "Bulk natural sweeteners, non-dairy creamer bases, starches, pectin, and specialty confectionery inputs.",
      icon: <FaUtensils />,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
      origin: "Europe, Vietnam, Brazil"
    },
    {
      title: "Industrial Products",
      desc: "Specialty chemicals, high-grade polymers, structural aluminum extrusions, and pneumatic fittings.",
      icon: <FaIndustry />,
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      origin: "Middle East, Europe"
    },
    {
      title: "Consumer Goods",
      desc: "Lifestyle homeware, sustainable bamboo tableware, kitchenware, and specialty wellness commodities.",
      icon: <FaShoppingBag />,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      origin: "East Asia, Thailand"
    }
  ];

  return (
    <div className="imports-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Imports</span>
          </div>
          <h1 className="page-hero-title">Import Products</h1>
          <p className="page-hero-subtitle">
            We work with trusted suppliers to source quality products from international markets. Seamless procurement, verified factories, and compliant customs clearance.
          </p>
        </div>
      </section>

      {/* 6-Step Import Process */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="Streamlined Logistics"
            title="Our Import Process"
            description="A systematic, risk-mitigated 6-stage lifecycle engineered to source quality goods reliably without customs delays or unexpected fees."
          />

          <div className="process-grid">
            {importProcessSteps.map((item) => (
              <div key={item.step} className="process-step-card">
                <span className="process-number">Step 0{item.step}</span>
                <div className="process-icon-box">
                  {item.icon}
                </div>
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imported Products Showcase */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            tag="Inbound Commodities"
            title="Imported Products"
            description="Key categories we regularly procure and clear on behalf of domestic distributors, retailers, and industrial enterprises."
          />

          <div className="cards-grid-3">
            {importedProducts.map((prod, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem' }}>
                    <span className="badge badge-import">Origin: {prod.origin}</span>
                  </div>
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>{prod.icon}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)' }}>{prod.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {prod.desc}
                  </p>
                  <Link
                    to={`/deals?type=Import&product=${encodeURIComponent(prod.title)}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Inquire for Import <HiOutlineArrowNarrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Import Consultation CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Looking to Import a Specific Product?</h2>
            <p className="cta-description">
              Whether you need industrial components, commercial machinery, or raw ingredients, our overseas sourcing agents negotiate optimal FOB/CIF rates.
            </p>
            <div className="cta-buttons">
              <Link to="/deals?type=Import" className="btn btn-secondary btn-lg">
                Submit Import Requirements
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Speak to Sourcing Manager
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imports;
