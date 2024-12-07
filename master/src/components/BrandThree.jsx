"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const BrandThree = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    speed: 900,
    infinite: true,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 7,
          arrows: false,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className='top-brand three pb-20 overflow-hidden'>
      <div className='container container-lg'>
        <div className='border border-gray-100 p-24 rounded-16'>
          <div className='section-heading mb-24'>
            <div className='flex-between flex-wrap gap-8'>
              <h5 className='mb-0 text-uppercase'>Top Brands</h5>
              <div className='flex-align gap-8'>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  type='button'
                  id='topBrand-prev'
                  className='slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-two-600 text-xl hover-bg-main-two-600 hover-text-white transition-1'
                >
                  <i className='ph ph-caret-left' />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  type='button'
                  id='topBrand-next'
                  className='slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-two-600 text-xl hover-bg-main-two-600 hover-text-white transition-1'
                >
                  <i className='ph ph-caret-right' />
                </button>
              </div>
            </div>
          </div>
          <div className='top-brand__slider'>
            <Slider ref={sliderRef} {...settings}>
              <div>
                <img src='assets/images/thumbs/brand-three-img1.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img2.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img3.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img4.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img5.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img6.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img7.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img8.png' alt='' />
              </div>
              <div>
                <img src='assets/images/thumbs/brand-three-img5.png' alt='' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandThree;
