"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#060A14] text-slate-500 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="ApprovalHQ Logo"
                  className="h-30 w-auto opacity-90 hover:opacity-100 transition"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Clear, strategic capital solutions designed to scale your business without the traditional banking hurdles.
            </p>
          </div>
          <div>
            <p className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</p>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-[#6366F1] transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("eligibility")} className="hover:text-[#6366F1] transition text-left">
                  Qualifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("process")} className="hover:text-[#6366F1] transition text-left">
                  Funding Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-[#6366F1] transition text-left">
                  Why Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Support & Legal</p>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-[#6366F1] transition text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-[#6366F1] transition text-left">
                  Apply Now
                </button>
              </li>
              {/* Enlaces legales altamente visibles */}
              <li className="pt-2">
                <Link href="/privacy-policy" className="text-slate-300 hover:text-[#6366F1] transition font-medium text-left block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-300 hover:text-[#6366F1] transition font-medium text-left block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs flex flex-col items-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} ApprovalHQ LLC. All rights reserved.</p>
          <p className="max-w-2xl text-slate-600">
            By participating or applying, you agree to our <Link href="/terms-of-service" className="text-slate-400 hover:text-[#6366F1] underline transition">Terms of Service</Link> and <Link href="/privacy-policy" className="text-slate-400 hover:text-[#6366F1] underline transition">Privacy Policy</Link>. Consent is not a condition of purchase.
          </p>
        </div>
      </div>
    </footer>
  )
}