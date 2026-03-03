import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#04070D] text-slate-500 py-10 border-t border-slate-800 text-center">
      <div className="container mx-auto px-6">
        
        {/* Aquí va tu Logo en PNG centrado */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo.png" 
            alt="Silent Partnership Logo" 
            className="h-33 w-auto opacity-80 hover:opacity-100 transition-opacity" 
          />
        </div>

        <p className="text-sm mb-4 text-slate-400">
          &copy; {new Date().getFullYear()} Silent Partnership LLC. All rights reserved.
        </p>
        <p className="text-xs max-w-2xl mx-auto leading-relaxed">
          By participating in the partner program, you agree to our Terms of Service and Privacy Policy. 
          Message and data rates may apply for SMS notifications. Consent is not a condition of purchase.
        </p>
      </div>
    </footer>
  );
}