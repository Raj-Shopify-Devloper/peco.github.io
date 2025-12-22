import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const LetsTalkSection = () => {
  const ref = useRef(null);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };

  // Wrapper moves with mouse (The "whole section" effect)
  const wrapperX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const wrapperY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="lets-talk-section-new"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="footer_text_wrapper"
        style={{ x: wrapperX, y: wrapperY }}
      >
        <div className="footer_text f-110 f-m-48 white-color w-600 second-font l-h-1">
          Lets talk
        </div>

        <MagneticButton />

        <div className="footer_text f-110 f-m-48 white-color w-600 second-font l-h-1">
          with us
        </div>

        {/* Hidden slider wrapper for now */}
      </motion.div>
    </section>
  );
};

const MagneticButton = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 }); // 0.5 = magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  // Smooth spring animation for the magnetic effect
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.a
      href="/contact"
      className="circle_button footer w-inline-block"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      <svg viewBox="0 0 100 100" className="curve_text_image" width="auto" height="auto">
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="18" fontWeight="bold" fill="#fff">
          <textPath xlinkHref="#circle">
            LETS TALK WITH US • LETS TALK WITH US •
          </textPath>
        </text>
      </svg>
      <div className="circle_link footer">
        <div className="cirle_link_svg footer w-embed">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default LetsTalkSection;
