import React from 'react'
import { NavLink} from 'react-router'

const Navbar = () => {
  return (
   <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? 'underline ' : 'hover:text-gray-300 transition-colors duration-200'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=> isActive ? 'underline ' : 'hover:text-gray-300 transition-colors duration-200'}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})=> isActive ? 'underline ' : 'hover:text-gray-300 transition-colors duration-200'}>Contact</NavLink>
          </li>
            <li>
                <NavLink to="/product" className={({isActive})=> isActive ? 'underline ' : 'hover:text-gray-300 transition-colors duration-200'}>Product</NavLink>
            </li>
        </ul>
   </div>

  )
}

export default Navbar