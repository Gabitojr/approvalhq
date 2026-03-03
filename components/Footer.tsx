import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-12 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="mb-6">
          <img 
            src="/logo.png" 
            alt="Silent Partnership Logo" 
            className="h-30 w-auto opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>

        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Silent Partnership LLC. All rights reserved.
        </p>
        <p className="text-xs max-w-2xl mx-auto leading-relaxed text-slate-500">
          By participating in the partner program, you agree to our Terms of Service and Privacy Policy. 
          Message and data rates may apply for SMS notifications. Consent is not a condition of purchase.
        </p>
      </div>
    </footer>
  );
}