import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Imports from './pages/Imports';
import Exports from './pages/Exports';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import TradeAnalytics from './pages/TradeAnalytics';
import NotFound from './pages/NotFound';

// Styles
import './App.css';
import './TradeAnalytics.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Scroll automatically to top on page change */}
        <ScrollToTop />

        {/* Global Sticky Navigation */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/imports" element={<Imports />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/analytics" element={<TradeAnalytics />} />
            <Route path="/dashboard" element={<TradeAnalytics />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
