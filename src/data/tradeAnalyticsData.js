/**
 * GlobalTrade Exports - Trade Analytics & Market Intelligence Dataset
 * Realistic international trade metrics, commodity spot rates, shipping corridors,
 * currency exchange matrices, and documentation requirements.
 */

export const commodityMarketRates = [
  {
    id: "sp-01",
    name: "Tellicherry Black Pepper (TGSEB)",
    category: "Spices",
    hsCode: "090411",
    benchmarkOrigin: "Cochin / Malabar Coast",
    priceUsdPerKg: 7.85,
    priceInrPerKg: 685,
    unit: "Kg",
    change24h: 3.42,
    trend: "up",
    high24h: 7.95,
    low24h: 7.55,
    volumeMT: 420,
    marketStatus: "Bullish",
    sparkline: [7.2, 7.35, 7.3, 7.5, 7.42, 7.68, 7.85],
    primaryMarkets: ["Rotterdam", "Hamburg", "New York"]
  },
  {
    id: "sp-02",
    name: "Alleppey Green Cardamom (8mm+)",
    category: "Spices",
    hsCode: "090831",
    benchmarkOrigin: "Idukki, Western Ghats",
    priceUsdPerKg: 28.50,
    priceInrPerKg: 2480,
    unit: "Kg",
    change24h: 1.85,
    trend: "up",
    high24h: 29.10,
    low24h: 27.90,
    volumeMT: 185,
    marketStatus: "High Demand",
    sparkline: [27.0, 27.4, 27.8, 28.1, 28.0, 28.3, 28.5],
    primaryMarkets: ["Jebel Ali (Dubai)", "Riyadh", "Kuwait City"]
  },
  {
    id: "ag-01",
    name: "W320 Premium Cashew Kernels",
    category: "Agriculture",
    hsCode: "080132",
    benchmarkOrigin: "Kollam, Kerala",
    priceUsdPerKg: 8.40,
    priceInrPerKg: 730,
    unit: "Kg",
    change24h: -0.95,
    trend: "down",
    high24h: 8.55,
    low24h: 8.35,
    volumeMT: 650,
    marketStatus: "Consolidating",
    sparkline: [8.65, 8.6, 8.5, 8.48, 8.42, 8.38, 8.4],
    primaryMarkets: ["Tokyo", "Rotterdam", "Los Angeles"]
  },
  {
    id: "ag-02",
    name: "Basmati 1121 Extra Long Grain Rice",
    category: "Agriculture",
    hsCode: "100630",
    benchmarkOrigin: "Punjab / Haryana Corridor",
    priceUsdPerKg: 1.45,
    priceInrPerKg: 126,
    unit: "Kg",
    change24h: 2.10,
    trend: "up",
    high24h: 1.48,
    low24h: 1.40,
    volumeMT: 1850,
    marketStatus: "Active Buying",
    sparkline: [1.38, 1.4, 1.39, 1.42, 1.43, 1.44, 1.45],
    primaryMarkets: ["Dammam", "Jebel Ali", "London"]
  },
  {
    id: "ag-03",
    name: "Cold-Pressed Extra Virgin Coconut Oil",
    category: "Agriculture",
    hsCode: "151311",
    benchmarkOrigin: "Calicut / Malappuram",
    priceUsdPerKg: 3.65,
    priceInrPerKg: 318,
    unit: "Kg",
    change24h: 0.80,
    trend: "up",
    high24h: 3.70,
    low24h: 3.58,
    volumeMT: 390,
    marketStatus: "Stable",
    sparkline: [3.55, 3.58, 3.6, 3.62, 3.61, 3.63, 3.65],
    primaryMarkets: ["Sydney", "Frankfurt", "Toronto"]
  },
  {
    id: "tx-01",
    name: "Organic Combed Cotton Fabric (220 GSM)",
    category: "Textiles",
    hsCode: "520811",
    benchmarkOrigin: "Tirupur / Coimbatore",
    priceUsdPerKg: 5.20,
    priceInrPerKg: 452,
    unit: "Kg",
    change24h: -1.25,
    trend: "down",
    high24h: 5.35,
    low24h: 5.15,
    volumeMT: 510,
    marketStatus: "Normal Supply",
    sparkline: [5.4, 5.35, 5.3, 5.28, 5.22, 5.18, 5.2],
    primaryMarkets: ["Barcelona", "New York", "Manchester"]
  },
  {
    id: "sp-03",
    name: "Pure Ceylon Grade Cinnamon Quills (C5)",
    category: "Spices",
    hsCode: "090611",
    benchmarkOrigin: "South India / Colombo Gateway",
    priceUsdPerKg: 14.20,
    priceInrPerKg: 1235,
    unit: "Kg",
    change24h: 4.15,
    trend: "up",
    high24h: 14.50,
    low24h: 13.60,
    volumeMT: 120,
    marketStatus: "Premium Rally",
    sparkline: [13.2, 13.4, 13.6, 13.8, 14.0, 14.1, 14.2],
    primaryMarkets: ["Zurich", "Paris", "Chicago"]
  }
];

export const shippingCorridors = [
  {
    id: "cok-dxb",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Jebel Ali (DXB), Dubai, UAE",
    destShort: "Dubai (DXB)",
    region: "Middle East & GCC",
    distanceNauticalMiles: 1540,
    transitDaysMin: 4,
    transitDaysMax: 6,
    avgTransitDays: 5,
    baseCost20ft: 850,
    baseCost40ft: 1450,
    baseCostReefer40ft: 2200,
    lclRatePerCBM: 45,
    customsClearanceDays: 1.5,
    co2KgPerTEU: 180,
    frequency: "Daily Sailings",
    primaryCarriers: ["Maersk", "MSC", "Hapag-Lloyd", "DP World"],
    riskIndex: "Low (Green Flag)"
  },
  {
    id: "cok-rtm",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Rotterdam (RTM), Netherlands, EU",
    destShort: "Rotterdam (RTM)",
    region: "European Union",
    distanceNauticalMiles: 6380,
    transitDaysMin: 21,
    transitDaysMax: 26,
    avgTransitDays: 23,
    baseCost20ft: 1950,
    baseCost40ft: 3200,
    baseCostReefer40ft: 4800,
    lclRatePerCBM: 95,
    customsClearanceDays: 2.5,
    co2KgPerTEU: 720,
    frequency: "3x Weekly",
    primaryCarriers: ["Maersk", "CMA CGM", "MSC", "ONE"],
    riskIndex: "Standard (EU Green Lane)"
  },
  {
    id: "cok-lax",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Los Angeles (LAX), USA",
    destShort: "Los Angeles (LAX)",
    region: "North America",
    distanceNauticalMiles: 9850,
    transitDaysMin: 28,
    transitDaysMax: 34,
    avgTransitDays: 31,
    baseCost20ft: 2850,
    baseCost40ft: 4600,
    baseCostReefer40ft: 6400,
    lclRatePerCBM: 135,
    customsClearanceDays: 3.0,
    co2KgPerTEU: 1150,
    frequency: "2x Weekly",
    primaryCarriers: ["Evergreen", "Maersk", "HMM", "CMA CGM"],
    riskIndex: "Standard (US CBP Pre-clear)"
  },
  {
    id: "cok-sin",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Singapore (SIN), Singapore",
    destShort: "Singapore (SIN)",
    region: "Southeast Asia",
    distanceNauticalMiles: 1650,
    transitDaysMin: 5,
    transitDaysMax: 7,
    avgTransitDays: 6,
    baseCost20ft: 720,
    baseCost40ft: 1250,
    baseCostReefer40ft: 1950,
    lclRatePerCBM: 40,
    customsClearanceDays: 1.0,
    co2KgPerTEU: 210,
    frequency: "Daily Sailings",
    primaryCarriers: ["PSA Singapore", "PIL", "Ocean Network Express", "MSC"],
    riskIndex: "Low (Express Transshipment)"
  },
  {
    id: "cok-ham",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Hamburg (HAM), Germany",
    destShort: "Hamburg (HAM)",
    region: "European Union",
    distanceNauticalMiles: 6720,
    transitDaysMin: 23,
    transitDaysMax: 28,
    avgTransitDays: 25,
    baseCost20ft: 2050,
    baseCost40ft: 3350,
    baseCostReefer40ft: 4950,
    lclRatePerCBM: 100,
    customsClearanceDays: 2.0,
    co2KgPerTEU: 760,
    frequency: "2x Weekly",
    primaryCarriers: ["Hapag-Lloyd", "Maersk", "CMA CGM"],
    riskIndex: "Standard (EU Certified)"
  },
  {
    id: "cok-tyo",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Tokyo (TYO), Japan",
    destShort: "Tokyo (TYO)",
    region: "East Asia",
    distanceNauticalMiles: 4890,
    transitDaysMin: 14,
    transitDaysMax: 18,
    avgTransitDays: 16,
    baseCost20ft: 1450,
    baseCost40ft: 2450,
    baseCostReefer40ft: 3700,
    lclRatePerCBM: 78,
    customsClearanceDays: 2.0,
    co2KgPerTEU: 540,
    frequency: "Weekly",
    primaryCarriers: ["NYK Line", "MOL", "K Line / ONE", "Evergreen"],
    riskIndex: "Low (JAS Verified)"
  },
  {
    id: "cok-fxt",
    originPort: "Cochin International Port (COK), India",
    originShort: "Cochin (COK)",
    destinationPort: "Port of Felixstowe (FXT), United Kingdom",
    destShort: "Felixstowe (FXT)",
    region: "United Kingdom",
    distanceNauticalMiles: 6490,
    transitDaysMin: 22,
    transitDaysMax: 27,
    avgTransitDays: 24,
    baseCost20ft: 2150,
    baseCost40ft: 3450,
    baseCostReefer40ft: 5100,
    lclRatePerCBM: 105,
    customsClearanceDays: 2.5,
    co2KgPerTEU: 740,
    frequency: "2x Weekly",
    primaryCarriers: ["Maersk", "MSC", "Evergreen"],
    riskIndex: "Standard (UK HMRC)"
  }
];

export const alternativeOriginPorts = [
  { id: "COK", name: "Cochin International Port (COK), Kerala", costDelta: 0, daysDelta: 0 },
  { id: "NSA", name: "JNPT Nhava Sheva (NSA), Mumbai", costDelta: 50, daysDelta: 1 },
  { id: "MUN", name: "Mundra Port (MUN), Gujarat", costDelta: 80, daysDelta: 2 },
  { id: "MAA", name: "Chennai Port (MAA), Tamil Nadu", costDelta: 40, daysDelta: 1 }
];

export const monthlyTradeTrends = [
  { month: "Jan", volumeMT: 390, valueMillionUSD: 4.8, shipments: 28, topSector: "Spices" },
  { month: "Feb", volumeMT: 430, valueMillionUSD: 5.2, shipments: 31, topSector: "Spices" },
  { month: "Mar", volumeMT: 510, valueMillionUSD: 6.4, shipments: 38, topSector: "Agriculture" },
  { month: "Apr", volumeMT: 480, valueMillionUSD: 5.9, shipments: 34, topSector: "Agriculture" },
  { month: "May", volumeMT: 560, valueMillionUSD: 6.8, shipments: 41, topSector: "Fruits & Food" },
  { month: "Jun", volumeMT: 530, valueMillionUSD: 6.5, shipments: 39, topSector: "Textiles" },
  { month: "Jul", volumeMT: 590, valueMillionUSD: 7.2, shipments: 44, topSector: "Spices" },
  { month: "Aug", volumeMT: 620, valueMillionUSD: 7.7, shipments: 46, topSector: "Agriculture" },
  { month: "Sep", volumeMT: 580, valueMillionUSD: 7.1, shipments: 42, topSector: "Textiles" },
  { month: "Oct", volumeMT: 670, valueMillionUSD: 8.3, shipments: 51, topSector: "Spices" },
  { month: "Nov", volumeMT: 710, valueMillionUSD: 8.9, shipments: 54, topSector: "Spices" },
  { month: "Dec", volumeMT: 750, valueMillionUSD: 9.4, shipments: 58, topSector: "Agriculture" }
];

export const regionalDistribution = [
  { region: "Middle East & GCC", percentage: 38, volumeMT: 2590, mainHubs: "Dubai, Riyadh, Doha, Muscat", color: "#1769aa" },
  { region: "European Union", percentage: 27, volumeMT: 1840, mainHubs: "Rotterdam, Hamburg, Antwerp, Marseille", color: "#20a464" },
  { region: "North America", percentage: 18, volumeMT: 1230, mainHubs: "Los Angeles, New York, Toronto, Houston", color: "#f59e0b" },
  { region: "Southeast & East Asia", percentage: 12, volumeMT: 820, mainHubs: "Singapore, Tokyo, Kuala Lumpur, Seoul", color: "#8b5cf6" },
  { region: "Oceania & Others", percentage: 5, volumeMT: 340, mainHubs: "Sydney, Melbourne, Auckland, Durban", color: "#06b6d4" }
];

export const liveCurrencyMatrix = {
  base: "USD",
  rates: {
    USD: 1.0,
    EUR: 0.92,
    AED: 3.67,
    GBP: 0.79,
    INR: 87.20,
    SGD: 1.34,
    JPY: 153.40
  },
  symbols: {
    USD: "$",
    EUR: "€",
    AED: "AED ",
    GBP: "£",
    INR: "₹",
    SGD: "S$",
    JPY: "¥"
  }
};

export const tradeComplianceStandards = [
  {
    code: "APEDA",
    title: "Agricultural & Processed Food Export Authority",
    issuedBy: "Ministry of Commerce, Govt of India",
    status: "Active & Certified",
    auditDate: "Valid through 2027",
    category: "Food & Agriculture"
  },
  {
    code: "SPICES-BOARD",
    title: "Spices Board of India Registered Exporter",
    issuedBy: "Spices Board, Cochin HQ",
    status: "Active & Validated",
    auditDate: "Annual Quality Re-certified",
    category: "Spices & Oils"
  },
  {
    code: "US-FDA",
    title: "US Food & Drug Administration Facility Registration",
    issuedBy: "FDA Biosecurity Inspection",
    status: "Compliant & Listed",
    auditDate: "Biannual Review",
    category: "All Consignments to USA"
  },
  {
    code: "ISO-9001",
    title: "ISO 9001:2015 Quality Management System",
    issuedBy: "TÜV Rheinland International",
    status: "Accredited",
    auditDate: "Surveillance Audit Passed",
    category: "Export Operations"
  },
  {
    code: "HACCP",
    title: "Hazard Analysis Critical Control Point",
    issuedBy: "Codex Alimentarius Commission",
    status: "Certified Clean-Line",
    auditDate: "Strict Batch Protocol",
    category: "Spices & Food Safety"
  }
];

export const mandatoryExportDocuments = [
  { id: "bol", name: "Ocean Bill of Lading (B/L)", agency: "Ocean Shipping Line", requiredFor: "All Sea Shipments", ready: true },
  { id: "coo", name: "Certificate of Origin (COO Form A / Preferential)", agency: "Chamber of Commerce / FIEO", requiredFor: "Customs Duty Exemption", ready: true },
  { id: "phyto", name: "Phytosanitary Quarantine Certificate", agency: "Plant Protection & Quarantine Govt", requiredFor: "Agricultural & Spices", ready: true },
  { id: "coa", name: "Certificate of Analysis (Lab CoA & Moisture Test)", agency: "SGS / Spices Board Lab", requiredFor: "Chemical & Purity Specs", ready: true },
  { id: "ci", name: "Commercial Invoice & Packing List (Certified)", agency: "GlobalTrade Operations", requiredFor: "Port Customs Clearance", ready: true },
  { id: "fum", name: "Fumigation & Pest Treatment Certificate", agency: "Accredited Fumigation Provider", requiredFor: "Solid Wood / Agricultural", ready: true },
  { id: "ins", name: "Marine Cargo Insurance Policy (110% CIF Value)", agency: "Underwriters (Lloyds / National)", requiredFor: "Risk Mitigation", ready: true }
];
