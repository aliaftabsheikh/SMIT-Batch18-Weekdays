import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // prevent background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // close on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-slate-900/75 via-black to-black backdrop-blur-md border-b border-slate-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 select-none"
                        aria-label="Homepage"
                    >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 shadow-lg flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 3v18M3 12h18"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span className="text-white font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-pink-300">
                            Aurora UI
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((l) => (
                            <Link
                                key={l.name}
                                to={l.href}
                                className="relative text-slate-200 hover:text-white px-1 py-2 transition-colors duration-150 group"
                            >
                                <span className="relative z-10">{l.name}</span>
                                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-200 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            aria-expanded={open}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <span className="sr-only">Open menu</span>
                            {!open ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden transition-all duration-200 ${
                    open ? "max-h-60" : "max-h-0"
                } overflow-hidden`}
            >
                <div className="px-4 pb-4">
                    <div className="mt-2 bg-slate-800/60 backdrop-blur rounded-lg p-3 shadow-lg border border-slate-700/40">
                        {links.map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 rounded-md text-slate-100 hover:bg-slate-700/30 transition-colors"
                            >
                                {l.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}