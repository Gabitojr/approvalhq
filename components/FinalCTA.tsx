"use client"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-[#1a253a] to-[#0B1120] border-t border-[#F5C518]/20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
        <p className="text-xl text-slate-400 mb-10">Join the network of businesses expanding with Silent Partnership.</p>
        <button
          onClick={scrollToContact}
          className="bg-[#F5C518] text-[#0B1120] px-10 py-4 rounded-lg hover:bg-yellow-500 transition font-bold text-lg inline-flex items-center gap-2 shadow-xl"
        >
          Apply Now
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-sm text-slate-500 mt-6 font-medium">Clear terms. Fast approvals. Real growth.</p>
      </div>
    </section>
  )
}