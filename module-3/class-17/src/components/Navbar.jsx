import React from 'react'
import {NavLink} from 'react-router'

const Navbar = () => {
  return (
       <nav className="mx-auto flex  items-center justify-between px-6 py-6 lg:px-8 bg-blue-600">
          <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-lg text-indigo-700 shadow-lg shadow-indigo-950/30">
              S
            </span>
            SkillSpring
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-indigo-100 md:flex">
            <NavLink to="/" className={({isActive}) => isActive ? 'underline' : 'transition hover:text-white'}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'underline' : 'transition hover:text-white'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'underline' : 'transition hover:text-white'}>Contact</NavLink>
          </div>

          <a
            href="#get-started"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-950/20 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Get started
          </a>
        </nav>
  )
}

export default Navbar