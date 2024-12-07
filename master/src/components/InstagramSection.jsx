"use client";

import React, { useRef } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const InstagramSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className='instagram pb-120 overflow-hidden'>
      <div className='container container-lg'>
        <div className='section-heading'>
          <div className='flex-between flex-wrap gap-8'>
            <div className=''>
              <h5 className='mb-0 text-uppercase'>Instagram</h5>
              <p className='text-gray-500'>
                Get inspired by Carina fans from all around the world
              </p>
            </div>

            <div className='inner flex-align gap-16'>
              <Link
                href='/shop'
                className='text-sm fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline'
              >
                View All
              </Link>
              <div className='flex-align gap-8'>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  type='button'
                  id='instagram-prev'
                  className='slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1'
                >
                  <i className='ph ph-caret-left' />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  type='button'
                  id='instagram-next'
                  className='slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1'
                >
                  <i className='ph ph-caret-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='instagram-slider'>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <div className='instagram-item rounded-24 overflow-hidden position-relative'>
                <img src='assets/images/thumbs/instagram-img1.png' alt='' />
                <Link
                  href='https://www.instagram.com'
                  className='w-72 h-72 bg-black bg-opacity-50 text-white text-32 position-absolute top-50 start-50 translate-middle flex-center rounded-circle hover-bg-main-two-600 hover-text-white'
                >
                  <i className='ph ph-instagram-logo' />
                </Link>
              </div>
            </div>
            <div>
              <div className='instagram-item rounded-24 overflow-hidden position-relative'>
                <img src='assets/images/thumbs/instagram-img2.png' alt='' />
                <Link
                  href='https://www.instagram.com'
                  className='w-72 h-72 bg-black bg-opacity-50 text-white text-32 position-absolute top-50 start-50 translate-middle flex-center rounded-circle hover-bg-main-two-600 hover-text-white'
                >
                  <i className='ph ph-instagram-logo' />
                </Link>
              </div>
            </div>
            <div>
              <div className='instagram-item rounded-24 overflow-hidden position-relative'>
                <img src='assets/images/thumbs/instagram-img3.png' alt='' />
                <Link
                  href='https://www.instagram.com'
                  className='w-72 h-72 bg-black bg-opacity-50 text-white text-32 position-absolute top-50 start-50 translate-middle flex-center rounded-circle hover-bg-main-two-600 hover-text-white'
                >
                  <i className='ph ph-instagram-logo' />
                </Link>
              </div>
            </div>
            <div>
              <div className='instagram-item rounded-24 overflow-hidden position-relative'>
                <img src='assets/images/thumbs/instagram-img4.png' alt='' />
                <Link
                  href='https://www.instagram.com'
                  className='w-72 h-72 bg-black bg-opacity-50 text-white text-32 position-absolute top-50 start-50 translate-middle flex-center rounded-circle hover-bg-main-two-600 hover-text-white'
                >
                  <i className='ph ph-instagram-logo' />
                </Link>
              </div>
            </div>
            <div>
              <div className='instagram-item rounded-24 overflow-hidden position-relative'>
                <img src='assets/images/thumbs/instagram-img2.png' alt='' />
                <Link
                  href='https://www.instagram.com'
                  className='w-72 h-72 bg-black bg-opacity-50 text-white text-32 position-absolute top-50 start-50 translate-middle flex-center rounded-circle hover-bg-main-two-600 hover-text-white'
                >
                  <i className='ph ph-instagram-logo' />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
