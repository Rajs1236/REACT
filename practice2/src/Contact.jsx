import React from 'react'

function Contact() {
  return (
    <div>
<form className="space-y-4">
    <br></br>
  <input type="text" placeholder="Your Name" className="w-50 p-2 border rounded" /><br></br>
  <input type="email" placeholder="Your Email" className="w-80 p-2 border rounded" /><br></br>
  <textarea placeholder="Your Message" className="w-100 h-80 p-2 border rounded"></textarea><br></br>
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
</form>

<div>
  <h2 className="text-xl font-bold">Reach Us At</h2>
  <p>📍 123 Shoe Street,Kanpur, Uttar Pradesh, 208001</p>
  <p>📞 +91 9876543210</p>
  <p>✉️ support@shoestore.com</p>
  <p>⏰ Mon – Sat: 9:00 AM – 6:00 PM</p>
</div>


    </div>
  )
}

export default Contact