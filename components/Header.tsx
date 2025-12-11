import React, { useState, useEffect } from 'react';
import Button from './UI/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-hector-black/95 backdrop-blur-md shadow-lg' : 'py-6 bg-hector-black'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="https://thisishector.com/" className="flex items-center gap-3 cursor-pointer select-none hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-hector-primary rounded-[10px] flex items-center justify-center">
            <span className="text-white font-display font-extrabold text-2xl">H</span>
          </div>
          <span className="text-white font-display font-bold text-2xl tracking-tight">Hector</span>
        </a>

        {/* CTA */}
        <div className="hidden sm:block">
          <Button variant="primary" href="https://meetings-eu1.hubspot.com/hishem/skills-assessment-session-onepager" className="py-2.5 text-sm">
            Book Your Free Assessment
          </Button>
        </div>
        
        {/* Mobile CTA (Icon only maybe, or simpler) - keeping consistent with desktop for now as requested */}
      </div>
    </header>
  );
};

export default Header;