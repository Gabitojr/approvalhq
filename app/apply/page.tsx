"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, X, AlertCircle, ArrowRight, Shield, Zap, Clock } from "lucide-react"

const industries = [
  "Construction", "Healthcare", "Retail", "Technology", "Hospitality",
  "Manufacturing", "Professional Services", "Real Estate", "Transportation", "Other",
]

const annualRevenueRanges = [
  "Less than $100,000", "$100,000 - $500,000", "$500,000 - $1,000,000",
  "$1,000,000 - $5,000,000", "$5,000,000+",
]

const companySizes = [
  "1 - 10 employees", "11 - 50 employees", "51 - 200 employees", "201+ employees",
]

const businessAges = [
  "Less than 1 year", "1 - 3 years", "3 - 5 years", "5+ years",
]

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    isDecisionMaker: "",
    businessName: "",
    industryType: "",
    companySize: "",
    yearsInBusiness: "",
    annualRevenue: "",
    requestedAmount: "",
    creditScore: "",
    email: "",
    phone: "",
    smsOptIn: false,
  })

  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [showModal, setShowModal] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required"
    if (!formData.isDecisionMaker) newErrors.isDecisionMaker = "Please confirm if you are a decision maker"
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
    if (!formData.industryType) newErrors.industryType = "Please select your industry"
    if (!formData.companySize) newErrors.companySize = "Please select company size"
    if (!formData.yearsInBusiness) newErrors.yearsInBusiness = "Time in business is required"
    if (!formData.annualRevenue) newErrors.annualRevenue = "Annual revenue is required"
    if (!formData.creditScore) newErrors.creditScore = "Credit score is required"

    if (!formData.requestedAmount.trim()) {
      newErrors.requestedAmount = "Funding amount is required"
    } else if (isNaN(Number(formData.requestedAmount.replace(/[^0-9.]/g, "")))) {
      newErrors.requestedAmount = "Please enter a valid number"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const phoneRegex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile phone is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit US number required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Apply page lead:", formData)
      setShowModal(true)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: null })
  }

  const inputClass = (field: string) =>
    `w-full bg-[#0B1120] border ${
      errors[field] ? "border-red-500 focus:ring-red-500" : "border-slate-700 focus:ring-[#6366F1]"
    } text-white rounded-lg p-3.5 outline-none transition-all`

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="ApprovalHQ Logo"
              className="h-16 w-auto object-contain"
              width={200}
              height={200}
            />
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white transition text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-24 bg-[#0B1120] min-h-screen">

        {/* HERO */}
        <section className="py-16 bg-gradient-to-br from-[#0B1120] to-[#151E32] border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              Fast-Track Application
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Secure Up to <span className="text-[#6366F1]">$500,000</span><br />in Working Capital
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Complete the form below and receive a funding decision within 24 hours. No personal collateral required.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Clock, label: "24-Hour Approval" },
                { icon: Shield, label: "Secure & Confidential" },
                { icon: Zap, label: "Funds in 1–2 Days" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <Icon className="w-4 h-4 text-[#6366F1]" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">

            {/* SIDEBAR */}
            <aside className="hidden lg:block space-y-6 sticky top-28">
              <div className="bg-[#151E32] rounded-2xl p-6 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-4">Why ApprovalHQ?</h3>
                <ul className="space-y-4">
                  {[
                    "Flexible credit requirements (550+)",
                    "Revenue-based underwriting",
                    "No hidden fees or surprises",
                    "Dedicated funding specialist",
                    "Business assets only — no personal collateral",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#6366F1] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#151E32] rounded-2xl p-6 border border-slate-800">
                <p className="text-slate-400 text-sm italic leading-relaxed">
                  "Secured our capital in under 48 hours right when our inventory season peaked. The transparency made all the difference."
                </p>
                <div className="mt-4">
                  <p className="text-white text-sm font-bold">David Chen</p>
                  <p className="text-[#6366F1] text-xs">E-Commerce Director</p>
                </div>
              </div>
            </aside>

            {/* FORM */}
            <div className="lg:col-span-2">
              <div className="bg-[#151E32] rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* APPLICANT INFO */}
                  <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2">Applicant Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">First Name</label>
                      <input type="text" className={inputClass("firstName")} placeholder="John" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
                      {errors.firstName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Last Name</label>
                      <input type="text" className={inputClass("lastName")} placeholder="Doe" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
                      {errors.lastName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Current Title</label>
                      <input type="text" className={inputClass("jobTitle")} placeholder="e.g. CEO, Director, Owner" value={formData.jobTitle} onChange={(e) => handleChange("jobTitle", e.target.value)} />
                      {errors.jobTitle && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.jobTitle}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Are you a decision maker?</label>
                      <select className={inputClass("isDecisionMaker") + " cursor-pointer"} value={formData.isDecisionMaker} onChange={(e) => handleChange("isDecisionMaker", e.target.value)}>
                        <option value="" disabled>Select an option</option>
                        <option value="Yes">Yes, I am an authorized decision maker</option>
                        <option value="No">No, I am researching for the company</option>
                      </select>
                      {errors.isDecisionMaker && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.isDecisionMaker}</p>}
                    </div>
                  </div>

                  {/* COMPANY DETAILS */}
                  <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 pt-4">Company Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Legal Business Name</label>
                      <input type="text" className={inputClass("businessName")} placeholder="Acme Corporation LLC" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} />
                      {errors.businessName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.businessName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Industry Type</label>
                      <select className={inputClass("industryType") + " cursor-pointer"} value={formData.industryType} onChange={(e) => handleChange("industryType", e.target.value)}>
                        <option value="" disabled>Select industry</option>
                        {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                      </select>
                      {errors.industryType && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.industryType}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Company Size</label>
                      <select className={inputClass("companySize") + " cursor-pointer"} value={formData.companySize} onChange={(e) => handleChange("companySize", e.target.value)}>
                        <option value="" disabled>How many employees?</option>
                        {companySizes.map((size) => <option key={size} value={size}>{size}</option>)}
                      </select>
                      {errors.companySize && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.companySize}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Years in Business</label>
                      <select className={inputClass("yearsInBusiness") + " cursor-pointer"} value={formData.yearsInBusiness} onChange={(e) => handleChange("yearsInBusiness", e.target.value)}>
                        <option value="" disabled>Select business age</option>
                        {businessAges.map((age) => <option key={age} value={age}>{age}</option>)}
                      </select>
                      {errors.yearsInBusiness && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.yearsInBusiness}</p>}
                    </div>
                  </div>

                  {/* FINANCIAL OVERVIEW */}
                  <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 pt-4">Financial Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Annual Revenue</label>
                      <select className={inputClass("annualRevenue") + " cursor-pointer"} value={formData.annualRevenue} onChange={(e) => handleChange("annualRevenue", e.target.value)}>
                        <option value="" disabled>Select annual revenue</option>
                        {annualRevenueRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                      </select>
                      {errors.annualRevenue && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.annualRevenue}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Applicant FICO Score</label>
                      <select className={inputClass("creditScore") + " cursor-pointer"} value={formData.creditScore} onChange={(e) => handleChange("creditScore", e.target.value)}>
                        <option value="" disabled>Select credit bracket</option>
                        <option value="Excellent (720+)">Excellent (720+)</option>
                        <option value="Good (680-719)">Good (680-719)</option>
                        <option value="Fair (650-679)">Fair (650-679)</option>
                        <option value="Poor (Under 650)">Poor (Under 650)</option>
                      </select>
                      {errors.creditScore && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.creditScore}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Desired Funding Amount ($)</label>
                    <input type="text" className={inputClass("requestedAmount")} placeholder="e.g. 50000" value={formData.requestedAmount} onChange={(e) => handleChange("requestedAmount", e.target.value)} />
                    {errors.requestedAmount && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.requestedAmount}</p>}
                  </div>

                  {/* CONTACT */}
                  <h3 className="text-xl font-semibold text-white/90 border-b border-slate-700 pb-2 pt-4">Contact & Finalization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Business Email</label>
                      <input type="email" className={inputClass("email")} placeholder="you@company.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Mobile Phone</label>
                      <input type="tel" className={inputClass("phone")} placeholder="(555) 000-0000" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                      {errors.phone && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                  </div>

                  {/* SMS OPT-IN */}
                  <div className="flex items-start bg-[#0B1120] p-5 rounded-lg border border-slate-700 shadow-inner">
                    <input
                      type="checkbox"
                      id="smsOptIn"
                      className="mt-1 mr-4 h-5 w-5 accent-[#6366F1] cursor-pointer shrink-0 rounded"
                      checked={formData.smsOptIn}
                      onChange={(e) => handleChange("smsOptIn", e.target.checked)}
                    />
                    <label htmlFor="smsOptIn" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
                      By checking this box, you provide your express written consent to receive automated text messages (SMS) from ApprovalHQ LLC for informational and marketing purposes. Message frequency varies. Message and data rates may apply. Reply HELP for help and STOP to cancel. Consent is not a condition of purchase. See our{" "}
                      <Link href="/privacy-policy" target="_blank" className="text-[#6366F1] font-bold hover:underline">Privacy Policy</Link>{" "}
                      and{" "}
                      <Link href="/terms-of-service" target="_blank" className="text-[#6366F1] font-bold hover:underline">Terms of Service</Link>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6366F1] text-white font-bold text-lg py-4 rounded-lg mt-2 hover:bg-indigo-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/terms-of-service" className="hover:text-slate-300 underline">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="hover:text-slate-300 underline">Privacy Policy</Link>.
                    Consent is not a condition of purchase.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#060A14] text-slate-500 py-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} ApprovalHQ LLC. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-slate-300 transition">Terms of Service</Link>
          <Link href="/" className="hover:text-slate-300 transition">Home</Link>
        </div>
      </footer>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#151E32] border border-slate-800 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="mx-auto w-16 h-16 bg-[#6366F1]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#6366F1]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our team at ApprovalHQ LLC is reviewing your details now. A funding specialist will reach out within 24 hours regarding your eligibility.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#6366F1] text-white font-bold py-3 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  )
}
