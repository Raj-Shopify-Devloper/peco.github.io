import React from "react";
import Strengthman from '../assets/strength-man.webp';;

export default function DesignProcessSection() {
  return (
    <section
      className="creative-section design-process-section"
    >
      <div className="design-sticky-wrap">
        <div className="w-layout-blockcontainer container w-container">
          <div className="design-wrapper v2">
            <div className="design-top-wrap">
              <div className="section-sub-title f-30 f-m-20 w-400 second-font white-color">CONSTRUCTION EXCELLENCE</div>

              <div className="design-content-wrap">
                <h2 className="design-process">
                  <span className="f-110 f-m-40 w-500 white-color first-font l-h-1">
                    STRENGTH
                    <br />
                    YOU &nbsp;&nbsp; CAN
                    <br />
                  </span>
                  <b className="f-170 f-m-48 w-500 white-color first-font l-h-1">TRUST</b>
                </h2>
              </div>
              <img src={Strengthman} alt="Strengthman" className="strengt-hman" />
            </div>
            <div
              className="box-one _1"
              style={{ transform: "translate(-50%, -50%) scale(0)" }}
            ></div>

            <div
              className="box-one _2"
              style={{ transform: "translate(-50%, -50%) scale(0)" }}
            ></div>

            <div className="box-two" style={{ opacity: 0 }}>
              <div className="inner-box-div">
                <div className="design-process-image _1 black-color f-48 first-font f-m-22 w-500 l-h-1" style={{ opacity: 0, transform: "translateX(-150px)" }}>
                  RELIABILITY
                </div>
                <div className="design-process-image _2 black-color f-48 first-font f-m-22 w-500 l-h-1" style={{ opacity: 0, transform: "translateX(-50px)" }}>
                  STRENGTH
                </div>
                <div className="design-process-image _3 black-color f-48 first-font f-m-22 w-500 l-h-1" style={{ opacity: 0, transform: "translateX(-150px)" }}>
                  EASE OF USE
                </div>
                <div className="design-process-image _4 black-color f-48 first-font f-m-22 w-500 l-h-1" style={{ opacity: 0, transform: "translateX(-150px)" }}>
                  TRUST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
