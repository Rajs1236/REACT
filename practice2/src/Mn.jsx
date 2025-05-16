import React from 'react';
import img from './assets/image.jpeg';
import imjoota from './assets/imjoota.jpeg';
import snkr from './assets/sneaker.webp';
import rt from './assets/rt.webp';

function Body() {
  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 via-white to-pink-200 min-h-screen rounded-xl">
      <p className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 text-xl rounded-2xl shadow-lg mb-8 text-center font-semibold">
        Step into style and comfort with our latest collection of shoes. From everyday essentials to standout statement pieces, we offer high-quality footwear designed to keep you moving in confidence.
      </p>

      {/* Main Banner Image */}
      <div className="flex justify-center mb-10">
      
      </div>

      {/* Product Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <img src={imjoota} className="w-full h-200 object-cover rounded-xl shadow-md" alt="Loafers" />
        <img src={snkr} className="w-full h-200 object-cover rounded-xl shadow-md" alt="Sneakers" />
        <img src={rt} className="w-full h-200 object-cover rounded-xl shadow-md" alt="Running Shoes" />
      </div>
    </div>
  );
}

export default Body;
