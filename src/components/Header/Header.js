import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logowithname from './../../assets/logowithname.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 w-full  flex items-center justify-between p-4 bg-white shadow-md">
        <img src={logowithname} alt="metrobiLogo" className="w-20" />
        
        <nav className="hidden lg:flex space-x-6">
          {['For businesses', 'Locations', 'Features', 'Pricing', 'For drivers'].map((text, index) => (
            <Link key={index} to="/" className="text-primary font-bold hover:text-purple-600">{text}</Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-primary" /> : <Menu size={28} className="text-primary" />}
          </button>
        </div>

        <button className="bg-primary px-4 py-2 rounded hover:text-purple-600 text-white font-bold">
          Get Started
        </button>
      </header>

      {isOpen && (
        <div className="fixed top-full left-0 w-full bg-white shadow-lg p-4 mt-16 flex flex-col space-y-3 lg:hidden">
          {['For businesses', 'Locations', 'Features', 'Pricing', 'For drivers'].map((text, index) => (
            <Link key={index} to="/" className="text-primary font-bold hover:text-purple-600" onClick={() => setIsOpen(false)}>
              {text}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
