import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SectionTitle from '../components/SectionTitle';
import BusinessCard from '../components/BusinessCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import HomeTradeWidget from '../components/HomeTradeWidget';
import { products } from '../data/products';
import { 
  HiOutlineGlobe, 
  HiOutlineShieldCheck, 
  HiOutlineTruck, 
  HiOutlineUserGroup, 
  HiOutlineDocumentReport,
  HiOutlineArrowNarrowRight,
  HiOutlineBadgeCheck
} from 'react-icons/hi';
import { FaBoxes, FaShip, FaHandshake } from 'react-icons/fa';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter 6 featured products for the homepage
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  // What We Do Cards Data
  const whatWeDoCards = [
    {
      icon: <FaBoxes />,
      title: "Global Imports",
      description: "We source quality products from trusted international suppliers and bring them to local markets with seamless compliance.",
      linkText: "Explore Imports",
      linkUrl: "/imports",
      badge: "Inbound Solutions"
    },
    {
      icon: <FaShip />,
      title: "Global Exports",
      description: "We help businesses reach international customers by supplying quality agricultural, spice, textile and food products to global markets.",
      linkText: "Explore Exports",
      linkUrl: "/exports",
      badge: "Outbound Trade"
    },
    {
      icon: <FaHandshake />,
      title: "Business Partnerships",
      description: "We connect suppliers, buyers and businesses to create reliable, transparent and long-term trading relationships worldwide.",
      linkText: "Start a Partnership",
      linkUrl: "/deals",
      badge: "B2B Alliance"
    }
  ];

  // Why Choose Us Items
  const whyChooseUsItems = [
    {
      icon: <HiOutlineBadgeCheck />,
      title: "Quality Products",
      description: "Rigorous grade certification, APEDA/FDA/CE compliance, and strict batch inspection standards."
    },
    {
      icon: <HiOutlineUserGroup />,
      title: "Trusted Suppliers",
      description: "Vetted farmer cooperatives and ISO-certified manufacturing partners with proven track records."
    },
    {
      icon: <HiOutlineGlobe />,
      title: "Global Network",
      description: "Established distribution corridors linking South Asia with the Middle East, Europe, and Southeast Asia."
    },
    {
      icon: <HiOutlineTruck />,
      title: "Reliable Shipping",
      description: "Full container load (FCL), LCL, and temperature-controlled reefer logistics with leading ocean carriers."
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "Professional Support",
      description: "Dedicated account managers handling documentation, customs clearance, and LC negotiation."
    },
    {
      icon: <HiOutlineDocumentReport />,
      title: "Transparent Business Deals",
      description: "Clear pricing, transparent contract terms, accurate bill of ladings, and zero hidden surcharges."
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Business Stats */}
      <Stats />

      {/* 2.5 Live Trade Intelligence & Shipping Calculator Widget */}
      <HomeTradeWidget />

      {/* 3. What We Do Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="Our Core Services"
            title="What We Do"
            description="Facilitating bilateral global commerce with integrated product sourcing, international freight, and certified trading channels."
          />

          <div className="cards-grid-3">
            {whatWeDoCards.map((card, idx) => (
              <BusinessCard
                key={idx}
                icon={card.icon}
                title={card.title}
                description={card.description}
                linkText={card.linkText}
                linkUrl={card.linkUrl}
                badge={card.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <SectionTitle
              tag="Export & Import Catalog"
              title="Featured Products"
              description="Explore handpicked agricultural commodities, spices, natural coconut goods, and quality textiles ready for global shipment."
              align="left"
              className="mb-0"
            />
            <Link to="/products" className="btn btn-outline-primary" style={{ marginBottom: '1rem' }}>
              View All Products <HiOutlineArrowNarrowRight />
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose GlobalTrade Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            tag="The GlobalTrade Advantage"
            title="Why Choose GlobalTrade?"
            description="We bridge continents with trust, consistency, and professional execution at every stage of the trading lifecycle."
          />

          <div className="cards-grid-6">
            {whyChooseUsItems.map((item, idx) => (
              <div key={idx} className="business-card card">
                <div className="card-header-icon">
                  <div className="card-icon-bubble">
                    {item.icon}
                  </div>
                </div>
                <div className="card-content-body">
                  <h3 className="card-heading">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="badge badge-secondary" style={{ marginBottom: '1.25rem' }}>
              Direct Global Trade Inquiries
            </span>
            <h2 className="cta-heading">Ready to Grow Your Global Business?</h2>
            <p className="cta-description">
              Talk to our team about your import, export or product sourcing requirements. We provide tailored pricing, shipping estimates, and sample consignments.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
              <Link to="/deals" className="btn btn-outline-white btn-lg">
                Start a Business Deal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;
