import './App.css'
import {createBrowserRouter,
  Route,
  RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
