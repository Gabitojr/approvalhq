"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, X, AlertCircle } from "lucide-react"

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
  
  const [errors, setErrors] = useState<any>({})
  const [showModal, setShowModal] = useState(false)

  const validateForm = () => {
    let newErrors: any = {}
    let isValid = true

    // Validar campos vacíos
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      isValid = false
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required"
      isValid = false
    }
    if (!formData.creditScore) {
      newErrors.creditScore = "Please select your credit score"
      isValid = false
    }

    // Validar formato de Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    // Validar formato de Teléfono US (Ej: 555-555-5555, (555) 555-5555, +1 555 555 5555)
    const phoneRegex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile phone is required"
      isValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit US phone number"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log("Lead captured:", formData)
      setShowModal(true)
    }
  }

  // Función para limpiar el error de un campo cuando el usuario empieza a escribir
  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: null })
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request Capital Access
          </h2>
          <p className="text-slate-400">Fill out the secure form below to see your options.</p>
        </div>

        <div className="bg-[#151E32] rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">First Name</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="e.g. John"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Last Name</label>
                <input
                  type="text"
                  className={`w-full bg-[#0B1120] border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="e.g. Doe"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Business Name</label>
              <input
                type="text"
                className={`w-full bg-[#0B1120] border ${errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all`}
                placeholder="e.g. Acme Corporation"
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
              />
              {errors.businessName && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.businessName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  className={`w-full bg-[#0B1120] border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Mobile Phone</label>
                <input
                  type="tel"
                  className={`w-full bg-[#0B1120] border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Estimated Credit Score</label>
              <select
                className={`w-full bg-[#0B1120] border ${errors.creditScore ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#F5C518]'} text-white rounded-lg p-3.5 focus:ring-2 focus:border-transparent outline-none transition-all cursor-pointer`}
                value={formData.creditScore}
                onChange={(e) => handleChange('creditScore', e.target.value)}
              >
                <option value="" disabled>Select your credit score</option>
                <option value="Excellent (720+)">Excellent (720+)</option>
                <option value="Good (680-719)">Good (680-719)</option>
                <option value="Fair (650-679)">Fair (650-679)</option>
                <option value="Poor (Under 650)">Poor (Under 650)</option>
              </select>
              {errors.creditScore && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.creditScore}</p>}
            </div>

            {/* CHECKBOX OPCIONAL PARA SMS */}
            <div className="flex items-start bg-[#0B1120] p-5 rounded-lg border border-slate-700 mt-4 shadow-inner">
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
              className="w-full bg-[#F5C518] text-[#0B1120] font-bold text-lg py-4 rounded-lg mt-6 hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* MODAL DE ÉXITO PERSONALIZADO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-[#151E32] border border-slate-800 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative transform transition-all scale-100">
            {/* Botón de cerrar superior */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Ícono de éxito */}
            <div className="mx-auto w-16 h-16 bg-[#F5C518]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#F5C518]" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Application Submitted!</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Thank you for requesting capital access. Our team at Fanscom Funding LLC will review your details and contact you shortly.
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