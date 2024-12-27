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
    <div className="relative flex items-center justify-center min-h-screen mx-2">
      {/* Snowflakes container */}
      <div id="snowflakes-container" className="snowflakes"></div>

      {/* Main Content */}
      <div className="text-center max-w-lg sm:max-w-xl z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-200 font-dancing">
          Advika Trade Mart
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mt-2 font-roboto">
          Premium Dry Fruits Delivered Fresh to Your Doorstep
        </p>

        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            We're Coming Soon!
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mt-4">
            Stay tuned for the grand opening of our online store.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 space-y-2">
          {/* <p className="text-gray-200 text-base sm:text-lg">
            📞 <span className="font-bold">Contact:</span> +91 9930055555
          </p> */}
          
          <div className="flex items-center text-gray-200 text-base sm:text-lg">
  <span className="font-bold">📞 Contact:</span>
  <span className="ml-2 font-mono text-amber-200">
    +91 9930055555, +91 7700022222
  </span>
</div>
<div className="mt-2 text-gray-200 text-base sm:text-lg">
   <a href="http://advikatrademart.com" className="text-white underline">Advika Trademart.com</a>
</div>


        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
