import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../style/header.css';
import logoImage from '../assets/logo.webp';
import { initHeaderFunctionality, getSearchSuggestions } from '../script/header-functionality';
import { initLogoAnimation } from '../script/logo-animation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState({ pages: [], products: [] });
  const location = useLocation();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSuggestions(getSearchSuggestions(query));
  };

  useEffect(() => {
    initHeaderFunctionality();
  }, []);

  useEffect(() => {
    const cleanup = initLogoAnimation();
    return cleanup;
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <div className="header-logo" id="header-logo">
          <NavLink to="/" className="logo-link">
            <img src={logoImage} alt="Pecos Shield Logo" className="logo-image" />
          </NavLink>
        </div>
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font ${isActive ? 'active' : ''}`}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => `nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font ${isActive ? 'active' : ''}`}
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/download"
                className={({ isActive }) => `nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font ${isActive ? 'active' : ''}`}
              >
                DOWNLOAD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font ${isActive ? 'active' : ''}`}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line line1 bg-white-color"></span>
          <span className="hamburger-line line2 bg-white-color"></span>
          <span className="hamburger-line line3 bg-white-color"></span>
        </button>
      </div>
      <div className={`menu-overlay-custom ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-left-panel">
          <div className="menu-logo-container">
            <NavLink to='/' onClick={closeMenu}>
              <img src={logoImage} alt="Pecos Shield Logo" className="menu-logo-image" />
            </NavLink>
          </div>
          <div className="menu-vertical-text first-font">PecoPecoPecoPecoPecoPecoPecoPecoPeco</div>
        </div>
        <div className="menu-right-panel">
          <div className="menu-top-bar">
            <div className="search-container">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input
                type="text"
                placeholder="Type To Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {suggestions && (suggestions.pages?.length > 0 || suggestions.products?.length > 0) && (
                <div className="search-suggestions">
                  {suggestions.pages?.length > 0 && (
                    <>
                      <div className="suggestion-category">Pages</div>
                      <ul className="category-list">
                        {suggestions.pages.map((item, index) => (
                          <li key={`page-${index}`} className="suggestion-item">
                            <NavLink to={item.url} onClick={closeMenu}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {suggestions.products?.length > 0 && (
                    <>
                      <div className="suggestion-category">Products</div>
                      <ul className="category-list">
                        {suggestions.products.map((item, index) => (
                          <li key={`product-${index}`} className="suggestion-item">
                            <NavLink to={item.url} onClick={closeMenu}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="close-container">
              <span className="separator">|</span>
              <button className="close-btn" onClick={closeMenu}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
          <ul className="menu-list-custom">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                ABOUT US
              </NavLink>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                PRODUCTS
              </NavLink>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <NavLink
                to="/download"
                className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                DOWNLOAD
              </NavLink>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                CONTACT
              </NavLink>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;