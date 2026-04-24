import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <section className="py-32 bg-[#0B1120] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151E32] border border-slate-800 text-slate-300 hover:text-white hover:bg-[#6366F1] hover:border-[#6366F1] transition-all font-medium mb-8 group shadow-sm w-fit"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="space-y-12 text-slate-300 leading-relaxed">
            
            <div>
              <p className="mb-4">
                Welcome to ApprovalHQ LLC. These Terms of Service govern your use of our website, applications, and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
              <p className="mb-4">
                Our services are intended solely for businesses and commercial entities. We do not provide consumer loans or personal financial services.
              </p>
            </div>

            {/* SMS TERMS SECTION (BLINDADO) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-2">SMS/Text Messaging Terms</h2>
              <p className="mb-4">
                By providing your mobile number, you provide your express written consent to receive automated promotional and informational text messages from ApprovalHQ LLC, which may be sent using an automated dialing system. <strong>I understand that I am not required to provide my consent as a condition of purchasing any products or services.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6">
                <li><strong>Program Description:</strong> ApprovalHQ LLC uses SMS messaging to provide critical updates on funding applications, account alerts, and tailored commercial marketing offers.</li>
                <li><strong>Message Frequency:</strong> Message frequency varies based on your interaction with our services.</li>
                <li><strong>Rates:</strong> <strong>Message and data rates may apply</strong> depending on your mobile carrier and plan. ApprovalHQ LLC does not charge for this service, but you are responsible for any standard SMS/MMS charges from your carrier.</li>
                <li><strong>Opt-Out (STOP):</strong> You can cancel the SMS service at any time. To opt-out, simply text <strong>"STOP"</strong> to the number from which you received the message. Alternatively, you can email <strong>support@approvalhq.com</strong> to request to be opted out. After you send "STOP" or your email request is processed, we will send you a final confirmation message that you have been unsubscribed. You will no longer receive SMS messages from us.</li>
                <li><strong>Customer Care (HELP):</strong> If you are experiencing issues with the messaging program, reply with the keyword <strong>"HELP"</strong> for assistance, or contact us directly at support@approvalhq.com.</li>
                <li><strong>Carrier Liability:</strong> Mobile carriers (e.g., T-Mobile, AT&T, Verizon) are not liable for delayed or undelivered messages.</li>
              </ul>
            </div>

            {/* GENERAL TERMS SECTION */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-2">General Terms</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">1. Eligibility & Applications</h3>
              <p className="mb-4">
                You must be at least 18 years old and represent a valid, legally registered business entity in the United States. Submitting an application does not guarantee funding. ApprovalHQ LLC evaluates business performance, revenue trajectory, and general cash flow. We may perform soft credit inquiries for identity verification and risk assessment; these do not impact your personal credit score.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">2. Intellectual Property & Limitation of Liability</h3>
              <p className="mb-4">
                All content on this website is the property of ApprovalHQ LLC. To the maximum extent permitted by law, ApprovalHQ LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or funding services. Our services are provided on an "as-is" and "as-available" basis.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">3. Governing Law and Dispute Resolution</h3>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the State of Florida.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}