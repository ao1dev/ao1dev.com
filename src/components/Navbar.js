import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              ao1dev
            </a>
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <a href="/" className="px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="#projects" className="px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#about" className="px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <div className="flex items-center">
            <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
