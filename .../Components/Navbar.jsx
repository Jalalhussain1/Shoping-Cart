import React from 'react';
import { BsCart } from "react-icons/bs";  // ✅ Corrected icon import

const Navbar = () => {  // ✅ Corrected component name
  return (
    <div className='d-flex justify-content-between bg-secondary py-3 px-5  text-white'>
        <a href="#" className='navbar-brand fs-4 fw-bolder'>Shop</a>  {/* ✅ Fixed spelling */}
        <a href="#" className='navbar-link fs-5 text-white'> <BsCart size={24} /> </a>  {/* ✅ Fixed icon */}
    </div>
  );
};

export default Navbar;
