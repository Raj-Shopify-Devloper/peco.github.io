import React, { useEffect } from 'react';
import './App.css';
import './style/logo-animation.css'; // Import animation styles
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header.jsx';
import Home from './pages/home.jsx';
import Footer from './component/footer.jsx';
import PecoGrid from './pages/peco-grid.jsx';
import About from './pages/about.jsx';
import ProductDetail from './product-section/ProductDetail.jsx';
import Download from './pages/download.jsx';
import Contact from './pages/contact.jsx';

import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<PecoGrid />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
