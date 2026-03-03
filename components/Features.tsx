import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Competitive Commissions",
      description: "Generate consistent income with our attractive payout structure for every qualified client or lead you refer."
    },
    {
      title: "Exclusive Portal",
      description: "Access advanced tools to monitor your performance, conversions, and commissions in real time."
    },
    {
      title: "Marketing Materials",
      description: "We provide the resources, banners, and proven copy so your generation campaigns succeed from day one."
    },
    {
      title: "Dedicated Partner Care",
      description: "Receive personalized support and resources designed to help you grow and close more deals."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Lado izquierdo: Título */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1120] mb-6">
            Why Partner <br/>with Us?
          </h2>
          <p className="text-slate-600 text-lg">
            We designed our partner program to be simple, transparent, and highly profitable from day one.
          </p>
        </div>
        
        {/* Lado derecho: Lista apilada estilo GreenBridge */}
        <div className="lg:w-2/3 space-y-4 w-full">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-[#F5C518] transition-colors flex items-start">
              <div className="text-2xl mr-4 mt-1">
                <span className="text-[#22C55E]">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1120] mb-1">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}