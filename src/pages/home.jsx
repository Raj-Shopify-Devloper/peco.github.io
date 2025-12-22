import CreativeSection from '../homepage-section/creative.jsx';
import { useEffect, useRef, useState, useMemo } from "react";
import DesignProcessSection from '../homepage-section/process.jsx';
import OfferSection from '../homepage-section/faq.jsx';
import HeroBanner from '../homepage-section/hero-banner.jsx';
import { initHomeAnimations } from '../script/home-section';
import LogoSliderSection from '../homepage-section/logo-slider.jsx';
import InfiniteBanner from '../homepage-section/cross-section.jsx';
import StatsCounterSection from '../homepage-section/stats-counter.jsx';
import LetsTalkSection from '../homepage-section/lets-talk.jsx';
import VerticalAnimationSite from '../component/vertical-animation-site.jsx';

export default function Home() {
  useEffect(() => {
    initHomeAnimations();
  }, []);

  return (
    <>
      <VerticalAnimationSite />
      <HeroBanner />
      <LogoSliderSection />
      <CreativeSection />
      <InfiniteBanner />
      <OfferSection />
      <DesignProcessSection />
      <StatsCounterSection />
      <LetsTalkSection />
    </>
  );
}