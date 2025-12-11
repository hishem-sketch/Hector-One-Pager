import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hector-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8 opacity-90">
          <div className="w-8 h-8 bg-hector-primary rounded-[8px] flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">H</span>
          </div>
          <span className="text-white font-display font-bold text-xl tracking-tight">Hector</span>
        </div>
        
        <p className="text-gray-500 mb-6">
          © 2024 Hector. Built for recruitment teams that want to win.
        </p>
        
        <a href="https://thisishector.com/" className="text-hector-primary hover:text-hector-light transition-colors font-medium">
          www.thisishector.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;