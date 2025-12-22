import React, { useState, useEffect } from 'react';
import '../style/footer.css';
import logoImage from '../assets/logo.webp';
import locationIcon from '../assets/location.webp';
import phoneIcon from '../assets/phone.webp';
import emailIcon from '../assets/email.webp';
import websiteIcon from '../assets/website.webp';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container container">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <a href="/" className="logo-link">
              <img src={logoImage} alt="Pecos Shield Logo" className="logo-image" />
            </a>
          </div>

          {/* Details Section */}
          <div className="footer-details">
            <h3 className="company-name f-24 f-m-16 w-600 second-font l-h-1">POOJA ECOCRETE PVT. LTD.</h3>
            <p className="industry f-22 f-m-16 w-400 second-font l-h-1">CONSTRUCTION SOLUTIONS</p>

            <div className="contact-info">
              <div className="info-item">
                <img src={locationIcon} alt="location-icon" />
                <span className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                  BF-1, Radhe Business Empire, S.P. Ring Road Circle,
                  <br />
                  Aslali, Ahmedabad, Gujarat - 382427
                </span>
              </div>
              <div className="info-item">
                <img src={phoneIcon} alt="phone-icon" />
                <span className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                  <a href="tel:+919274539828" className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                    Customer Care : +91 92745 39828
                  </a>
                </span>
              </div>
              <div className="info-item">
                <img src={emailIcon} alt="email-icon" />
                <span className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                  <a href="mailto:poojaecocrete@gmail.com" className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                    poojaecocrete@gmail.com
                  </a>
                </span>
              </div>
              <div className="info-item">
                <img src={websiteIcon} alt="website-icon" />
                <span className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'>
                  <a
                    href="https://www.poojaecocrete.com"
                    target="_blank"
                    className='f-16 f-m-16 white-color w-300 second-color l-h-1-4'
                    rel="noopener noreferrer"
                  >
                    www.poojaecocrete.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
            <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;