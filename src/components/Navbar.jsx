import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-slate-800 w-full">
            <div className="flex justify-between items-center px-4 py-5 h-14">
                {/* Logo */}
                <div className="logo font-bold text-white text-2xl">
                    <span className="text-green-700">&lt;</span>
                    pass
                    <span className="text-green-700">op /&gt;</span>
                </div>

                {/* Hamburger Icon for Small Screens */}
                <button
                    className="text-white md:hidden"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } absolute top-full left-0 w-full bg-slate-800 text-center md:static md:flex md:w-auto md:bg-transparent md:flex-row md:items-center md:gap-4`}
                >
                    <li className="py-2 md:py-0">
                        <a className="text-white hover:text-green-500 transition-colors duration-300" href="/">Home</a>
                    </li>
                    <li className="py-2 md:py-0">
                        <a className="text-white hover:text-green-500 transition-colors duration-300" href="/About">About</a>
                    </li>
                    <li className="py-2 md:py-0">
                        <a className="text-white hover:text-green-500 transition-colors duration-300" href="/Contact">Contact</a>
                    </li>
                </ul>

                {/* GitHub Button */}
                <div className="hidden md:block">
                    <a
                        className="text-white bg-green-700 rounded-full flex gap-2 items-center px-4 py-2 hover:bg-green-600 transition-all duration-300"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
                        <span className="font-bold">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Mobile GitHub Button */}
            {isMenuOpen && (
                <div className="text-center py-4 md:hidden">
                    <a
                        className="text-white bg-green-700 rounded-full flex gap-2 items-center justify-center px-4 py-2 mx-auto hover:bg-green-600 transition-all duration-300"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
                        <span className="font-bold">GitHub</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
