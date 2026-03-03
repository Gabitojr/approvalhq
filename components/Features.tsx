import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Competitive Commissions",
      description: "Generate consistent income with our attractive payout structure for every qualified client or lead you refer.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: "Exclusive Portal",
      description: "Access advanced tools to monitor your performance, conversions, and commissions in real time.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      title: "Marketing Materials",
      description: "We provide the resources, banners, and proven copy so your generation campaigns succeed from day one.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5C518]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#060A14]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why join Silent Partnership?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We designed our partner program to be simple, transparent, and highly profitable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#151E32] p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-[#0B1120] rounded-lg flex items-center justify-center mb-6 border border-slate-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}