// "use client";
// import React from 'react';

// export default function ComingSoon() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 text-gray-800 px-4">
//       <div className="text-center max-w-lg sm:max-w-xl">
//         {/* Logo with Stylish Font */}
//         <div className="mb-8">
//           <h1
//             className="text-4xl sm:text-5xl font-bold text-amber-700"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Advika<span className="text-orange-600">TradeMart</span>
//           </h1>
//           <p
//             className="text-base sm:text-lg text-gray-700 mt-2"
//             style={{ fontFamily: "'Roboto', sans-serif" }}
//           >
//             Premium Dry Fruits Delivered Fresh to Your Doorstep
//           </p>
//         </div>

//         {/* Hero Section */}
//         <div className="space-y-4 sm:space-y-6">
//           <h2
//             className="text-2xl sm:text-3xl font-semibold"
//             style={{ fontFamily: "'Roboto', sans-serif" }}
//           >
//             We're Coming soon!
//           </h2>
//           <p className="text-sm sm:text-base text-gray-600">
//             Stay tuned for the grand opening of our online store.
//           </p>
//         </div>

//         {/* Contact Information */}
//         <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
//           <p className="text-base sm:text-lg text-gray-700">
//             📞 <span className="font-bold">Contact Number:</span> +91 9930055555
//           </p>
//           {/* <p className="text-base sm:text-lg text-gray-700">
//             📧 <span className="font-bold">Email:</span> contact@advikatrademart.com
//           </p> */}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect } from 'react';

export default function ComingSoon() {

  useEffect(() => {
    // Dynamically create snowflakes
    const snowflakesContainer = document.getElementById('snowflakes-container');
    for (let i = 0; i < 30; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflakesContainer.appendChild(snowflake);
    }
  }, []);
  
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 text-gray-800 px-4">
      {/* Snowflakes container */}
      <div id="snowflakes-container" className="snowflakes"></div>
      
      <div className="text-center max-w-lg sm:max-w-xl">
        {/* Logo with Stylish Font */}
        <div className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-amber-700"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Advika<span className="text-orange-600">TradeMart</span>
          </h1>
          <p
            className="text-base sm:text-lg text-gray-700 mt-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Premium Dry Fruits Delivered Fresh to Your Doorstep
          </p>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            We're Coming soon!
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Stay tuned for the grand opening of our online store.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
          <p className="text-base sm:text-lg text-gray-700">
            📞 <span className="font-bold">Contact Number:</span> +91 9930055555
          </p>
        </div>
      </div>
    </div>
  );
}
