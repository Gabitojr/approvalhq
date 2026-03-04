"use client"
import { CheckCircle2, BarChart3 } from "lucide-react"

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-[#060A14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Fast Eligibility Review</h2>
          <p className="text-xl text-slate-400">Discover your funding potential without the red tape.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Business Focused */}
          <div className="bg-[#151E32] rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#F5C518]" /> Baseline Criteria
            </h3>
            <ul className="space-y-4">
              {[
                "Flexible Credit Requirements (550+)",
                "Minimum $50,000 Yearly Revenue",
                "24+ Months of Active Operation",
                "Active Business Bank Account",
                "Consistent Monthly Deposits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#F5C518] font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-8 italic border-t border-slate-800 pt-4">
              † Approvals heavily weight business revenue over personal credit. Soft pulls may be used strictly for identity verification.
            </p>
          </div>

          {/* What We Look At */}
          <div className="bg-[#151E32] rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="text-[#F5C518]" /> Key Evaluation Factors
            </h3>
            <ul className="space-y-4">
              {[
                "Overall Cash Flow & Trajectory",
                "Average Daily Balances",
                "Industry Stability",
                "Recent Payment History",
                "Business Growth Potential",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#F5C518] font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}