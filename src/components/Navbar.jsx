import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Start', to: 'hero' },
    { title: 'O nas', to: 'about' },
    { title: 'Oferta', to: 'services' },
    { title: 'Portfolio', to: 'portfolio' },
    { title: 'Kontakt', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Bandoo Studio</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  {item.title}
                </Link>
              ))}
              <button className="bg-accent text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90">
                Zarezerwuj sesję
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button className="w-full bg-accent text-primary px-3 py-2 rounded-md text-base font-medium hover:bg-accent/90">
              Zarezerwuj sesję
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;