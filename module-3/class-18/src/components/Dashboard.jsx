import React from 'react'
import {Link, Outlet} from 'react-router'
import { useNavigate } from "react-router";
const Dashboard = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className='flex  items-start justify-start h-screen '> 

    <div className='w-1/4 bg-gray-200 p-4 h-screen'>
    <h1>Dashboard</h1>

    <ul>
        <li><Link to="/dashboard/analytics">Analytics</Link></li>
        <li><Link to="/dashboard/courses">Courses</Link></li>
        <li><Link to="/dashboard/profile">Profile</Link></li>
    </ul>
    
    
    </div>

    <div className='w-3/4 p-4 bg-amber-50 h-screen'>

    <Outlet/>
    </div>

    <div>
                <button onClick={() => {navigate("/about")}}>Click Me</button>

    </div>

    </div>

    </>
  )
}

export default Dashboard