import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <section className="py-32 bg-[#0B1120] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151E32] border border-slate-800 text-slate-300 hover:text-[#0B1120] hover:bg-[#F5C518] hover:border-[#F5C518] transition-all font-medium mb-8 group shadow-sm w-fit"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <p>
              At Fanscom Funding LLC, we are committed to protecting your privacy. We collect information to evaluate your business for funding and to improve our services.
            </p>

            <h3 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal & Business Information:</strong> Name, business name, email address, phone number, and estimated credit score submitted via our forms.</li>
              <li><strong>Financial Data:</strong> Information regarding your business revenue, cash flow, and banking history required during the underwriting process.</li>
              <li><strong>Automatically Collected Information:</strong> IP addresses, browser types, device identifiers, and website usage data collected via cookies and similar tracking technologies.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mb-3 mt-8">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To determine eligibility for our commercial funding products.</li>
              <li>To communicate with you regarding your application, account status, and funding offers.</li>
              <li>To prevent fraud, comply with legal obligations, and enforce our agreements.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mb-3 mt-8">3. Data Sharing and Third Parties</h3>
            <p>
              We may share your information with trusted third-party service providers (such as underwriting partners and secure data storage facilities) solely to facilitate our funding services. These parties are bound by strict confidentiality agreements. We do not sell, rent, or trade your personal information to outside marketers.
            </p>

            {/* SECCIÓN CRÍTICA PARA APROBACIÓN SMS */}
            <div className="bg-[#151E32] border-l-4 border-[#F5C518] p-6 rounded-r-lg mt-6 mb-6">
              <h4 className="text-lg font-bold text-white mb-2">Mobile Information Sharing</h4>
              <p className="text-slate-300 font-medium">
                We strictly respect your privacy regarding mobile communications. <strong>We do not share your personal data, mobile information, or SMS opt-in status with any third-party services, affiliates, or partners for marketing or promotional purposes.</strong> Furthermore, all the above categories exclude text messaging originator opt-in data and consent; <strong>this information will not be shared with any third parties.</strong>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 mt-8">4. Security and Retention</h3>
            <p>
              We implement industry-standard security protocols, including encryption and secure servers, to protect your data. We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}