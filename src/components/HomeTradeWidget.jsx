import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { commodityMarketRates, shippingCorridors, alternativeOriginPorts } from '../data/tradeAnalyticsData';
import {
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { FaShip } from 'react-icons/fa';

const HomeTradeWidget = () => {
  const [selectedOriginId, setSelectedOriginId] = useState('COK');
  const [selectedRouteId, setSelectedRouteId] = useState('cok-dxb');

  const selectedOrigin = alternativeOriginPorts.find(o => o.id === selectedOriginId) || alternativeOriginPorts[0];
  const selectedRoute = shippingCorridors.find(r => r.id === selectedRouteId) || shippingCorridors[0];

  const estimatedDays = selectedRoute.avgTransitDays + (selectedOrigin.daysDelta || 0);
  const estimatedCost20ft = selectedRoute.baseCost20ft + (selectedOrigin.costDelta || 0);

  return (
    <section className="home-trade-widget-section">
      <div className="container">
        {/* Ticker Header */}
        <div className="widget-header-row">
          <div className="widget-brand-pill">
            <span className="widget-live-dot"></span>
            <span className="widget-title-text">LIVE TRADE INTELLIGENCE</span>
            <span className="widget-market-tag">MARKET OPEN</span>
          </div>

          <div className="widget-header-link">
            <Link to="/analytics" className="view-full-analytics-link">
              Launch Full Analytics & Freight Dashboard <HiOutlineArrowNarrowRight />
            </Link>
          </div>
        </div>

        {/* Live Commodity Spot Ticker Strip */}
        <div className="ticker-cards-strip">
          {commodityMarketRates.slice(0, 4).map(comm => {
            const isPos = comm.change24h >= 0;
            return (
              <div key={comm.id} className="ticker-mini-card">
                <div className="ticker-mini-top">
                  <span className="ticker-cat">{comm.category}</span>
                  <span className={`ticker-change ${isPos ? 'up' : 'down'}`}>
                    {isPos ? <HiOutlineTrendingUp /> : <HiOutlineTrendingDown />}
                    {isPos ? `+${comm.change24h}%` : `${comm.change24h}%`}
                  </span>
                </div>
                <div className="ticker-mini-name">{comm.name.split('(')[0]}</div>
                <div className="ticker-mini-price">
                  <span className="price-num">${comm.priceUsdPerKg.toFixed(2)}</span>
                  <span className="price-unit">/ {comm.unit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Corridor Transit Estimator Card */}
        <div className="quick-corridor-box">
          <div className="corridor-box-intro">
            <div className="corridor-badge">
              <FaShip /> Instant Route Transit Estimator
            </div>
            <h3 className="corridor-heading">Check Real-Time Ocean Shipping Schedules</h3>
            <p className="corridor-sub">
              Plan your procurement timelines with verified port-to-port maritime transit estimates from Indian seaports to premier global hubs.
            </p>
          </div>

          <div className="corridor-selectors-strip">
            <div className="selector-item">
              <label>Origin Port:</label>
              <select
                value={selectedOriginId}
                onChange={(e) => setSelectedOriginId(e.target.value)}
                className="corridor-select"
              >
                {alternativeOriginPorts.map(p => (
                  <option key={p.id} value={p.id}>{p.name.split('(')[0]}</option>
                ))}
              </select>
            </div>

            <div className="corridor-arrow-icon">
              <HiOutlineArrowNarrowRight />
            </div>

            <div className="selector-item">
              <label>Destination Hub:</label>
              <select
                value={selectedRouteId}
                onChange={(e) => setSelectedRouteId(e.target.value)}
                className="corridor-select"
              >
                {shippingCorridors.map(r => (
                  <option key={r.id} value={r.id}>{r.destShort} ({r.region})</option>
                ))}
              </select>
            </div>

            {/* Quick Result Preview */}
            <div className="corridor-quick-result">
              <div className="result-stat">
                <span className="r-label">Avg Sea Transit</span>
                <span className="r-val">{estimatedDays} Days</span>
              </div>
              <div className="result-stat">
                <span className="r-label">20' FCL Ocean Rate</span>
                <span className="r-val">${estimatedCost20ft.toLocaleString()}</span>
              </div>
            </div>

            <div className="corridor-cta-cell">
              <Link
                to={`/analytics`}
                className="btn btn-secondary btn-sm"
              >
                Calculate Full Landed Cost
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTradeWidget;
