"use client"

export default function Process() {
  const steps = [
    {
      step: "1",
      title: "Submit Details",
      desc: "Fill out our brief, secure online form with your basic company information.",
    },
    {
      step: "2",
      title: "Quick Review",
      desc: "Our team assesses your business performance and revenue metrics promptly.",
    },
    {
      step: "3",
      title: "Receive Offer",
      desc: "Review your transparent funding offer and terms within a single business day.",
    },
    {
      step: "4",
      title: "Get Capital",
      desc: "Once signed, capital is deployed directly to your business account quickly.",
    },
  ]

  return (
    <section id="process" className="py-24 bg-[#0B1120] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">How We Fund Your Business</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#151E32] border border-slate-800 rounded-xl p-8 relative pt-12 text-center hover:border-[#6366F1] transition-colors"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#6366F1] text-white rounded-full flex items-center justify-center font-extrabold text-xl shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}