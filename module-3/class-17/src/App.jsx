import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <>
              <Navbar/>
              <About/>
        </>
      },
      {
        path: '/contact',
        element: <>
              <Navbar/>
              <Contact/>
        </>
      },

      {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
          {
            path: 'profile',
            element: <About/>
          },
          {
            path: 'settings',
            element: <div className="bg-blue-500 min-h-screen flex justify-center items-center text-3xl font-bold ">Settings</div>
          },
          {
            path: 'analytics',
            element: <div className="bg-blue-500 min-h-screen flex justify-center items-center text-3xl font-bold ">Analytics</div>
          }
        ]
      },

      {
        path: '*',
        element: <div className="bg-blue-500 min-h-screen flex justify-center items-center text-3xl font-bold ">404 Not Found</div>
      }
  ]
)


  return (
    <RouterProvider router={router} />
  )
}

export default App