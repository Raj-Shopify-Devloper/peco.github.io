import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../style/homepage.css';
import Starimage from '../assets/start-image.webp';
import lineImage from '../assets/line-start.webp';
import streemImage from '../assets/streem-round.webp';
import Manicon from '../assets/foundation-image.webp';
import video from '../assets/video/launch-video.mp4';

const CreativeSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = (e) => {
    if (e) e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <section className="creative-section creative creative-foundation sticky-section">
        <div className="design-sticky-wrap">
          <div className="container">
            <div className="design-wrapper">
              <div className="design-top-wrap">
                <div className="content-wrap">
                  <div className="man-image">
                    <img src={Manicon} loading="lazy" alt="Pecoshelldirect Man" />
                  </div>
                  <div className="left-content">
                    <h2 className="deesign-title">
                      <span className="text-gray _01 f-70 f-m-48 first-font w-800 white-color l-h-1-2">FROM</span>{' '}
                      <br></br>
                      <span className="text-gray _02 f-70 f-m-48 first-font w-800 white-color l-h-1-2">FOUNDATION</span>
                      <br></br>
                      <span className="text-gray _03 f-70 f-m-48 first-font w-800 white-color l-h-1-2">TO </span><span className="text-gray _03 f-70 f-m-48 first-font w-800 white-color l-h-1-2">FINISH</span>{' '}
                      <br></br>
                      <span className="text-gray _04 f-70 f-m-48 first-font w-800 white-color l-h-1-2">PECO </span><span className="text-gray _04 f-70 f-m-48 first-font w-800 white-color l-h-1-2">HAS</span>{' '}
                      <br></br>
                      <span className="text-gray _05 f-70 f-m-48 first-font w-800 white-color l-h-1-2">YOU </span><span className="text-gray _05 f-70 f-m-48 first-font w-800 white-color l-h-1-2">COVERED.</span>{' '}
                    </h2>
                    <img src={lineImage} loading="lazy" alt="line-image" className="line-image" />
                    <div className="star-image-wrapper star-image">
                      <img src={Starimage} loading="lazy" alt="star-image" className="curve_text_image" />
                    </div>
                    <div className="circle-image-wrapper circle-image" onClick={togglePopup} style={{ cursor: 'pointer' }}>
                      <div className="circle-link">
                        <svg viewBox="0 0 100 100" className="curve_text_image" width="auto" height="auto">
                          <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                          </defs>
                          <text fontSize="9.2" fontWeight="600" fill="#fff">
                            <textPath xlinkHref="#circle">
                              STRANTH YOU CAN TRUST • STRANTH YOU CAN TRUST •
                            </textPath>
                          </text>
                        </svg>
                        <img src={streemImage} loading="lazy" alt="circle-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="video-popup-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            onClick={togglePopup}
          >
            <motion.div
              className="video-popup-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-popup-btn" onClick={togglePopup}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="video-wrapper">
                <video
                  controls
                  autoPlay
                  className="popup-video"
                  src={video}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default CreativeSection;