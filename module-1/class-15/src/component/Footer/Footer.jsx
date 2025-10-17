import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-500 to-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">ShopEase</h1>
                        <p className="text-sm">Your one-stop shop for everything!</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link
                            to="/"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            Products
                        </Link>
                        <Link
                            to="/cart"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            Cart
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500 animate-pulse"></div>
        </footer>
    );
};

export default Footer;