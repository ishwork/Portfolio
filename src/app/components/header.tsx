'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  navLinks,
  moonIcon,
  sunIcon,
  hamburgerIcon,
  closeIcon,
} from '@/constants/index';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="text-xl font-bold text-black dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:[text-rendering:optimizeLegibility] dark:[-webkit-font-smoothing:antialiased]"
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 transition-colors dark:[text-rendering:optimizeLegibility] dark:[-webkit-font-smoothing:antialiased]"
                >
                  {link.label}
                </a>
              ))}
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer dark:[text-rendering:optimizeLegibility] dark:[-webkit-font-smoothing:antialiased]"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Image
                    src={sunIcon}
                    alt="Sun icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ) : (
                  <Image
                    src={moonIcon}
                    alt="Moon icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 cursor-pointer dark:[text-rendering:optimizeLegibility] dark:[-webkit-font-smoothing:antialiased]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Image
                  src={closeIcon}
                  alt="Close menu icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              ) : (
                <Image
                  src={hamburgerIcon}
                  alt="Hamburger menu icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {/* Theme Toggle Button for Mobile */}
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 transition-colors cursor-pointer dark:[text-rendering:optimizeLegibility] dark:[-webkit-font-smoothing:antialiased]"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <Image
                      src={sunIcon}
                      alt="Sun icon"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  ) : (
                    <Image
                      src={moonIcon}
                      alt="Moon icon"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
