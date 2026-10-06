import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  HiOutlineCheck, 
  HiOutlineShieldCheck, 
  HiOutlineCube, 
  HiOutlineDocumentDuplicate, 
  HiOutlinePaperAirplane, 
  HiOutlineCheckCircle,
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { 
  FaLeaf, 
  FaPepperHot, 
  FaAppleAlt, 
  FaSeedling, 
  FaUtensils, 
  FaTshirt, 
  FaPaintBrush,
  FaShip
} from 'react-icons/fa';

const Exports = () => {
  // 6-step Export Process
  const exportProcessSteps = [
    {
      step: 1,
      icon: <HiOutlineCheck />,
      title: "Product Selection",
      desc: "Careful grading and harvesting from certified partner farms and mills adhering strictly to global pesticide and moisture thresholds."
    },
    {
      step: 2,
      icon: <HiOutlineShieldCheck />,
      title: "Quality Inspection",
      desc: "Multi-point laboratory verification for micro-biology, aflatoxin, moisture content, and size calibration with APEDA/Spice Board standards."
    },
    {
      step: 3,
      icon: <HiOutlineCube />,
      title: "Packaging",
      desc: "Vacuum sealing, nitrogen flushing, customized buyer labeling, and seaworthy multi-ply corrugated cartons engineered for extreme sea transits."
    },
    {
      step: 4,
      icon: <HiOutlineDocumentDuplicate />,
      title: "Documentation",
      desc: "Issuance of Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, and Health Certifications."
    },
    {
      step: 5,
      icon: <HiOutlinePaperAirplane />,
      title: "International Shipping",
      desc: "Booking direct express vessel space from Cochin / Nhava Sheva / Tuticorin Ports or chartered air cargo for delicate fresh perishables."
    },
    {
      step: 6,
      icon: <HiOutlineCheckCircle />,
      title: "Delivery",
      desc: "Safe destination port arrival under CIF, FOB, or DDP terms with real-time bill of lading consignment tracking for the buyer."
    }
  ];

  // 7 Export Categories
  const exportCategories = [
    {
      title: "Agricultural Products",
      desc: "Premium organic cardamom, raw cashews, ginger, turmeric, and high-protein pulses.",
      icon: <FaLeaf />,
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Spices",
      desc: "Bold Tellicherry black pepper, clove buds, star anise, nutmeg, and culinary spice powders.",
      icon: <FaPepperHot />,
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Fresh Fruits",
      desc: "Alphonso and Banganapalli mangoes, export Cavendish bananas, and tropical pineapples.",
      icon: <FaAppleAlt />,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Coconut Products",
      desc: "Cold-pressed extra virgin coconut oil, desiccated coconut flakes, and horticultural coir peat blocks.",
      icon: <FaSeedling />,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Food Products",
      desc: "Single-estate orthodox black teas, specialty South Indian spice mixes, and healthy ready snacks.",
      icon: <FaUtensils />,
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cotton Textiles",
      desc: "100% organic cotton fabrics, luxury hotel bed linens, bath towels, and institutional apparel.",
      icon: <FaTshirt />,
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Handicrafts & Decor",
      desc: "Traditional handcrafted bell metal artifacts, Aranmula mirrors, and coir floor artisanal products.",
      icon: <FaPaintBrush />,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Global Destination Markets
  const globalMarkets = [
    { country: "United Arab Emirates", flag: "🇦🇪", port: "Jebel Ali / Dubai", transit: "4-6 Days (Sea)" },
    { country: "Saudi Arabia", flag: "🇸🇦", port: "Jeddah / Dammam", transit: "6-8 Days (Sea)" },
    { country: "Qatar", flag: "🇶🇦", port: "Hamad Port / Doha", transit: "5-7 Days (Sea)" },
    { country: "Oman", flag: "🇴🇲", port: "Sohar / Salalah", transit: "3-5 Days (Sea)" },
    { country: "Singapore", flag: "🇸🇬", port: "Port of Singapore", transit: "5-7 Days (Sea)" },
    { country: "Malaysia", flag: "🇲🇾", port: "Port Klang", transit: "6-8 Days (Sea)" },
    { country: "Europe", flag: "🇪🇺", port: "Rotterdam / Hamburg / London", transit: "18-24 Days (Sea)" },
    { country: "United States", flag: "🇺🇸", port: "New York / Los Angeles", transit: "25-32 Days (Sea)" }
  ];

  return (
    <div className="exports-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Exports</span>
          </div>
          <h1 className="page-hero-title">Export Products</h1>
          <p className="page-hero-subtitle">
            We help businesses access quality products from our market and connect with international buyers. High-yield commodities, certified processing, and guaranteed delivery.
          </p>
        </div>
      </section>

      {/* Export Categories Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="Global Outbound Catalog"
            title="Export Categories"
            description="Premium agricultural staples, aromatic spices, and cultural crafts sourced directly from South India for global wholesale distribution."
          />

          <div className="products-grid">
            {exportCategories.map((cat, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span className="badge badge-export">Export Grade</span>
                  </div>
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.4rem', color: 'var(--secondary)' }}>{cat.icon}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)' }}>{cat.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.title.split(' ')[0])}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Catalog Products <HiOutlineArrowNarrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Export Process */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            tag="Standard Operating Procedures"
            title="Our Export Process"
            description="Our battle-tested export methodology guarantees full compliance with destination quarantine laws and international commercial trade terms."
          />

          <div className="process-grid">
            {exportProcessSteps.map((item) => (
              <div key={item.step} className="process-step-card">
                <span className="process-number">Stage 0{item.step}</span>
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

      {/* Destination Markets Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="Global Reach & Corridors"
            title="Destination Markets"
            description="We maintain established maritime trade corridors and rapid air connections with major commercial hubs across continents."
          />

          <div className="markets-grid">
            {globalMarkets.map((m, idx) => (
              <div key={idx} className="market-card">
                <div className="market-flag-box">
                  <span style={{ fontSize: '2rem' }}>{m.flag}</span>
                </div>
                <div>
                  <h4 className="market-name">{m.country}</h4>
                  <p className="market-route" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <FaShip style={{ color: 'var(--primary)', fontSize: '0.8rem' }} /> {m.port}
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', display: 'block', marginTop: '0.2rem' }}>
                    Avg. Transit: {m.transit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Ready to Source from India?</h2>
            <p className="cta-description">
              Contact our export desk today for commodity rate sheets, packaging options, and FOB / CIF quotation benchmarks.
            </p>
            <div className="cta-buttons">
              <Link to="/deals?type=Export" className="btn btn-secondary btn-lg">
                Request Export Quote
              </Link>
              <Link to="/products" className="btn btn-outline-white btn-lg">
                Browse Full Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exports;
