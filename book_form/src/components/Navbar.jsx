import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
            Brand
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            <Link 
              to="/" 
              className="relative px-6 py-3 text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="relative px-6 py-3 text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar