import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import {
  commodityMarketRates,
  shippingCorridors,
  alternativeOriginPorts,
  monthlyTradeTrends,
  regionalDistribution,
  liveCurrencyMatrix,
  tradeComplianceStandards,
  mandatoryExportDocuments
} from '../data/tradeAnalyticsData';
import {
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineCurrencyDollar,
  HiOutlinePrinter,
  HiOutlineArrowNarrowRight,
  HiOutlineInformationCircle,
  HiOutlineClock
} from 'react-icons/hi';
import { FaShip, FaAnchor, FaCheck, FaHandshake } from 'react-icons/fa';

const TradeAnalytics = () => {
  const chartGradId = useId();
  // State for Commodity Filter & Currency
  const [commodityCategory, setCommodityCategory] = useState('All');
  const [currency, setCurrency] = useState('USD');
  const [lastRefreshed, setLastRefreshed] = useState(() => new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Freight Calculator State
  const [originPortId, setOriginPortId] = useState('COK');
  const [selectedRouteId, setSelectedRouteId] = useState('cok-dxb');
  const [containerType, setContainerType] = useState('20ft'); // '20ft', '40ft', 'reefer', 'lcl'
  const [cargoWeightMT, setCargoWeightMT] = useState(24);
  const [incoterm, setIncoterm] = useState('CIF');

  // Trend Chart State ('volume', 'value', 'shipments')
  const [chartMode, setChartMode] = useState('volume');
  const [hoveredTrend, setHoveredTrend] = useState(null);

  // Currency Converter State
  const [convAmount, setConvAmount] = useState(10000);
  const [convFrom, setConvFrom] = useState('USD');
  const [convTo, setConvTo] = useState('INR');
  const [paymentTerm, setPaymentTerm] = useState('LC_SIGHT');

  // Document Readiness Checklist State
  const [docsStatus, setDocsStatus] = useState(() => {
    const initial = {};
    mandatoryExportDocuments.forEach(doc => {
      initial[doc.id] = true;
    });
    return initial;
  });

  // Handle Refresh simulation
  const handleRefreshRates = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastRefreshed(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 600);
  };

  // Filter commodities
  const filteredCommodities = commodityMarketRates.filter(c => {
    if (commodityCategory === 'All') return true;
    return c.category === commodityCategory;
  });

  // Freight calculation logic
  const selectedRoute = shippingCorridors.find(r => r.id === selectedRouteId) || shippingCorridors[0];
  const selectedOrigin = alternativeOriginPorts.find(o => o.id === originPortId) || alternativeOriginPorts[0];

  const calculateFreight = () => {
    let baseRate = 0;
    if (containerType === '20ft') baseRate = selectedRoute.baseCost20ft;
    else if (containerType === '40ft') baseRate = selectedRoute.baseCost40ft;
    else if (containerType === 'reefer') baseRate = selectedRoute.baseCostReefer40ft;
    else if (containerType === 'lcl') baseRate = selectedRoute.lclRatePerCBM * Math.max(1, Math.round(cargoWeightMT * 1.5));

    // Port delta
    const adjustedCost = baseRate + (selectedOrigin.costDelta || 0);

    // Incoterm adjustment
    let incotermMultiplier = 1.0;
    if (incoterm === 'EXW') incotermMultiplier = 0.85; // Ex-works exclude sea freight
    if (incoterm === 'FOB') incotermMultiplier = 0.92;
    if (incoterm === 'CIF') incotermMultiplier = 1.08; // includes marine insurance
    if (incoterm === 'DDP') incotermMultiplier = 1.25; // includes destination duty & delivery

    const totalEstimateUSD = Math.round(adjustedCost * incotermMultiplier);

    // Convert to active currency
    const rate = liveCurrencyMatrix.rates[currency] || 1;
    const finalConverted = Math.round(totalEstimateUSD * rate);
    const symbol = liveCurrencyMatrix.symbols[currency] || '$';

    return {
      totalUSD: totalEstimateUSD,
      formatted: `${symbol}${finalConverted.toLocaleString()}`,
      transitDays: selectedRoute.avgTransitDays + (selectedOrigin.daysDelta || 0),
      co2EstMT: ((selectedRoute.co2KgPerTEU * (cargoWeightMT / 20)) / 1000).toFixed(2)
    };
  };

  const freightResult = calculateFreight();

  // Currency Converter calculation
  const convertCurrency = () => {
    const fromRate = liveCurrencyMatrix.rates[convFrom] || 1;
    const toRate = liveCurrencyMatrix.rates[convTo] || 1;
    const amountInUSD = convAmount / fromRate;
    let converted = amountInUSD * toRate;

    // Payment term buffer
    if (paymentTerm === 'LC_USANCE_60') converted *= 1.018; // +1.8% financing buffer
    if (paymentTerm === 'TT_ADVANCE') converted *= 0.995; // 0.5% discount for immediate advance

    return converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Toggle Document
  const toggleDoc = (id) => {
    setDocsStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalDocs = mandatoryExportDocuments.length;
  const readyDocsCount = Object.values(docsStatus).filter(Boolean).length;
  const readinessPercentage = Math.round((readyDocsCount / totalDocs) * 100);

  // SVG Trend Chart math
  const maxVal = Math.max(...monthlyTradeTrends.map(m => {
    if (chartMode === 'volume') return m.volumeMT;
    if (chartMode === 'value') return m.valueMillionUSD;
    return m.shipments;
  }));

  const chartPoints = monthlyTradeTrends.map((d, index) => {
    const rawVal = chartMode === 'volume' ? d.volumeMT : chartMode === 'value' ? d.valueMillionUSD : d.shipments;
    const x = (index / (monthlyTradeTrends.length - 1)) * 740 + 40;
    const y = 220 - (rawVal / (maxVal * 1.15)) * 180;
    return { x, y, rawVal, data: d };
  });

  const svgPathD = chartPoints.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  const areaPathD = `${svgPathD} L ${chartPoints[chartPoints.length - 1].x} 240 L ${chartPoints[0].x} 240 Z`;

  return (
    <div className="trade-analytics-page">
      {/* 1. Header with Live Telemetry Bar */}
      <section className="analytics-hero">
        <div className="container">
          <div className="analytics-header-card">
            <div className="analytics-header-top">
              <div className="live-status-pill">
                <span className="live-pulse-dot"></span>
                <span className="live-text">GLOBAL TRADE INTELLIGENCE DESK</span>
                <span className="live-tag">LIVE FEED</span>
              </div>

              <div className="header-actions">
                <div className="currency-selector-group">
                  <span className="selector-label">Base Currency:</span>
                  {['USD', 'INR', 'EUR', 'AED'].map(curr => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`btn-pill-sm ${currency === curr ? 'active' : ''}`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={handleRefreshRates}
                  className={`btn btn-refresh-telemetry ${isRefreshing ? 'spinning' : ''}`}
                  title="Refresh market data feed"
                >
                  <HiOutlineRefresh /> <span>{isRefreshing ? 'Syncing...' : 'Sync Market'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="btn btn-print-telemetry"
                  title="Print trade analytics briefing"
                >
                  <HiOutlinePrinter /> <span>Print Brief</span>
                </button>
              </div>
            </div>

            <div className="analytics-header-content">
              <div>
                <h1 className="analytics-title">
                  Real-Time Trade Analytics & Freight Intelligence
                </h1>
                <p className="analytics-subtitle">
                  Live commodity spot rates, port-to-port ocean transit calculators, foreign exchange hedging matrices, and certified export compliance telemetry.
                </p>
              </div>

              {/* Trading Hubs Active Status Bar */}
              <div className="market-hubs-strip">
                <div className="hub-item active">
                  <span className="hub-dot green"></span>
                  <div className="hub-info">
                    <span className="hub-city">Cochin / Mumbai</span>
                    <span className="hub-status">Origin Hub (IST)</span>
                  </div>
                </div>
                <div className="hub-item active">
                  <span className="hub-dot green"></span>
                  <div className="hub-info">
                    <span className="hub-city">Dubai (Jebel Ali)</span>
                    <span className="hub-status">GCC Port Active</span>
                  </div>
                </div>
                <div className="hub-item active">
                  <span className="hub-dot green"></span>
                  <div className="hub-info">
                    <span className="hub-city">Rotterdam / London</span>
                    <span className="hub-status">EU Corridor Open</span>
                  </div>
                </div>
                <div className="hub-item active">
                  <span className="hub-dot green"></span>
                  <div className="hub-info">
                    <span className="hub-city">Singapore / Tokyo</span>
                    <span className="hub-status">Pacific Gateway Open</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="feed-meta-footer">
              <span className="meta-sync">
                <HiOutlineClock /> Data Source: FIEO / Spices Board / Baltic Freight Index • Updated: {lastRefreshed}
              </span>
              <span className="meta-secure">
                <HiOutlineShieldCheck /> Encrypted Commercial Feeds Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Commodity Spot Market Ticker */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="analytics-section-header">
            <div>
              <span className="badge-tag">Spot Market Ticker</span>
              <h2 className="section-title">Verified Commodity Benchmark Rates</h2>
              <p className="section-sub">
                Indicative wholesale export prices per metric ton and kilogram with 24h market momentum.
              </p>
            </div>

            <div className="filter-pill-row">
              {['All', 'Spices', 'Agriculture', 'Textiles'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCommodityCategory(cat)}
                  className={`category-pill ${commodityCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="commodity-cards-grid">
            {filteredCommodities.map(comm => {
              const displayPrice = currency === 'INR' 
                ? `₹${comm.priceInrPerKg.toLocaleString()}` 
                : currency === 'EUR' 
                  ? `€${(comm.priceUsdPerKg * 0.92).toFixed(2)}`
                  : currency === 'AED'
                    ? `AED ${(comm.priceUsdPerKg * 3.67).toFixed(2)}`
                    : `$${comm.priceUsdPerKg.toFixed(2)}`;

              const isPositive = comm.change24h >= 0;

              return (
                <div key={comm.id} className="commodity-telemetry-card">
                  <div className="card-top">
                    <div>
                      <span className="category-label">{comm.category} • HS {comm.hsCode}</span>
                      <h3 className="comm-name">{comm.name}</h3>
                    </div>
                    <span className={`status-badge ${isPositive ? 'status-bullish' : 'status-bearish'}`}>
                      {comm.marketStatus}
                    </span>
                  </div>

                  <div className="card-price-row">
                    <div>
                      <span className="price-label">Benchmark Spot Price ({comm.unit})</span>
                      <div className="price-value">{displayPrice}</div>
                    </div>
                    <div className={`change-indicator ${isPositive ? 'positive' : 'negative'}`}>
                      {isPositive ? <HiOutlineTrendingUp /> : <HiOutlineTrendingDown />}
                      <span>{isPositive ? `+${comm.change24h}%` : `${comm.change24h}%`}</span>
                    </div>
                  </div>

                  {/* Sparkline Visual */}
                  <div className="sparkline-wrapper">
                    <svg viewBox="0 0 140 32" className="sparkline-svg">
                      <polyline
                        fill="none"
                        stroke={isPositive ? '#10b981' : '#ef4444'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={comm.sparkline
                          .map((val, idx) => {
                            const minVal = Math.min(...comm.sparkline);
                            const maxV = Math.max(...comm.sparkline);
                            const range = maxV - minVal || 1;
                            const x = (idx / (comm.sparkline.length - 1)) * 130 + 5;
                            const y = 28 - ((val - minVal) / range) * 22;
                            return `${x},${y}`;
                          })
                          .join(' ')}
                      />
                    </svg>
                    <span className="sparkline-hint">7-Day Trend</span>
                  </div>

                  <div className="card-details-list">
                    <div className="detail-item">
                      <span className="dt-label">Origin:</span>
                      <span className="dt-val">{comm.benchmarkOrigin}</span>
                    </div>
                    <div className="detail-item">
                      <span className="dt-label">24h Range:</span>
                      <span className="dt-val">${comm.low24h} - ${comm.high24h}</span>
                    </div>
                    <div className="detail-item">
                      <span className="dt-label">24h Vol:</span>
                      <span className="dt-val">{comm.volumeMT} MT</span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <Link
                      to={`/deals?product=${encodeURIComponent(comm.name)}&type=Export`}
                      className="btn btn-sm btn-outline-primary w-100"
                    >
                      Request Quote for this Commodity <HiOutlineArrowNarrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Port-to-Port Ocean Freight & Transit Simulator */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title-wrap text-center mb-4">
            <span className="badge-tag">Logistics Simulator</span>
            <h2 className="section-title">Port-to-Port Freight & Landed Cost Calculator</h2>
            <p className="section-sub">
              Simulate actual ocean transit duration, shipping rates, customs clearance schedules, and carbon footprint across key commercial shipping corridors.
            </p>
          </div>

          <div className="calculator-layout-grid">
            {/* Input Controls */}
            <div className="calc-controls-card">
              <h3 className="calc-subheading">
                <FaAnchor className="calc-icon" /> 1. Consignment Parameters
              </h3>

              <div className="form-group-calc">
                <label>Origin Port of Lading:</label>
                <select
                  value={originPortId}
                  onChange={(e) => setOriginPortId(e.target.value)}
                  className="calc-select"
                >
                  {alternativeOriginPorts.map(port => (
                    <option key={port.id} value={port.id}>
                      {port.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-calc">
                <label>Destination Port of Discharge:</label>
                <select
                  value={selectedRouteId}
                  onChange={(e) => setSelectedRouteId(e.target.value)}
                  className="calc-select"
                >
                  {shippingCorridors.map(route => (
                    <option key={route.id} value={route.id}>
                      {route.destinationPort} ({route.region})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-calc">
                <label>Cargo Mode & Equipment:</label>
                <div className="container-type-selector">
                  {[
                    { id: '20ft', label: "20' FCL Dry", desc: 'Standard Dry' },
                    { id: '40ft', label: "40' HC Dry", desc: 'High Cube' },
                    { id: 'reefer', label: "40' Reefer", desc: 'Cold Chain' },
                    { id: 'lcl', label: 'LCL Shared', desc: 'Consolidated' }
                  ].map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setContainerType(c.id)}
                      className={`equipment-btn ${containerType === c.id ? 'active' : ''}`}
                    >
                      <span className="eq-label">{c.label}</span>
                      <span className="eq-desc">{c.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group-calc">
                <div className="slider-label-row">
                  <label>Consignment Weight:</label>
                  <span className="slider-val-badge">{cargoWeightMT} Metric Tonnes</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="1"
                  value={cargoWeightMT}
                  onChange={(e) => setCargoWeightMT(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <span className="input-hint">Equivalent to ~{Math.ceil(cargoWeightMT / 24)} full container load(s).</span>
              </div>

              <div className="form-group-calc">
                <label>Trade Incoterm Selection:</label>
                <div className="incoterm-row">
                  {['FOB', 'CIF', 'DDP', 'EXW'].map(term => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setIncoterm(term)}
                      className={`incoterm-btn ${incoterm === term ? 'active' : ''}`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <span className="input-hint">
                  {incoterm === 'CIF' && 'CIF includes Freight + Marine Cargo Insurance to Destination Port.'}
                  {incoterm === 'FOB' && 'FOB includes delivery onto vessel at Origin Port.'}
                  {incoterm === 'DDP' && 'DDP includes destination import duties, port handling & final door delivery.'}
                  {incoterm === 'EXW' && 'EXW represents cargo collection directly from factory warehouse.'}
                </span>
              </div>
            </div>

            {/* Live Telemetry Output Card */}
            <div className="calc-result-card">
              <div className="result-header">
                <div>
                  <span className="route-badge">Ocean Corridor Telemetry</span>
                  <h3 className="route-title">
                    {selectedOrigin.name.split('(')[0]} ➔ {selectedRoute.destShort}
                  </h3>
                </div>
                <div className="risk-pill">
                  <span className="pulse-dot-green"></span> {selectedRoute.riskIndex}
                </div>
              </div>

              {/* Animated Route Flow Diagram */}
              <div className="route-flow-diagram">
                <div className="route-node">
                  <div className="node-icon origin"><FaAnchor /></div>
                  <div className="node-info">
                    <span className="node-name">{selectedOrigin.id}</span>
                    <span className="node-sub">Port of Lading</span>
                  </div>
                </div>

                <div className="route-connection">
                  <div className="route-line"></div>
                  <div className="ship-icon-traveler"><FaShip /></div>
                  <span className="route-distance">{selectedRoute.distanceNauticalMiles} Nautical Miles</span>
                </div>

                <div className="route-node">
                  <div className="node-icon dest"><FaShip /></div>
                  <div className="node-info">
                    <span className="node-name">{selectedRoute.destShort.split(' ')[0]}</span>
                    <span className="node-sub">Discharge Hub</span>
                  </div>
                </div>
              </div>

              {/* Key Results Grid */}
              <div className="result-metrics-grid">
                <div className="metric-box highlight">
                  <span className="m-label">Estimated {incoterm} Freight Cost</span>
                  <div className="m-value">{freightResult.formatted}</div>
                  <span className="m-sub">Includes basic ocean carrier surcharges & BAF</span>
                </div>

                <div className="metric-box">
                  <span className="m-label">Port-to-Port Transit Time</span>
                  <div className="m-value">{freightResult.transitDays} Days</div>
                  <span className="m-sub">Sailing frequency: {selectedRoute.frequency}</span>
                </div>

                <div className="metric-box">
                  <span className="m-label">Customs Clearance Window</span>
                  <div className="m-value">~{selectedRoute.customsClearanceDays} Working Days</div>
                  <span className="m-sub">Fast-track electronic bill pre-lodgement</span>
                </div>

                <div className="metric-box">
                  <span className="m-label">Estimated Carbon Offset</span>
                  <div className="m-value">{freightResult.co2EstMT} MT CO₂e</div>
                  <span className="m-sub">Green shipping index certified</span>
                </div>
              </div>

              {/* Carriers on Route */}
              <div className="carriers-strip">
                <span className="carriers-label">Vetted Ocean Carriers:</span>
                <div className="carriers-tags">
                  {selectedRoute.primaryCarriers.map(carrier => (
                    <span key={carrier} className="carrier-tag">{carrier}</span>
                  ))}
                </div>
              </div>

              <div className="result-cta-group">
                <Link
                  to={`/deals?product=General%20Cargo&type=Export&destination=${encodeURIComponent(selectedRoute.destinationPort)}`}
                  className="btn btn-primary w-100"
                >
                  <FaHandshake /> Lock Freight Rate & Request Official Quotation
                </Link>
                <p className="disclaimer-note">
                  * Indicative spot estimates subject to fuel bunker adjustments (BAF), currency adjustment factor (CAF), and seasonal shipping peak surcharges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Analytics Suite (Trend Charts & Geographic Breakdown) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title-wrap text-center mb-4">
            <span className="badge-tag">Visual Analytics Suite</span>
            <h2 className="section-title">Trade Volume & Regional Performance Intelligence</h2>
            <p className="section-sub">
              Historical shipping analytics, quarter-over-quarter volume surges, and key international trade corridors.
            </p>
          </div>

          <div className="analytics-dual-grid">
            {/* Chart 1: Export Trends Interactive SVG Area Chart */}
            <div className="analytics-panel-card">
              <div className="panel-header">
                <div>
                  <h3 className="panel-title">12-Month Export Performance Trends</h3>
                  <span className="panel-subtitle">Audited monthly shipment telemetry</span>
                </div>

                <div className="chart-mode-buttons">
                  <button
                    onClick={() => setChartMode('volume')}
                    className={`btn-mode ${chartMode === 'volume' ? 'active' : ''}`}
                  >
                    Volume (MT)
                  </button>
                  <button
                    onClick={() => setChartMode('value')}
                    className={`btn-mode ${chartMode === 'value' ? 'active' : ''}`}
                  >
                    Value (USD $M)
                  </button>
                  <button
                    onClick={() => setChartMode('shipments')}
                    className={`btn-mode ${chartMode === 'shipments' ? 'active' : ''}`}
                  >
                    Shipments
                  </button>
                </div>
              </div>

              {/* SVG Area Chart */}
              <div className="svg-chart-container">
                <svg viewBox="0 0 800 260" className="interactive-trend-svg">
                  <defs>
                    <linearGradient id={chartGradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1769aa" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#1769aa" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guide Lines */}
                  {[40, 95, 150, 205].map((yVal, i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={yVal}
                      x2="780"
                      y2={yVal}
                      stroke="#e2e8f0"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Shaded Area */}
                  <path d={areaPathD} fill={`url(#${chartGradId})`} />

                  {/* Main Line */}
                  <path
                    d={svgPathD}
                    fill="none"
                    stroke="#1769aa"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Interactive Nodes */}
                  {chartPoints.map((pt, i) => (
                    <g
                      key={i}
                      onMouseEnter={() => setHoveredTrend(pt)}
                      onMouseLeave={() => setHoveredTrend(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredTrend?.data.month === pt.data.month ? "7" : "4.5"}
                        fill={hoveredTrend?.data.month === pt.data.month ? "#20a464" : "#1769aa"}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        className="trend-point"
                      />
                      <text
                        x={pt.x}
                        y="252"
                        textAnchor="middle"
                        fill="#64748b"
                        fontSize="12"
                        fontWeight="600"
                      >
                        {pt.data.month}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Hover Tooltip Overlay */}
                {hoveredTrend && (
                  <div
                    className="chart-hover-popover"
                    style={{
                      left: `${(hoveredTrend.x / 800) * 100}%`,
                      top: `${(hoveredTrend.y / 260) * 100}%`
                    }}
                  >
                    <strong>{hoveredTrend.data.month} 2025-26</strong>
                    <div className="popover-line">
                      <span>Volume:</span> <b>{hoveredTrend.data.volumeMT} MT</b>
                    </div>
                    <div className="popover-line">
                      <span>Trade Value:</span> <b>${hoveredTrend.data.valueMillionUSD}M USD</b>
                    </div>
                    <div className="popover-line">
                      <span>Consignments:</span> <b>{hoveredTrend.data.shipments} vessels</b>
                    </div>
                    <div className="popover-lead">
                      Top Commodity: <span>{hoveredTrend.data.topSector}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chart KPI Metrics Strip */}
              <div className="chart-kpis-strip">
                <div className="kpi-item">
                  <span className="kpi-num">6,710 MT</span>
                  <span className="kpi-lbl">Total Annual Tonnage</span>
                </div>
                <div className="kpi-item">
                  <span className="kpi-num">$81.5M USD</span>
                  <span className="kpi-lbl">Annual Export Turnover</span>
                </div>
                <div className="kpi-item">
                  <span className="kpi-num">+24.8% YoY</span>
                  <span className="kpi-lbl text-success">Annual Growth Surge</span>
                </div>
                <div className="kpi-item">
                  <span className="kpi-num">486</span>
                  <span className="kpi-lbl">Completed Shipments</span>
                </div>
              </div>
            </div>

            {/* Chart 2: Regional Export Distribution */}
            <div className="analytics-panel-card">
              <div className="panel-header">
                <div>
                  <h3 className="panel-title">Regional Trade Corridor Share</h3>
                  <span className="panel-subtitle">Bilateral trade allocation by continent</span>
                </div>
                <span className="live-pill-soft">Audit Q4</span>
              </div>

              <div className="regions-list">
                {regionalDistribution.map((reg, i) => (
                  <div key={i} className="region-stat-row">
                    <div className="reg-top-line">
                      <div className="reg-label-group">
                        <span className="reg-color-swatch" style={{ backgroundColor: reg.color }}></span>
                        <span className="reg-name">{reg.region}</span>
                      </div>
                      <div className="reg-values">
                        <span className="reg-pct">{reg.percentage}%</span>
                        <span className="reg-tonnage">({reg.volumeMT} MT)</span>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="reg-progress-bg">
                      <div
                        className="reg-progress-fill"
                        style={{
                          width: `${reg.percentage}%`,
                          backgroundColor: reg.color
                        }}
                      ></div>
                    </div>

                    <div className="reg-hubs-sub">
                      Key discharge hubs: <span>{reg.mainHubs}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Callout */}
              <div className="trust-callout-box">
                <HiOutlineInformationCircle className="trust-icon" />
                <p>
                  All shipments comply with bilateral free trade agreements (FTAs), including India-UAE CEPA, India-Australia ECTA, and preferential tariff mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Live Multi-Currency Converter & Hedging Matrix */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="currency-hedging-card">
            <div className="card-left-info">
              <span className="badge-tag">Cross-Border FX</span>
              <h2 className="section-title">Commercial Trade Currency & Hedging Calculator</h2>
              <p className="section-sub">
                Evaluate cross-border invoice conversions, calculate Letter of Credit (LC) financing buffers, and mitigate foreign exchange exposure.
              </p>

              <div className="rates-table-mini">
                <span className="rates-title">Active Benchmark FX Multipliers (1 USD Base):</span>
                <div className="rates-pills-row">
                  {Object.entries(liveCurrencyMatrix.rates).map(([currKey, rateVal]) => {
                    if (currKey === 'USD') return null;
                    return (
                      <div key={currKey} className="rate-ticker-pill">
                        <span className="k">USD/{currKey}</span>
                        <span className="v">{rateVal}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="card-right-tool">
              <div className="tool-box-surface">
                <h3 className="tool-box-title">
                  <HiOutlineCurrencyDollar className="tool-icon" /> Instant Trade Settlement Estimator
                </h3>

                <div className="form-group-conv">
                  <label>Consignment Invoice Value:</label>
                  <div className="input-with-select">
                    <input
                      type="number"
                      value={convAmount}
                      onChange={(e) => setConvAmount(Number(e.target.value) || 0)}
                      className="calc-input"
                    />
                    <select
                      value={convFrom}
                      onChange={(e) => setConvFrom(e.target.value)}
                      className="calc-select-mini"
                    >
                      {Object.keys(liveCurrencyMatrix.rates).map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group-conv">
                  <label>Target Settlement Currency:</label>
                  <select
                    value={convTo}
                    onChange={(e) => setConvTo(e.target.value)}
                    className="calc-select"
                  >
                    {Object.keys(liveCurrencyMatrix.rates).map(c => (
                      <option key={c} value={c}>{c} ({liveCurrencyMatrix.symbols[c]})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group-conv">
                  <label>Commercial Payment Structure:</label>
                  <select
                    value={paymentTerm}
                    onChange={(e) => setPaymentTerm(e.target.value)}
                    className="calc-select"
                  >
                    <option value="LC_SIGHT">Irrevocable Confirmed Letter of Credit (Sight LC)</option>
                    <option value="LC_USANCE_60">60-Day Usance Deferred LC (+1.8% Hedging Reserve)</option>
                    <option value="TT_ADVANCE">Telegraphic Transfer (TT 30% Adv / 70% against BL - 0.5% Disc)</option>
                    <option value="CAD">Cash Against Documents (CAD via Bank)</option>
                  </select>
                </div>

                <div className="converted-display-box">
                  <span className="conv-label">Net Settlement Total in {convTo}:</span>
                  <div className="conv-value">
                    {liveCurrencyMatrix.symbols[convTo]} {convertCurrency()}
                  </div>
                  <span className="conv-rate-note">
                    Effective Hedged Rate: 1 {convFrom} ≈ {((liveCurrencyMatrix.rates[convTo] / liveCurrencyMatrix.rates[convFrom]) * (paymentTerm === 'LC_USANCE_60' ? 1.018 : paymentTerm === 'TT_ADVANCE' ? 0.995 : 1)).toFixed(4)} {convTo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Consignment Readiness & Export Documentation Checklist */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title-wrap text-center mb-4">
            <span className="badge-tag">Customs & Compliance</span>
            <h2 className="section-title">Consignment Readiness & Documentation Checklist</h2>
            <p className="section-sub">
              Verify compliance requirements for international customs discharge and test clearance readiness.
            </p>
          </div>

          <div className="docs-readiness-layout">
            <div className="readiness-gauge-card">
              <h3 className="gauge-title">Consignment Clearance Meter</h3>

              <div className="gauge-circle-wrap">
                <svg viewBox="0 0 120 120" className="gauge-circle-svg">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={readinessPercentage === 100 ? "#20a464" : "#1769aa"}
                    strokeWidth="10"
                    strokeDasharray="314.16"
                    strokeDashoffset={314.16 - (314.16 * readinessPercentage) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <div className="gauge-center-text">
                  <span className="pct-num">{readinessPercentage}%</span>
                  <span className="pct-lbl">Readiness</span>
                </div>
              </div>

              <div className="gauge-status-badge">
                {readinessPercentage === 100 ? (
                  <span className="status-all-ready">
                    <FaCheck /> 100% Ready for Port Lading
                  </span>
                ) : (
                  <span className="status-pending">
                    {readyDocsCount} of {totalDocs} Documents Verified
                  </span>
                )}
              </div>

              <p className="gauge-desc">
                {readinessPercentage === 100
                  ? "All required regulatory certificates and commercial instruments are cleared for immediate green-channel customs clearance."
                  : "Some documentation requires client endorsement or chamber attestation before vessel loading."}
              </p>

              <button
                type="button"
                onClick={() => {
                  const allToggled = Object.fromEntries(
                    mandatoryExportDocuments.map(d => [d.id, true])
                  );
                  setDocsStatus(allToggled);
                }}
                className="btn btn-outline-primary btn-sm w-100 mt-3"
              >
                Mark All Verified
              </button>
            </div>

            {/* Checklist items */}
            <div className="docs-checklist-card">
              <h3 className="checklist-heading">
                Mandatory International Trade Documentation
              </h3>
              <p className="checklist-sub">
                Click each document to simulate and verify documentation readiness for your planned cargo.
              </p>

              <div className="checklist-rows">
                {mandatoryExportDocuments.map(doc => {
                  const isChecked = Boolean(docsStatus[doc.id]);
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleDoc(doc.id)}
                      className={`checklist-item-row ${isChecked ? 'checked' : 'unchecked'}`}
                    >
                      <div className="check-box-icon">
                        {isChecked ? <HiOutlineCheckCircle className="icon-checked" /> : <span className="icon-empty"></span>}
                      </div>
                      <div className="check-content">
                        <div className="check-title-row">
                          <span className="doc-name">{doc.name}</span>
                          <span className="doc-req-pill">{doc.requiredFor}</span>
                        </div>
                        <span className="doc-agency">Issued by: {doc.agency}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trade Accreditations & Regulatory Authorities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title-wrap text-center mb-4">
            <span className="badge-tag">Certified Authority</span>
            <h2 className="section-title">Government & International Accreditations</h2>
            <p className="section-sub">
              Our export operations strictly adhere to international food safety, phytosanitary, and customs standards.
            </p>
          </div>

          <div className="accreditations-grid">
            {tradeComplianceStandards.map(std => (
              <div key={std.code} className="accreditation-card">
                <div className="acc-header">
                  <span className="acc-code">{std.code}</span>
                  <span className="acc-status-pill">{std.status}</span>
                </div>
                <h4 className="acc-title">{std.title}</h4>
                <p className="acc-agency">Authority: {std.issuedBy}</p>
                <div className="acc-footer">
                  <span className="acc-audit">{std.auditDate}</span>
                  <span className="acc-cat">{std.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-analytics-banner">
            <div className="banner-content">
              <h3 className="banner-title">Need a Tailored Commercial Trade Structure?</h3>
              <p className="banner-desc">
                Our export documentation specialists and freight coordinators are on standby to evaluate your specifications, optimize tariff duties, and prepare formal commercial invoices.
              </p>
            </div>
            <div className="banner-cta">
              <Link to="/deals" className="btn btn-secondary btn-lg">
                <FaHandshake /> Request Custom Commercial Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeAnalytics;
