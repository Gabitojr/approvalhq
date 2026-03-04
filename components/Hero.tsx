"use client"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="pt-32 pb-16 bg-[#0B1120] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] to-[#151E32] z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Streamlined Capital for <br/><span className="text-[#F5C518]">Growing Businesses</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Secure up to $500,000 in working capital with straightforward terms. No personal collateral required.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#F5C518] text-[#0B1120] px-10 py-4 rounded-lg hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(245,197,24,0.3)] transition font-bold text-lg inline-flex items-center gap-2"
          >
            Check Your Eligibility
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Key Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "24 Hours", label: "Standard Approval Time" },
            { value: "1-2 Days", label: "Average Time to Fund" },
            { value: "Flexible", label: "Credit Requirements" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#151E32] rounded-xl p-6 border border-slate-800 text-center shadow-lg">
              <div className="text-3xl font-bold text-[#F5C518] mb-2">{stat.value}</div>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}