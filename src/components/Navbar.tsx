import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Coffee className="h-8 w-8 text-amber-700" />
            <span className="ml-2 text-xl font-bold text-amber-900">Nut Brew</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="text-amber-900 hover:text-amber-700">Menu</a>
            <a href="#locations" className="text-amber-900 hover:text-amber-700">Locations</a>
            <a href="#about" className="text-amber-900 hover:text-amber-700">About</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-amber-900" /> : <Menu className="h-6 w-6 text-amber-900" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#menu" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Menu</a>
            <a href="#locations" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Locations</a>
            <a href="#about" className="block px-3 py-2 text-amber-900 hover:text-amber-700">About</a>
            <a href="#contact" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}