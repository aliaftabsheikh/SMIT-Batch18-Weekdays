import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (

    <>
    {/* <div className="bg-gray-500 p-10 h-[100px] text-yellow-400 hover:bg-[#33ADDE] transition-all duration-[500ms] hover:text-black  hover:text-3xl">App</div>

    <input className="border border-gray-300 p-2 rounded-[14px] m-10 focus:outline-none focus:ring-2 focus:ring-red-500 sm:bg-amber-600" type="text"  /> */}


    <Navbar />
    <Hero/>
    
    </>
  )
}

export default App