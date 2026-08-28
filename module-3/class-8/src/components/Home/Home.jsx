import React from 'react'
import './Home.css'

const Home = ({ setIsLoggedIn }) => {
  return (
    <div className="home_container">
      <header className="home_header">
        <h1 className="home_title">Welcome to the App</h1>
        <p className="home_subtitle">A tiny demo showing Counter and Login pages.</p>
      </header>

      <main className="home_main">
        <section className="home_card">
          <h2>Overview</h2>
          <p>Use the counter to track items and sign in to save your data.</p>
        </section>

        <aside className="home_aside">
          <div className="home_card">
            <h3>Quick Actions</h3>
            <p className="home_subtitle">Open the counter or go to login.</p>
          </div>
        </aside>
      </main>

      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  )
}

export default Home