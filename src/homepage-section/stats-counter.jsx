import React, { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "SATISFIED CUSTOMER", value: 150 },
  { label: "ORDERS EVERY MONTH", value: 5000 },
  { label: "YEARS EXPERIENCE", value: 5 },
  { label: "CITIES SERVED", value: 10 },
];

export default function StatsCounterSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounting();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 1500;
    const frameRate = 30;

    statsData.forEach((item, index) => {
      let current = 0;
      const increment = item.value / (duration / frameRate);

      const counter = setInterval(() => {
        current += increment;
        if (current >= item.value) {
          current = item.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, frameRate);
    });
  };

  return (
    <div className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-content">
          {statsData.map((item, index) => (
            <div key={index} className="stats-box">
              <div className="stats-number f-70 f-m-38 w-800 white-color second-font l-h-1">{counts[index]}+</div>
              <div className="stats-label f-28 f-m-22 white-color w-500 second-font l-h-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
