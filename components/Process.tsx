import React from 'react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Apply & Get Approved",
      description: "Submit your application through our secure form. Our team will review your profile and grant you access to the partner portal.",
    },
    {
      number: "02",
      title: "Get Your Assets",
      description: "Access your unique tracking links, API endpoints, and high-converting marketing materials ready to be deployed.",
    },
    {
      number: "03",
      title: "Refer & Earn",
      description: "Start sending qualified leads or direct calls. Track your conversions in real-time and receive your commissions on schedule.",
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Three simple steps to start monetizing your traffic and network with Silent Partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-slate-800 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#151E32] border-4 border-[#0B1120] flex items-center justify-center mb-6 shadow-xl">
                <span className="text-2xl font-bold text-[#F5C518]">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}