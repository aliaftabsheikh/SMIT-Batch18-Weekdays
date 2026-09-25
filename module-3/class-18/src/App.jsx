import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Navigate } from "react-router";
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Courses from './components/Courses';
import Profile from './components/Profile';



const App = () => {
  const isLoggedIn = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />
    },
    {
      path: "/about",
      element: <div>About</div>
    },
    {
      path: "/contact",
      element: <div>Contact</div>
    },
    {
      path: "/login",
      element: <div>Login</div>
    },
    {
      path: "/dashboard",
      element: isLoggedIn ? <Dashboard/> : <Navigate to="/login" replace />,
      children: [
        {
          path: "analytics",
          element: <Analytics/>
        },
        {
          path: "courses",
          element: <Courses/>
        },
        {
          path: "profile",
          element: <Profile/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App