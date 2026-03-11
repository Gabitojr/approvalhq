"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Terms() {
  return (
    <section className="py-24 bg-[#0B1120] min-h-screen border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/* Botón de Back Mejorado */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151E32] border border-slate-800 text-slate-300 hover:text-[#0B1120] hover:bg-[#F5C518] hover:border-[#F5C518] transition-all font-medium mb-8 group shadow-sm w-fit"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service & Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          {/* INTRODUCTION */}
          <div>
            <p className="mb-4">
              Welcome to Fanscom Funding LLC. These Terms of Service and Privacy Policy govern your use of our website, applications, and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
            <p className="mb-4">
              Our services are intended solely for businesses and commercial entities. We do not provide consumer loans or personal financial services.
            </p>
          </div>

          {/* PRIVACY POLICY SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Part I: Privacy Policy</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
            <p className="mb-4">
              We collect information to evaluate your business for funding and to improve our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Personal & Business Information:</strong> Name, business name, email address, phone number, and estimated credit score submitted via our forms.</li>
              <li><strong>Financial Data:</strong> Information regarding your business revenue, cash flow, and banking history required during the underwriting process.</li>
              <li><strong>Automatically Collected Information:</strong> IP addresses, browser types, device identifiers, and website usage data collected via cookies and similar tracking technologies.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h3>
            <p className="mb-4">
              We use your information strictly for the following business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>To determine eligibility for our commercial funding products.</li>
              <li>To communicate with you regarding your application, account status, and funding offers.</li>
              <li>To prevent fraud, comply with legal obligations, and enforce our agreements.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">3. Data Sharing and Third Parties</h3>
            <p className="mb-4">
              We may share your information with trusted third-party service providers (such as underwriting partners and secure data storage facilities) solely to facilitate our funding services. These parties are bound by strict confidentiality agreements. We do not sell, rent, or trade your personal information to outside marketers.
            </p>
            <div className="bg-[#151E32] border-l-4 border-[#F5C518] p-6 rounded-r-lg mt-6 mb-6">
              <h4 className="text-lg font-bold text-white mb-2">Mobile Information & SMS Opt-In Data Exclusion</h4>
              <p className="text-slate-300 font-medium">
                We strictly respect your privacy regarding mobile communications. We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. <strong>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</strong>
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">4. Security and Retention</h3>
            <p className="mb-4">
              We implement industry-standard security protocols, including encryption and secure servers, to protect your data. We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </div>

          {/* SMS TERMS SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Part II: SMS/Text Messaging Terms</h2>
            <p className="mb-4">
              By providing your mobile number, you provide your express written consent to receive automated promotional and informational text messages from Fanscom Funding LLC, which may be sent using an automated dialing system. <strong>I understand that I am not required to provide my consent as a condition of purchasing any products or services.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li><strong>Program Description:</strong> Fanscom Funding LLC uses SMS messaging to provide critical updates on funding applications, account alerts, and tailored commercial marketing offers.</li>
              <li><strong>Message Frequency:</strong> Message frequency varies based on your interaction with our services.</li>
              <li><strong>Rates:</strong> <strong>Message and data rates may apply</strong> depending on your mobile carrier and plan. Fanscom Funding LLC does not charge for this service, but you are responsible for any standard SMS/MMS charges from your carrier.</li>
              <li><strong>Opt-Out (STOP):</strong> You can cancel the SMS service at any time. To opt-out, simply text <strong>"STOP"</strong> to the number from which you received the message. After you send "STOP", we will send you a final confirmation message that you have been unsubscribed. You will no longer receive SMS messages from us.</li>
              <li><strong>Customer Care (HELP):</strong> If you are experiencing issues with the messaging program, reply with the keyword <strong>"HELP"</strong> for assistance, or contact us directly at support@fanscomfunding.com.</li>
              <li><strong>Carrier Liability:</strong> Mobile carriers (e.g., T-Mobile, AT&T, Verizon) are not liable for delayed or undelivered messages.</li>
            </ul>
          </div>

          {/* GENERAL TERMS SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Part III: Terms of Service</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">1. Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old and represent a valid, legally registered business entity in the United States to use our services. By applying, you warrant that you have the authority to bind your business to these terms.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2. Funding Applications and Credit Reviews</h3>
            <p className="mb-4">
              Submitting an application does not guarantee funding. Fanscom Funding LLC evaluates business performance, revenue trajectory, and general cash flow. While we focus heavily on business metrics, we may perform soft credit inquiries for identity verification and risk assessment. These soft pulls do not impact your personal credit score.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h3>
            <p className="mb-4">
              All content, logos, trademarks, and design elements on this website are the exclusive property of Fanscom Funding LLC. You may not reproduce, distribute, or create derivative works from our intellectual property without express written consent.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h3>
            <p className="mb-4">
              To the maximum extent permitted by law, Fanscom Funding LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data, arising out of your use of our website or funding services. Our services are provided on an "as-is" and "as-available" basis without any warranties of any kind.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5. Indemnification</h3>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Fanscom Funding LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including legal fees) arising from your misuse of our services, violation of these Terms, or infringement of any third-party rights.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">6. Governing Law and Dispute Resolution</h3>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the State of Florida.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">7. Modifications to the Terms</h3>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service and Privacy Policy at any time. Any changes will be effective immediately upon posting on this page, with the "Last Updated" date revised accordingly. Your continued use of our services constitutes acceptance of the revised terms.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}