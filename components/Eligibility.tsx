import React from 'react';

export default function Eligibility() {
  const criteria = [
    {
      title: "Marketing Agencies",
      description: "Teams with established traffic sources looking to monetize B2B audiences through reliable and scalable offers.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      )
    },
    {
      title: "Independent Affiliates",
      description: "Media buyers and lead generators who scale campaigns and need a high-converting, trustworthy destination for their traffic.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      title: "B2B Consultants",
      description: "Professionals with a strong network of business owners who could benefit from our enterprise-grade operations and software solutions.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Side */}
          <div className="md:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Who We Are Looking For
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our partner program is designed for driven professionals and teams who understand the B2B space. We value quality over quantity and are looking to build long-term, mutually beneficial relationships.
            </p>
            <div className="h-1 w-20 bg-[#F5C518] rounded"></div>
          </div>

          {/* Cards Side */}
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {criteria.map((item, idx) => (
              <div key={idx} className="bg-[#151E32] p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                <div className="mb-4 bg-[#0B1120] w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}