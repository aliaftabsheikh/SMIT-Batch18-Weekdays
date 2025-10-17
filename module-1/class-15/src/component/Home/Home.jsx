import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'

const Home = () => {
return (
    <>
        <Navbar />
        <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-6">
                    Discover amazing content and explore new horizons with us.
                </p>
                <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
                    Get Started
                </button>
            </div>
        </div>

        <Products/>
        <Footer />
    </>
)
}

export default Home