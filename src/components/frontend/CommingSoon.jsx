"use client";

import React, { useEffect } from "react";
import '../../app/snowflake.css';

const ComingSoon = () => {
  useEffect(() => {
    // Add snowflakes dynamically
    const snowflakesContainer = document.getElementById("snowflakes-container");
    if (snowflakesContainer) {
      for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 10 + 8}s`; // Random animation duration
        snowflake.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay
        snowflakesContainer.appendChild(snowflake);
      }
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 md:px-6 lg:px-8">
      {/* Snowflakes container */}
      <div id="snowflakes-container" className="snowflakes"></div>

      {/* Main Content */}
      <div className="text-center max-w-md md:max-w-lg lg:max-w-xl space-y-4 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200 font-dancing">
          Advika Trade Mart
        </h1>
        <p className="text-gray-300 text-sm md:text-lg mt-2 font-roboto">
          Premium Dry Fruits Delivered Fresh to Your Doorstep
        </p>

        <div className="mt-6 md:mt-8 space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            We're Coming Soon!
          </h2>
          <p className="text-gray-200 text-xs md:text-sm lg:text-base mt-2">
            Stay tuned for the grand opening of our online store.
          </p>

          <div className="flex flex-col md:items-center text-gray-200 text-xs md:text-sm lg:text-base space-y-2">
            <div className="flex items-center">
              <span className="font-bold">📞 Contact:</span>
              <span className="ml-2 font-mono text-amber-200">
                +91 9930055555, +91 7700022222
              </span>
            </div>
            <div>
              <a href="http://advikatrademart.com" className="text-white underline centered-link">
                Advika Trademart.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
