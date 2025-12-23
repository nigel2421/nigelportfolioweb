import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 
                 bg-gray-200 dark:bg-gray-700 
                 text-gray-800 dark:text-yellow-300
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
