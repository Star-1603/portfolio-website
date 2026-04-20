import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0a0a0c]">
      <div className="container-wrapper text-center text-sm text-gray-500 space-y-2">

        <p className="tracking-wide">
          built by umaiza — systems, signals, silence
        </p>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
};

export default Footer;