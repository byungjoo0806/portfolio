'use client';

import { useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const navItems = [
  { label: 'Home', slideIndex: 0 },
  { label: 'Projects', slideIndex: 1 },
  { label: 'Tech Stack', slideIndex: 2 },
  { label: 'Education', slideIndex: 3 },
  { label: 'Contact', slideIndex: 4 },
];

interface NavigationProps {
  swiperInstance: SwiperType | null;
  activeIndex: number;
}

export default function Navigation({ swiperInstance, activeIndex }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (slideIndex: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(slideIndex);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavClick(0)}
            className="text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            BP
          </button>

          <ul className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.slideIndex}>
                <button
                  onClick={() => handleNavClick(item.slideIndex)}
                  className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeIndex === item.slideIndex
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden pt-3">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.slideIndex}>
                <button
                  onClick={() => {
                    handleNavClick(item.slideIndex);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className={`block transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeIndex === item.slideIndex
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
