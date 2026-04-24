"use client"

export default function FAQ() {
  const faqs = [
    {
      q: "Is there a minimum credit score requirement?",
      a: "We are highly flexible. While a 550+ is preferred, our underwriting focuses primarily on your business's cash flow and revenue history, not just a number.",
    },
    {
      q: "How quickly can I access the capital?",
      a: "Once you submit a complete package, decisions are typically made within 24 hours, and funds can be deployed within 1 to 2 business days.",
    },
    {
      q: "Will I need to sign a personal guarantee?",
      a: "Our products are heavily business-driven. In most cases, we secure the capital against business performance rather than your personal assets.",
    },
    {
      q: "What is the funding cap for my business?",
      a: "We provide strategic capital up to $500,000, tailored entirely to what your current revenue and cash flow can comfortably support.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[#0B1120] border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="bg-[#151E32] rounded-xl p-6 border border-slate-800 group cursor-pointer">
              <summary className="font-bold text-white flex justify-between items-center outline-none">
                {item.q}
                <span className="text-[#6366F1] inline-block transition group-open:rotate-180 font-bold">▼</span>
              </summary>
              <p className="text-slate-400 mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}