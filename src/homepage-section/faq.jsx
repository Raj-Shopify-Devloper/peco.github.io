import React from "react";
import Faqimage from "../assets/our-product-bg.webp";
import productImage from "../assets/our-product.webp";
import pecogripImage from '../assets/pecogrip.webp';
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.webp';
import smoothPutty from '../assets/smooth-putty.webp';


export default function OfferSection() {
  const maintitle = [
    {
      firstTitle: "Our",
      secondTitle: "Products",
    }
  ];
  const offers = [
    {
      title: "TILE ADHESIVE",
      desc: "Deliver unmatched bonding strength for every tile, every surface. For flawless finishes that last for years.",
      img: pecogripImage,
      link: "/product/pecogrip",
    },
    {
      title: "GROUT & SEALANTS",
      desc: "Seal the gaps, protect the beauty, ensure durable joints and long-lasting elegance.",
      img: epoxyGroutBucket,
      link: "/product/epoxy-grout-bucket",
    },
    {
      title: "WATER PROOFING",
      desc: "Guard your spaces from leaks and dampness. Engineered to protect, built to perform.",
      link: "/product/epoxy-grout-bucket",
    },
    {
      title: "WALL PUTTY",
      desc: "Create the perfect base for perfect walls, delivers a smooth, crack-free finish for premium painting.",
      img: smoothPutty,
      link: "/product/smooth-putty",
    },
    {
      title: "BLOCK JOINTING MORTAR",
      desc: "Stronger walls start with stronger bonds, ensures precision, durability, and perfect alignment.",
      link: "/product/smooth-putty",
    }
  ];

  return (
    <section className="section offer-section">
      <div className="container">
        <div className="offer-wrap">
          {/* Video */}
          <div className="offer-video-wrap">
            <div className="offer-video-background w-background-video">
              <img src={Faqimage} alt="Background" className="offer-video-bg-image" />
              {maintitle.map((item, index) => (
                <h2 className="offer-title first-font f-170 f-m-48 white-color w-700 l-h-1-4" key={index}>
                  <span class="transparent-text">{item.firstTitle} </span>
                  {item.secondTitle}
                </h2>
              ))}
              <img src={productImage} alt="Product" className="offer-video-product-image" />
            </div>
          </div>

          {/* Cards */}
          <div className="offer-card-wrap">
            <div className="offer-collection-list">
              {offers.map((item, index) => (
                <div className="offer-collection-item" key={index}>
                  <a href={item.link} className="offer-card" target="_blank" rel="noopener noreferrer">

                    <div className="offer-heading-wrap">
                      <div className="offer-card-header-wrap">
                        <h3 className="f-26 f-m-22 white-color second-font w-700 l-h-1-4">{item.title}</h3>
                      </div>
                      <div className="offer-card-description">
                        <p className="paragraph-large paragraph-color f-22 f-m-16 white-color w-500 l-h-1-4 second-font">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="offer-image-wrap">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="offer-card-image"
                        loading="lazy"
                      />
                    </div>

                    <div className="offer-card-button">
                      <div className="offer-button-wrap">
                        <div className="offer-arrow-icon">
                          <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.387 18.9488C13.1631 18.8165 13.0043 18.6 12.9229 18.3556C12.9164 18.2633 12.9131 18.1707 12.9119 18.0782C12.9102 18.005 12.9102 18.005 12.9084 17.9304C12.9612 17.3962 13.5569 16.968 13.9146 16.6117C13.9597 16.5667 14.0048 16.5216 14.0499 16.4765C14.1709 16.3555 14.292 16.2346 14.4132 16.1137C14.5403 15.9869 14.6673 15.8599 14.7943 15.733C15.0342 15.4932 15.2742 15.2536 15.5142 15.014C15.7878 14.7409 16.0612 14.4678 16.3346 14.1946C16.8964 13.6332 17.4584 13.072 18.0205 12.5109C17.9743 12.5108 17.9743 12.5108 17.9271 12.5107C16.0999 12.5082 14.2728 12.5049 12.4457 12.5008C12.2263 12.5003 12.007 12.4998 11.7876 12.4993C11.7221 12.4992 11.7221 12.4992 11.6553 12.499C10.948 12.4975 10.2408 12.4964 9.53362 12.4955C8.808 12.4945 8.08238 12.493 7.35677 12.4911C6.90899 12.49 6.46122 12.4892 6.01344 12.4889C5.70642 12.4887 5.39941 12.488 5.09239 12.4869C4.91523 12.4863 4.73808 12.4859 4.56092 12.486C4.39864 12.4862 4.23638 12.4857 4.0741 12.4848C3.98777 12.4844 3.90144 12.4847 3.81511 12.4851C3.42891 12.482 3.10185 12.4457 2.81543 12.1593C2.62909 11.8898 2.5631 11.651 2.5957 11.3243C2.66891 11.0113 2.82386 10.8437 3.08185 10.6542C3.27175 10.541 3.41746 10.5278 3.63689 10.5272C3.68822 10.527 3.73954 10.5267 3.79242 10.5265C3.84885 10.5264 3.90528 10.5264 3.96341 10.5264C4.02393 10.5262 4.08444 10.5259 4.14495 10.5257C4.3114 10.5251 4.47785 10.5248 4.6443 10.5245C4.82374 10.5241 5.00317 10.5235 5.18261 10.523C5.49355 10.522 5.80448 10.5212 6.11542 10.5205C6.56499 10.5195 7.01455 10.5183 7.46412 10.517C8.19348 10.5149 8.92285 10.513 9.65221 10.5112C10.3608 10.5095 11.0694 10.5077 11.7779 10.5057C11.8434 10.5056 11.8434 10.5056 11.9103 10.5054C12.1293 10.5048 12.3484 10.5042 12.5674 10.5036C14.3851 10.4986 16.2028 10.4939 18.0205 10.4894C17.9955 10.4645 17.9706 10.4397 17.9448 10.414C17.3367 9.80885 16.729 9.20328 16.1216 8.5973C15.8279 8.30426 15.534 8.01135 15.2399 7.71872C14.9835 7.46363 14.7273 7.20831 14.4714 6.95271C14.336 6.81741 14.2004 6.68224 14.0645 6.54734C13.9366 6.42026 13.8089 6.29288 13.6815 6.16525C13.6348 6.11857 13.5879 6.07199 13.541 6.02554C12.9432 5.43396 12.9432 5.43396 12.9119 4.96325C12.9162 4.67076 13.0231 4.41254 13.2305 4.20519C13.5011 4.01806 13.7378 3.95486 14.0654 3.98546C14.6346 4.12316 15.0771 4.7267 15.4797 5.129C15.5413 5.1904 15.6029 5.25181 15.6646 5.3132C15.8307 5.47878 15.9968 5.64452 16.1627 5.81029C16.2666 5.91401 16.3705 6.01771 16.4743 6.1214C16.7999 6.44632 17.1253 6.77133 17.4506 7.09647C17.8253 7.47097 18.2003 7.84517 18.5755 8.21914C18.8663 8.50897 19.1568 8.79906 19.4472 9.08934C19.6203 9.26242 19.7935 9.43539 19.967 9.6081C20.13 9.77038 20.2927 9.93298 20.4552 10.0958C20.5147 10.1554 20.5743 10.2148 20.6341 10.2742C20.7159 10.3554 20.7973 10.437 20.8786 10.5188C20.9021 10.542 20.9256 10.5651 20.9498 10.589C21.2097 10.8523 21.3903 11.1143 21.4153 11.4891C21.3992 12.1607 20.6974 12.653 20.2553 13.0949C20.1934 13.157 20.1314 13.2192 20.0694 13.2813C19.9023 13.4488 19.735 13.6162 19.5677 13.7835C19.4631 13.8882 19.3585 13.9929 19.2539 14.0976C18.8887 14.4632 18.5234 14.8287 18.1579 15.1941C17.8177 15.5343 17.4776 15.8748 17.1377 16.2154C16.8453 16.5084 16.5527 16.8012 16.26 17.0939C16.0854 17.2685 15.9109 17.4431 15.7366 17.6179C15.5728 17.7821 15.4089 17.9461 15.2447 18.1099C15.1846 18.17 15.1246 18.2301 15.0646 18.2904C14.9826 18.3726 14.9004 18.4547 14.8181 18.5366C14.7945 18.5604 14.7709 18.5842 14.7466 18.6088C14.3762 18.9759 13.9003 19.1747 13.387 18.9488Z" fill="currentcolor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <a href="/products" className="primary f-30 f-m-22 w-600 white-color second-font offer-view-more-button text-uppercase">
            VIEW ALL PRODUCTS
          </a>

        </div>
      </div>
    </section>
  );
}
