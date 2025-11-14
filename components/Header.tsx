
import React from 'react';
import { LeafIcon } from './icons';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navButtonStyle = "text-mint-deep hover:text-mint-dark font-semibold transition-colors duration-300 focus:outline-none";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 focus:outline-none">
          <LeafIcon className="h-8 w-8 text-mint-dark" />
          <h1 className="text-2xl font-bold text-mint-deep font-serif">
            VegFresh
          </h1>
        </button>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <button onClick={() => onNavigate('home')} className={navButtonStyle}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className={navButtonStyle}>
                Shop
              </button>
            </li>
            <li>
              <a href="#contact" className={navButtonStyle}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
