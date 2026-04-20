import React from 'react';

const Decorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">

      {/* grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* soft gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

    </div>
  );
};

export default Decorations;