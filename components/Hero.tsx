'use client';
import React, { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creditScore: '',
    smsOptIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <section className="bg-slate-50 pt-20 pb-28 relative border-b border-gray-200">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        
        {/* Lado del Texto */}
        <div className="pr-0 lg:pr-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0B1120] leading-[1.1] mb-6 tracking-tight">
            Scale your business <br />
            <span className="text-[#F5C518]">not your headcount</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Join the Silent Partnership LLC affiliate network. Expand your opportunities, receive competitive commissions, and stay informed with our exclusive alerts.
          </p>
          
          <div className="space-y-4 text-sm font-bold text-[#0B1120]">
            <div className="flex items-center">
              <span className="text-[#F5C518] mr-3 font-extrabold text-xl">✓</span>
              <span>ROI-driven for our top partners</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#F5C518] mr-3 font-extrabold text-xl">✓</span>
              <span>Transparent, on-time commissions</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#F5C518] mr-3 font-extrabold text-xl">✓</span>
              <span>24/7 dedicated support</span>
            </div>
          </div>
        </div>

        {/* Formulario (Original) */}
        <div id="apply" className="bg-white p-8 lg:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative z-10 w-full max-w-lg mx-auto lg:ml-auto border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-[#0B1120]">Apply for Partnership</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#0B1120] uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-white border border-gray-300 text-slate-900 rounded p-3 focus:ring-2 focus:ring-[#F5C518] outline-none" 
                placeholder="e.g. John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1120] uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-white border border-gray-300 text-slate-900 rounded p-3 focus:ring-2 focus:ring-[#F5C518] outline-none" 
                  placeholder="you@email.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B1120] uppercase mb-1">Mobile Phone</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-white border border-gray-300 text-slate-900 rounded p-3 focus:ring-2 focus:ring-[#F5C518] outline-none" 
                  placeholder="(555) 000-0000"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B1120] uppercase mb-1">Estimated Credit Score</label>
              <select 
                required
                defaultValue=""
                className="w-full bg-white border border-gray-300 text-slate-900 rounded p-3 focus:ring-2 focus:ring-[#F5C518] outline-none cursor-pointer"
                onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
              >
                <option value="" disabled>Select your credit score</option>
                <option value="Excellent (720+)">Excellent (720+)</option>
                <option value="Good (680-719)">Good (680-719)</option>
                <option value="Fair (650-679)">Fair (650-679)</option>
                <option value="Poor (Under 650)">Poor (Under 650)</option>
              </select>
            </div>
            
            <div className="flex items-start bg-slate-50 p-3 rounded border border-gray-200 mt-2">
              <input 
                type="checkbox" 
                id="smsOptIn" 
                required 
                className="mt-1 mr-3 h-4 w-4 accent-[#0B1120] cursor-pointer shrink-0"
                onChange={(e) => setFormData({...formData, smsOptIn: e.target.checked})}
              />
              <label htmlFor="smsOptIn" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
                By checking this box, you agree to receive automated text messages (SMS) from Silent Partnership LLC for informational and marketing purposes. Message and data rates may apply. You can opt out at any time by replying STOP.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#F5C518] text-[#0B1120] font-bold text-lg py-4 rounded mt-4 hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}