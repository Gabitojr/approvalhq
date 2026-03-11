"use client"
import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    creditScore: "",
    smsOptIn: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Lead captured:", formData)
    alert("Application submitted successfully! We will contact you soon.")
  }

  return (
    <section id="contact" className="py-24 bg-[#0B1120] border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request Capital Access
          </h2>
          <p className="text-slate-400">Fill out the secure form below to see your options.</p>
        </div>

        <div className="bg-[#151E32] rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all"
                  placeholder="e.g. John"
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Doe"
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Business Name</label>
              <input
                type="text"
                required
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all"
                placeholder="e.g. Acme Corporation"
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all"
                  placeholder="you@email.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Mobile Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all"
                  placeholder="(555) 000-0000"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Estimated Credit Score</label>
              <select
                required
                defaultValue=""
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-lg p-3.5 focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition-all cursor-pointer"
                onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
              >
                <option value="" disabled>Select your credit score</option>
                <option value="Excellent (720+)">Excellent (720+)</option>
                <option value="Good (680-719)">Good (680-719)</option>
                <option value="Fair (650-679)">Fair (650-679)</option>
                <option value="Poor (Under 650)">Poor (Under 650)</option>
              </select>
            </div>

            <div className="flex items-start bg-[#0B1120] p-4 rounded-lg border border-slate-800 mt-2">
              <input
                type="checkbox"
                id="smsOptIn"
                required
                className="mt-1 mr-3 h-4 w-4 accent-[#F5C518] cursor-pointer shrink-0"
                onChange={(e) => setFormData({ ...formData, smsOptIn: e.target.checked })}
              />
              <label htmlFor="smsOptIn" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                By checking this box, you agree to receive automated text messages (SMS) from Fanscom Funding LLC for informational and marketing purposes. Message and data rates may apply. You can opt out at any time by replying STOP.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5C518] text-[#0B1120] font-bold text-lg py-4 rounded-lg mt-6 hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}