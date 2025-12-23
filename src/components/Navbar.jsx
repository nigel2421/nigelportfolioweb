import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleScroll(e, '#hero')}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                    Nigel Andahua
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
