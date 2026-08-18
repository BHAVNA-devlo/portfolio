import React from 'react';

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void">
      {/* Editorial subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_center,rgb(var(--color-steel))_1.2px,transparent_1.2px)] bg-[size:20px_20px]" />
      
      {/* Sophisticated, very low-opacity blue radial highlight at the top */}
      <div className="absolute top-0 left-1/2 h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.02),transparent_70%)] blur-[80px]" />
    </div>
  );
}
