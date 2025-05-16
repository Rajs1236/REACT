import React from 'react'
import intro from '../introduction/Intro'
import { Link,NavLink } from 'react-router'
function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#172842] text-white flex justify-center space-x-8 py-4 shadow-md z-50">
    <link 
    to="/intro"
     className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
      Intro
     </link>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#certifications">Certifications</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default Header