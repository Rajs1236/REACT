import React from 'react'
import img2 from './assets/fact.jpeg'
import img from './assets/fct.jpeg'
import i from './assets/im2.jpeg'
import rt from './assets/rt.webp'
function About() {
  return (
    <div>
      
      <p className='bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 text-xl rounded-2xl shadow-lg mb-8 text-center font-semibold'>At ShoeStore, we bring you a fresh take on footwear with a wide range of styles including sneakers, loafers, and sports shoes. Designed for comfort, performance, and everyday style, our collection fits the needs of modern movers and trendsetters alike.</p>
      <br></br>
      <div className='flex gap-4'><img src={img2} className="w-30 h-50"></img>
       <img src={img} className="w-30 h-50"></img>
       <img src={i} className="w-30 h-50"></img>
  
       </div>

      
         <p className='bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 text-xl rounded-2xl shadow-lg mb-8 text-center font-semibold'>We’re a new-age brand focused on quality, design, and versatility—so whether you're hitting the streets or the gym, ShoeStore has your perfect pair. Step into comfort. Step into style. Step into ShoeStore.

</p>  
      </div>
  )
}

export default About