// import React, {createContext, useState} from 'react'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'

// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";



//  const ThemeContext = createContext()


// const App = () => {
//   const [theme, setTheme] = useState('light')


//   return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>

//      <Home/>
//       </div>
//     </ThemeContext.Provider>
//   )
// }

// export default App
// export { ThemeContext }
 

// --------------------------------


import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Product from './components/Product';

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <div>
                      <Navbar/>
                      <Home/>
                  </div>
      },
      {
        path: "/about",
        element: <div>
                      <Navbar/>
                      <About/>
                  </div>
      },
      {
        path: "/contact",
        element: <div>
                      <Navbar/>
                      <Contact/>
                 </div>
      },
      {
        path: "/product/:id",
        element: <div>
                      <Navbar/>
                      <Product/>
                 </div>
      }
    ]
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App