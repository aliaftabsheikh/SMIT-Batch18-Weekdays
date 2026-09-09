import { useState } from 'react'

function App() {

  return (
  <div className="bg-[var(--color-primary)] lg:bg-[var(--color-secondary)] 2xl:bg-[var(--color-accent)] h-screen flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4  justify-center items-center space-y-4 px-4 py-6">

    <div className="w-full sm:w-2/3 sm:text-4xl h-[500px] bg-red-400  rounded-lg shadow-lg flex justify-center items-center text-3xl font-bold 3xl:bg-amber-600 ">
      BOX 1
    </div>

    <div className="w-full sm:w-2/3 sm:text-4xl  h-[500px] bg-purple-400 rounded-lg shadow-lg flex justify-center items-center text-3xl font-bold  ">
      BOX 2
    </div>

    <div className="w-full sm:w-2/3 sm:text-4xl  h-[500px] bg-blue-400 rounded-lg shadow-lg flex justify-center items-center text-3xl font-bold  ">
      BOX 3
    </div>




  </div>
  )
}

export default App
