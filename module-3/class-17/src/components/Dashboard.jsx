import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
       <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 rounded-xl bg-white p-4 shadow-sm">
      <NavLink className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900" to="/dashboard/profile">Profile</NavLink>
      <NavLink className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900" to="/dashboard/settings">Settings</NavLink>
      <NavLink className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900" to="/dashboard/analytics">Analytics</NavLink>
       </div>

  <div className="mx-auto mt-6 max-w-6xl rounded-xl bg-white p-6 shadow-sm">
        <Outlet/>

</div>
    </div>
  )
}

export default Dashboard