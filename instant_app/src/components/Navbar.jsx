import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/menu">Menus</Link>
    <Link to="/product">Product</Link>
    <Link to="/contact">Contact Us</Link>
    </>
  )
}

export default Navbar