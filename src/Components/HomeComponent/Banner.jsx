"use client";

import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
  const background = {
    image: "https://i.ibb.co.com/5vVB17P/banner-6.jpg",
    translateY: [0, 10],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [1, 0],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute right-10 bottom-16 flex items-center justify-end">
        <svg
          style={{ width: "832px", height: "757px" }}
          class="absolute ml-10 mr-[-168px] "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 832 757"
        >
          <path d="M391 0H63.5L505 757H832L391 0Z" fill="url(#paint0_linear)" />
          <path
            d="M323.5 145H0L354 757H681.5L323.5 145Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="233"
              y1="0"
              x2="678"
              y2="757"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0336" offset="0.1"></stop>
              <stop offset="1" stop-color="#FF0135" stop-opacity="0.1"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="150.311"
              y1="145"
              x2="493.162"
              y2="784.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0336" offset="0.1"></stop>
              <stop offset="1" stopColor="#FF0135" stopOpacity="0.1"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="text-left space-y-4 text-white z-10 -mt-10">
          <div>
            <div className="inline-block bg-white text-red-500 font-bold text-sm uppercase py-2 px-4 relative">
              OUR FEATURED CLASS
            </div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-6xl font-bold">MAKE YOUR BODY</h1>
            <h1 className="text-6xl font-light">FIT & PERFECT</h1>
          </div>
          <p>
            Gymhen an unknown printer took a galley of type and scrambled.
            <br />
            It has survived unknown printercenturies.
          </p>
        </div>
      </div>
    ),
  };

  const foreground = {
    image: "",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute inset-0 " />,
  };

  return (
    <div>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="aspect-[2/1] bg-gray-900"
      />
    </div>
  );
};

export default Banner;
