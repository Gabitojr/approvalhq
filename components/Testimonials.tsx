"use client"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      company: "E-Commerce Director",
      text: "Secured our capital in under 48 hours right when our inventory season peaked. The transparency made all the difference.",
    },
    {
      name: "Sarah Jenkins",
      company: "Hospitality Group",
      text: "Knowing my personal assets were detached from the business expansion gave me the confidence to open our third location.",
    },
    {
      name: "Miguel Ortiz",
      company: "Logistics Fleet",
      text: "ApprovalHQ didn't just look at a spreadsheet; they understood our operations and became true catalysts for our growth.",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#060A14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Hear From Our Clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#151E32] rounded-xl p-8 border-t-4 border-[#6366F1] shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#6366F1] text-[#6366F1]" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-[#6366F1]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}