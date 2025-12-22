import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import backgroundVideoThumbnail from "../assets/video/banner-first.mp4";
import GroutBucketVideo from "../assets/video/tile-grout.mp4";
import pecoPutty from "../assets/video/peco-putty.mp4";
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.webp';
import smoothPutty from '../assets/smooth-putty.webp';
import pecoprimeProductImage from '../assets/pecoprime.webp';

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      background: backgroundVideoThumbnail,
      product: pecoprimeProductImage,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: true,
    },
    {
      id: 2,
      background: GroutBucketVideo,
      product: epoxyGroutBucket,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: false,
    },
    {
      id: 3,
      background: pecoPutty,
      product: smoothPutty,
      title: "CONSTRUCTION",
      subtext: "SOLUTIONS",
      videoLabel: false,
    }
  ];

  const Slider = Slick && (Slick.default || Slick);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="hero-banner">
      <div className="container">
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id} className="hero-slide fade-animate">
              <div className="hero-background">
                <video
                  src={item.background}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-bg-video"
                />
              </div>
              <div className="hero-title-wrap">
                <h1 className="hero-title f-110 f-m-48 white-color w-800 l-h-1 first-font">
                  {item.title}<span className="designers" data-text={item.subtext}> {item.subtext}</span>
                </h1>
                <div className="pecoshield-2k-wrap">
                  <img
                    src={item.product}
                    alt="Product"
                    className="pecoshield-2k"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;