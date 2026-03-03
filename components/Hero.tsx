'use client';
import React, { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creditScore: '', // <-- Nuevo estado para el Credit Score
    smsOptIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New lead:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <section className="bg-[#0B1120] text-white py-20 lg:py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Scale your business <span className="bg-white text-[#0B1120] px-2">not</span>
            <br />
            <span className="bg-white text-[#0B1120] px-2">your headcount</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Join the Silent Partnership LLC network. Expand your opportunities, receive competitive funding, and stay informed with our exclusive alerts.
          </p>
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <div className="flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              <span>ROI-driven for our top partners</span>
            </div>
            <div className="flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              <span>Transparent, on-time processes</span>
            </div>
            <div className="flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              <span>24/7 dedicated support</span>
            </div>
          </div>
        </div>

        {/* SMS Opt-in Form */}
        <div className="bg-[#151E32] border border-slate-800 p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1 text-slate-300">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all" 
                placeholder="e.g. John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all" 
                  placeholder="you@email.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-300">Mobile Phone</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all" 
                  placeholder="+1 (555) 000-0000"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Nuevo campo Credit Score */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-slate-300">Estimated Credit Score</label>
              <select 
                required
                defaultValue=""
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all cursor-pointer"
                onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
              >
                <option value="" disabled>Select your credit score</option>
                <option value="Excellent (720+)">Excellent (720+)</option>
                <option value="Good (680-719)">Good (680-719)</option>
                <option value="Fair (650-679)">Fair (650-679)</option>
                <option value="Poor (Under 650)">Poor (Under 650)</option>
              </select>
            </div>
            
            {/* SMS Checkbox */}
            <div className="flex items-start bg-[#0B1120] p-4 rounded-lg border border-slate-800 mt-2">
              <input 
                type="checkbox" 
                id="smsOptIn" 
                required 
                className="mt-1 mr-3 h-4 w-4 accent-[#F5C518] cursor-pointer shrink-0"
                onChange={(e) => setFormData({...formData, smsOptIn: e.target.checked})}
              />
              <label htmlFor="smsOptIn" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                By checking this box, you agree to receive automated text messages (SMS) from Silent Partnership LLC for informational and marketing purposes. Message and data rates may apply. You can opt out at any time by replying STOP.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#F5C518] hover:bg-yellow-500 text-[#0B1120] font-bold py-3.5 rounded-lg transition-all flex justify-center items-center gap-2 mt-4"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              Request Access
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}