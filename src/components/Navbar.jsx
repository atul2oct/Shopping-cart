import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const {cart} = useSelector((state)=>state)
  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="data:image/png;base64,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"
            className="h-14"

            />
          </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
        <div className='relative'>
          <FaShoppingCart className='text-2xl'/>
          {
            cart.length > 0 &&
            <span className='absolute -top-1 -right-2 bg-green bg-green-600
            text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
            {cart.length}</span>
          }
        </div>
        </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar