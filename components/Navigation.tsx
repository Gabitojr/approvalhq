import React from 'react';

export default function Navigation() {
  return (
    <nav className="w-full bg-[#0B1120] border-b border-slate-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        
        {/* Tu Logo (Ahora resaltará perfecto sobre el fondo oscuro) */}
        <div className="flex items-center">
          <a href="/">
            <img 
              src="/logo2.png" 
              alt="Silent Partnership Logo" 
              className="h-16 w-auto object-contain" 
            />
          </a>
        </div>
        
        {/* Links en tono claro para contrastar con el Navbar */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-300">
          <a href="#features" className="hover:text-[#F5C518] transition-colors">Benefits</a>
          <a href="#eligibility" className="hover:text-[#F5C518] transition-colors">Eligibility</a>
          <a href="#process" className="hover:text-[#F5C518] transition-colors">How it Works</a>
        </div>

        {/* Botón de Acción en Dorado */}
        <div>
          <a href="#apply" className="bg-[#F5C518] text-[#0B1120] px-6 py-3 rounded text-sm font-bold hover:bg-yellow-500 transition-colors shadow-md">
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}