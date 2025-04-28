import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Heart className="h-5 w-5 text-primary-500 mr-2" />
            <span className="text-gray-800 font-medium">Portfolio</span>
          </div>
          
          <div className="text-gray-600 text-sm">
            &copy; {currentYear} All rights reserved
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 text-sm">
              Made with 💖 and a passion for ML
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;