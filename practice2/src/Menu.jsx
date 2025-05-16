import React from 'react';
import img from './assets/image.jpeg';
import img2 from './assets/joota.jpeg';
import img3 from './assets/joota2.avif';
import img4 from './assets/joota3.webp';
import rt from './assets/rt.webp'
function Menu() {
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {
        <><li><img src={img} alt="" className='w-50 h-30'/><h>₹1800</h></li>
       <li><img src={img2} alt=""  className='w-50 h-30'/><h>₹2800</h></li>
       <li><img src={rt} alt=""  className='w-50 h-30'/><h>₹2200</h></li>
       <li><img src={img4} alt="" className='w-50 h-30'/><h>₹1400</h></li>
       </>
        
      }
    </ul>
  );
}

export default Menu;
