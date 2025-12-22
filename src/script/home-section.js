// home-section.js

import { button } from "framer-motion/client";



export function initHomeAnimations() {
  // ============================ design process section Start ============================ //

  let dpSection = document.querySelector(".creative-section.design-process-section");
  let dpTopWrap = document.querySelector(".design-top-wrap");
  let dpBox1 = document.querySelector(".box-one._1");
  let dpBox2 = document.querySelector(".box-one._2");
  let dpBoxTwo = document.querySelector(".box-two");
  let dpImages = document.querySelectorAll(".design-process-image");

  if (!dpSection) return;

  function dpEaseOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateDesignProcess() {
    const rect = dpSection.getBoundingClientRect();
    const dpTop = rect.top + window.scrollY;
    const dpHeight = dpSection.offsetHeight;
    const scrollY = window.scrollY;

    const progress = Math.max(
      0,
      Math.min(1, (scrollY - dpTop) / (dpHeight - window.innerHeight))
    );

    // dpTopWrap.style.opacity = Math.min(1, progress * 2);
    dpTopWrap.style.transform = `scale(${1 + 0.05 * progress})`;

    dpBox1.style.transform = `translate(-50%, -50%) scale(${2 * progress})`;
    dpBox2.style.transform = `translate(-50%, -50%) scale(${3 * Math.max(0, progress - 0.3)})`;

    const boxTwoStart = 0.39;
    const boxTwoProg = Math.max(0, (progress - boxTwoStart) / (0.09 + boxTwoStart));
    dpBoxTwo.style.opacity = dpEaseOutCubic(boxTwoProg);

    dpImages.forEach((div, index) => {
      const delay = index * 0.001;
      const prog = Math.max(0, progress - 0.8 - delay);
      const opacity = Math.min(1, prog * 20);

      let translateX = index === 1 ? -50 : -150;
      translateX += Math.min(1, prog) * Math.abs(translateX);

      div.style.opacity = opacity;
      div.style.transform = `translateX(${translateX}px)`;
    });
  }

  function dpScrollHandler() {
    requestAnimationFrame(updateDesignProcess);
  }

  window.addEventListener("scroll", dpScrollHandler);
  updateDesignProcess();

  // ============================ design process section End ============================ //



  // ======================= creative section Start ======================= //
  let crSection = document.querySelector(".creative-section.creative");
  let crTitleSpans = document.querySelectorAll(".text-gray");
  let crLineImg = document.querySelector(".line-image");
  let crStarImg = document.querySelector(".star-image");
  let crCircleImg = document.querySelector(".circle-image");

  if (!crSection || !crLineImg || !crStarImg || !crCircleImg) return;

  function updateCreativeSection() {
    const rect = crSection.getBoundingClientRect();
    const crTop = rect.top + window.scrollY;
    const crHeight = crSection.offsetHeight;
    const scrollY = window.scrollY;

    let progress = Math.max(
      0,
      Math.min(1, (scrollY - crTop) / (crHeight - window.innerHeight))
    );

    let speedProgress = Math.min(1, progress / 0.6);
    const totalSpans = crTitleSpans.length;
    if (totalSpans > 0) {
      crTitleSpans.forEach((span, index) => {
        if (index === 0) {
          span.style.opacity = 1;
          span.style.transform = `scale(1)`;
          return;
        }

        const startProgress = index / totalSpans;
        const endProgress = (index + 1) / totalSpans;
        let localProgress = 0.3;
        if (speedProgress >= startProgress && speedProgress <= endProgress) {
          localProgress = (speedProgress - startProgress) / (endProgress - startProgress);
        } else if (speedProgress > endProgress) {
          localProgress = 1;
        }

        let opacity = localProgress;
        if (index === 1) {
          opacity = 0.3 + 0.7 * localProgress;
        }

        const scale = 0.9 + 0.1 * localProgress;
        span.style.opacity = opacity;
        span.style.transform = `scale(${scale})`;
      });
    }

    crLineImg.style.opacity = speedProgress;
    crLineImg.style.transform = `translateX(${-100 + 100 * speedProgress}px) rotate(0deg)`;

    crStarImg.style.opacity = speedProgress;
    crStarImg.style.transform = `translateX(${-150 + 150 * speedProgress}px) rotateZ(${190 * speedProgress}deg)`;

    crCircleImg.style.opacity = speedProgress;
    crCircleImg.style.transform = `scale(${0.98459 * speedProgress}) rotateZ(${360 * speedProgress}deg)`;
  }

  function crScrollHandler() {
    requestAnimationFrame(updateCreativeSection);
  }

  window.addEventListener("scroll", crScrollHandler);
  updateCreativeSection();

  // ======================= creative section End ======================= //


  // Footer button
  const scrollToTopButton = document.querySelector(".scroll-top-btn");

  if (!scrollToTopButton) return;

  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(toggleScrollButton);
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleScrollButton();
}
