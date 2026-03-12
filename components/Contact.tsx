"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, X, AlertCircle } from "lucide-react"

// Listas estandarizadas para los Selects profesionales
const industries = [
  "Construction", "Healthcare", "Retail", "Technology", "Hospitality", 
  "Manufacturing", "Professional Services", "Real Estate", "Transportation", "Other"
]

const annualRevenueRanges = [
  "Less than $100,000", "$100,000 - $500,000", "$500,000 - $1,000,000", 
  "$1,000,000 - $5,000,000", "$5,000,000+"
]

const companySizes = [
  "1 - 10 employees", "11 - 50 employees", "51 - 200 employees", "201+ employees"
]

const businessAges = [
  "Less than 1 year", "1 - 3 years", "3 - 5 years", "5+ years"
]

export default function Contact() {
  const [formData, setFormData] = useState({
    // Applicant Info
    firstName: "",
    lastName: "",
    jobTitle: "",
    isDecisionMaker: "",
    
    // Company Details
    businessName: "",
    industryType: "",
    companySize: "",
    yearsInBusiness: "",
    
    // Financial Info
    annualRevenue: "",
    requestedAmount: "",
    creditScore: "",
    
    // Contact Info
    email: "",
    phone: "",
    smsOptIn: false
  })
  
  const [errors, setErrors] = useState<any>({})
  const [showModal, setShowModal] = useState(false)

  const validateForm = () => {
    let newErrors: any = {}
    let isValid = true

    // Validar Applicant Info
    if (!formData.firstName.trim()) { newErrors.firstName = "First name is required"; isValid = false; }
    if (!formData.lastName.trim()) { newErrors.lastName = "Last name is required"; isValid = false; }
    if (!formData.jobTitle.trim()) { newErrors.jobTitle = "Job title is required"; isValid = false; }
    if (!formData.isDecisionMaker) { newErrors.isDecisionMaker = "Please confirm if you are a decision maker"; isValid = false; }

    // Validar Company Details
    if (!formData.businessName.trim()) { newErrors.businessName = "Business name is required"; isValid = false; }
    if (!formData.industryType) { newErrors.industryType = "Please select your industry"; isValid = false; }
    if (!formData.companySize) { newErrors.companySize = "Please select company size"; isValid = false; }
    if (!formData.yearsInBusiness) { newErrors.yearsInBusiness = "Time in business is required"; isValid = false; }

    // Validar Financial Info
    if (!formData.annualRevenue) { newErrors.annualRevenue = "Annual revenue is required"; isValid = false; }
    if (!formData.creditScore) { newErrors.creditScore = "Credit score is required"; isValid = false; }
    if (!formData.requestedAmount.trim()) {
      newErrors.requestedAmount = "Funding amount required"
      isValid = false
    } else if (isNaN(Number(formData.requestedAmount.replace(/[^0-9.]/g, '')))) {
      newErrors.requestedAmount = "Please enter a valid number"
      isValid = false
    }

    // Validar Contact Info
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    const phoneRegex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile phone is required"
      isValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit US number required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log("Eligibility Lead captured:", formData)
      setShowModal(true)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: null })
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request Capital Access
          </h2>
          <p className="text-slate-400">Complete the secure form to instantly analyze your commercial funding options.</p>
        </div>

        <div className="bg-[#151E32] rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* SECCIÓN 1: APPLICANT INFO */}
            <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 mb-4">Applicant Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">First Name</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Last Name</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Current Title</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.jobTitle ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="e.g. CEO, Director, Owner"
                  value={formData.jobTitle}
                  onChange={(e) => handleChange('jobTitle', e.target.value)}
                />
                {errors.jobTitle && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.jobTitle}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Are you a decision maker?</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.isDecisionMaker ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.isDecisionMaker}
                  onChange={(e) => handleChange('isDecisionMaker', e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Yes">Yes, I am an authorized decision maker</option>
                  <option value="No">No, I am researching for the company</option>
                </select>
                {errors.isDecisionMaker && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.isDecisionMaker}</p>}
              </div>
            </div>

            {/* SECCIÓN 2: COMPANY INFO */}
            <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 mb-4 pt-6">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Legal Business Name</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="Acme Corporation LLC"
                  value={formData.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                />
                {errors.businessName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.businessName}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Industry Type</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.industryType ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.industryType}
                  onChange={(e) => handleChange('industryType', e.target.value)}
                >
                  <option value="" disabled>Select industry</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
                {errors.industryType && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.industryType}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Company Size</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.companySize ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.companySize}
                  onChange={(e) => handleChange('companySize', e.target.value)}
                >
                  <option value="" disabled>How many employees?</option>
                  {companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
                {errors.companySize && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.companySize}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Years in Business</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.yearsInBusiness ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.yearsInBusiness}
                  onChange={(e) => handleChange('yearsInBusiness', e.target.value)}
                >
                  <option value="" disabled>Select business age</option>
                  {businessAges.map(age => <option key={age} value={age}>{age}</option>)}
                </select>
                {errors.yearsInBusiness && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.yearsInBusiness}</p>}
              </div>
            </div>

            {/* SECCIÓN 3: FINANCIAL OVERVIEW */}
            <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 mb-4 pt-6">Financial Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Annual Revenue</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.annualRevenue ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.annualRevenue}
                  onChange={(e) => handleChange('annualRevenue', e.target.value)}
                >
                  <option value="" disabled>Select annual revenue</option>
                  {annualRevenueRanges.map(range => <option key={range} value={range}>{range}</option>)}
                </select>
                {errors.annualRevenue && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.annualRevenue}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Applicant FICO Score</label>
                <select
                  className={`w-full bg-[#0B1120] border ${errors.creditScore ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all cursor-pointer`}
                  value={formData.creditScore}
                  onChange={(e) => handleChange('creditScore', e.target.value)}
                >
                  <option value="" disabled>Select credit bracket</option>
                  <option value="Excellent (720+)">Excellent (720+)</option>
                  <option value="Good (680-719)">Good (680-719)</option>
                  <option value="Fair (650-679)">Fair (650-679)</option>
                  <option value="Poor (Under 650)">Poor (Under 650)</option>
                </select>
                {errors.creditScore && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.creditScore}</p>}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Desired Funding Amount ($)</label>
              <input
                type="text"
                className={`w-full bg-[#0B1120] border ${errors.requestedAmount ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                placeholder="e.g. 50000"
                value={formData.requestedAmount}
                onChange={(e) => handleChange('requestedAmount', e.target.value)}
              />
              {errors.requestedAmount && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.requestedAmount}</p>}
            </div>

            {/* SECCIÓN 4: CONTACT & FINALIZATION */}
            <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 mb-4 pt-6">Contact & Finalization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Business Email</label>
                <input
                  type="email"
                  className={`w-full bg-[#0B1120] border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Mobile Phone</label>
                <input
                  type="tel"
                  className={`w-full bg-[#0B1120] border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 outline-none transition-all`}
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.phone}</p>}
              </div>
            </div>

            {/* CHECKBOX OPCIONAL PARA SMS */}
            <div className="flex items-start bg-[#0B1120] p-5 rounded-lg border border-slate-700 mt-6 shadow-inner">
              <input
                type="checkbox"
                id="smsOptIn"
                className="mt-1 mr-4 h-5 w-5 accent-[#F5C518] cursor-pointer shrink-0 rounded"
                checked={formData.smsOptIn}
                onChange={(e) => handleChange('smsOptIn', e.target.checked)}
              />
              <label htmlFor="smsOptIn" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
                By checking this box, you provide your express written consent to receive automated text messages (SMS) from Fanscom Funding LLC for informational and marketing purposes. Message frequency varies. Message and data rates may apply. Reply HELP for help and STOP to cancel. Consent is not a condition of purchase. For more information, please review our <Link href="/privacy-policy" target="_blank" className="text-[#F5C518] font-bold hover:underline transition-all">Privacy Policy</Link> and <Link href="/terms-of-service" target="_blank" className="text-[#F5C518] font-bold hover:underline transition-all">Terms of Service</Link>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5C518] text-[#0B1120] font-bold text-lg py-4 rounded-lg mt-8 hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Check My Eligibility
            </button>
          </form>
        </div>
      </div>

      {/* MODAL DE ÉXITO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-[#151E32] border border-slate-800 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative transform transition-all scale-100">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mx-auto w-16 h-16 bg-[#F5C518]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#F5C518]" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our automated system at Fanscom Funding LLC is analyzing your details. A funding specialist will contact you shortly regarding your commercial eligibility.
            </p>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#F5C518] text-[#0B1120] font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  )
}