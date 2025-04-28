import React from 'react';

const Decorations: React.FC = () => {
  return (
    <div className="fixed w-full h-full inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right decorations */}
      <div className="absolute top-20 right-[10%] w-40 h-40 bg-primary-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-40 right-[15%] w-20 h-20 bg-secondary-100 rounded-full opacity-40 blur-md"></div>
      
      {/* Top left decorations */}
      <div className="absolute top-60 left-[5%] w-32 h-32 bg-accent-100 rounded-full opacity-30 blur-xl"></div>
      
      {/* Bottom decorations */}
      <div className="absolute bottom-20 left-[20%] w-60 h-60 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-[10%] w-40 h-40 bg-primary-100 rounded-full opacity-30 blur-xl"></div>
      
      {/* Stickers */}
      <div className="sticker top-[30%] right-[5%] w-16 h-16">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400 opacity-70">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      
      <div className="sticker-delay bottom-[30%] left-[8%] w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-400 opacity-70">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      
      <div className="sticker top-[70%] right-[12%] w-14 h-14">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-400 opacity-70">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      </div>
    </div>
  );
};

export default Decorations;