"use client"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="Silent Partnership Logo"
              className="h-16 w-auto object-contain"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center justify-center flex-1">
          <a href="#eligibility" className="text-slate-300 hover:text-[#F5C518] transition font-medium">
            Qualifications
          </a>
          <a href="#process" className="text-slate-300 hover:text-[#F5C518] transition font-medium">
            How it Works
          </a>
          <a href="#features" className="text-slate-300 hover:text-[#F5C518] transition font-medium">
            Benefits
          </a>
          <a href="#faq" className="text-slate-300 hover:text-[#F5C518] transition font-medium">
            FAQ
          </a>
          <a href="#contact" className="text-slate-300 hover:text-[#F5C518] transition font-medium">
            Contact
          </a>
        </div>
        <Link href="#contact" className="inline-block">
          <button className="bg-[#F5C518] text-[#0B1120] px-6 py-2 rounded-lg hover:bg-yellow-500 transition font-bold shadow-md">
            Get Funded
          </button>
        </Link>
      </div>
    </nav>
  )
}