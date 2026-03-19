'use client';

export default function HowItWorks() {
  const steps = [
    {
      icon: 'ri-edit-box-line',
      title: 'Enter Wish Details',
      description: 'Enter recipient name, event date, delivery time, and your personalised message.',
      gradient: 'from-violet-500 to-purple-600',
      lightBg: 'from-violet-50 to-purple-50',
      border: 'border-violet-200',
      iconBg: 'bg-violet-100 text-violet-600',
      numberColor: 'text-violet-100',
      badge: 'bg-violet-600',
    },
    {
      icon: 'ri-secure-payment-line',
      title: 'Complete Payment',
      description: 'Pay securely using Razorpay in just a few seconds to confirm your schedule.',
      gradient: 'from-amber-400 to-yellow-500',
      lightBg: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100 text-amber-600',
      numberColor: 'text-amber-100',
      badge: 'bg-amber-500',
    },
    {
      icon: 'ri-robot-line',
      title: 'Add WishHapp Bot',
      description: 'Add the WishHapp bot to your WhatsApp group so it can deliver the message on time.',
      gradient: 'from-blue-500 to-cyan-500',
      lightBg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
      numberColor: 'text-blue-100',
      badge: 'bg-blue-500',
    },
    {
      icon: 'ri-send-plane-2-line',
      title: 'Bot Posts Automatically',
      description: 'At the scheduled time, the bot posts your wish and quietly exits the group — no action needed from you.',
      gradient: 'from-emerald-500 to-green-500',
      lightBg: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-600',
      numberColor: 'text-emerald-100',
      badge: 'bg-emerald-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            How It Works
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Four simple steps to automate your WhatsApp wishes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-amber-200 via-blue-200 to-emerald-200 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className={`bg-gradient-to-br ${step.lightBg} border ${step.border} rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-md overflow-hidden`}>
                
                {/* Watermark number */}
                <span className={`absolute -top-3 -right-1 text-[7rem] font-black ${step.numberColor} leading-none select-none pointer-events-none`}>
                  {index + 1}
                </span>

                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${step.gradient}`} />

                {/* Step badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 ${step.badge} text-white text-xs font-bold rounded-full mb-5`}>
                  <span>Step {index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${step.icon} text-2xl`}></i>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-purple-200 rounded-2xl shadow-sm">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg">
              <i className="ri-information-line text-purple-600 text-lg"></i>
            </div>
            <p className="text-sm text-purple-800 font-medium">
              The bot sends your message at the scheduled time and automatically exits the group after delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
