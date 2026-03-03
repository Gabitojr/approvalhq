import React from 'react';

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Complete a quick online application to join our partner network — it only takes a few seconds."
    },
    {
      number: "2",
      title: "Get Approved",
      description: "Most partners get approved the same day, giving you fast access to your custom portal and benefits."
    },
    {
      number: "3",
      title: "Refer & Earn",
      description: "Once approved, start sending qualified leads or direct calls. Track your conversions and receive your commissions."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1120] mb-4">
            Simplify Your Partnership Journey
          </h2>
          <p className="text-xl text-slate-600">Start Earning in Three Easy Steps</p>
        </div>

        {/* Tarjetas Apiladas Horizontalmente */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-sm">
              {/* Círculo Grande */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#0B1120] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>
              
              {/* Texto */}
              <div className="text-center md:text-left mt-2">
                <h3 className="text-2xl font-bold text-[#0B1120] mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}