import React from 'react';

export default function Eligibility() {
  const criteria = [
    {
      title: "Marketing Agencies",
      description: "Teams with established traffic sources looking to monetize B2B audiences through reliable offers."
    },
    {
      title: "Independent Affiliates",
      description: "Media buyers and lead generators who scale campaigns and need a trustworthy destination for traffic."
    },
    {
      title: "B2B Consultants",
      description: "Professionals with a network of business owners who could benefit from enterprise-grade solutions."
    }
  ];

  return (
    <section id="eligibility" className="py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#0B1120]">
            Who We Are Looking For
          </h2>
          <div className="h-1 w-20 bg-[#F5C518] mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {criteria.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-gray-200 p-8 rounded-xl shadow-sm hover:border-[#F5C518] transition-colors">
              <h3 className="text-xl font-bold text-[#0B1120] mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}