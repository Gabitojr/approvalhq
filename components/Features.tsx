"use client"
import { Zap, Lock, TrendingUp, Award, BarChart3 } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Approvals",
      desc: "Receive an answer within 24 hours. Skip the endless bank bureaucracy and waiting periods.",
    },
    {
      icon: Lock,
      title: "Zero Personal Collateral",
      desc: "Safeguard your personal assets. Our funding decisions are driven by your business's true performance.",
    },
    {
      icon: TrendingUp,
      title: "Adaptable Repayment",
      desc: "We structure terms that align with your natural revenue cycles, keeping your cash flow healthy.",
    },
    {
      icon: Award,
      title: "Clear Cost Structure",
      desc: "Full transparency from day one. You will never encounter hidden fees or unexpected charges.",
    },
    {
      icon: BarChart3,
      title: "Performance-Based Underwriting",
      desc: "We look at the big picture—your revenue and momentum—not just a rigid credit score.",
    },
    {
      icon: Zap,
      title: "Dedicated Specialists",
      desc: "A personalized funding advisor will be with you from application to deposit.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-[#060A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Why Partner With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="bg-[#151E32] rounded-xl p-8 border border-slate-800 hover:border-[#6366F1] hover:shadow-lg transition-all"
              >
                <div className="inline-block p-3 bg-[#0B1120] border border-slate-800 rounded-lg mb-5">
                  <Icon className="w-6 h-6 text-[#6366F1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}