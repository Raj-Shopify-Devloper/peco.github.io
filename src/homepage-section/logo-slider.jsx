import React from 'react';
import logo1 from '../assets/eiffage.webp';
import logo2 from '../assets/aecom.webp';
import logo3 from '../assets/amazon.webp';
import logo4 from '../assets/build.webp';
import logo5 from '../assets/fedex.webp';
import logo6 from '../assets/DREAMSCAPE.webp';
import logo7 from '../assets/LAXMI.webp';
import logo8 from '../assets/FORTUNE.webp';
import logo9 from '../assets/SAROVAR.webp';

const LogoSlider = () => {
  const logos = [
    { id: 1, src: logo1, alt: 'EIFFAGE' },
    { id: 2, src: logo2, alt: 'AECOM' },
    { id: 3, src: logo3, alt: 'Amazon' },
    { id: 4, src: logo4, alt: 'Build' },
    { id: 5, src: logo5, alt: 'FedEx' },
    { id: 6, src: logo6, alt: 'DREAMSCAPE' },
    { id: 7, src: logo7, alt: 'LAXMI' },
    { id: 8, src: logo8, alt: 'FORTUNE' },
    { id: 9, src: logo9, alt: 'SAROVAR' },
  ];

  return (
    <section className="logo-slider-section">
      <div className="logo-slider-container container">
        <div className="logo-slider">
          {/* Original logos */}
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
          {/* Duplicated logos for infinite effect */}
          {logos.map((logo) => (
            <div key={`duplicate-${logo.id}`} className="logo-item">
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;