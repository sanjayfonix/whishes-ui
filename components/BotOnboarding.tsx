'use client';

const steps = [
  {
    number: '01',
    icon: 'ri-calendar-check-line',
    title: 'Schedule Your Wish',
    description: 'Fill in the recipient details, choose your date, time, and write your personalized message.',
    color: 'from-purple-500 to-purple-700',
    lightColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-700',
    numberColor: 'text-purple-100',
  },
  {
    number: '02',
    icon: 'ri-secure-payment-line',
    title: 'Complete Payment',
    description: 'Pay securely via Razorpay. Your scheduling is confirmed instantly after payment.',
    color: 'from-yellow-400 to-yellow-600',
    lightColor: 'from-yellow-50 to-yellow-100',
    borderColor: 'border-yellow-200',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    numberColor: 'text-yellow-100',
  },
  {
    number: '03',
    icon: 'ri-whatsapp-line',
    title: 'Receive Bot Number',
    description: 'After payment, you\'ll receive the WishHapp bot\'s WhatsApp number. Save it to your contacts.',
    color: 'from-green-500 to-green-700',
    lightColor: 'from-green-50 to-green-100',
    borderColor: 'border-green-200',
    badgeColor: 'bg-green-100 text-green-700',
    numberColor: 'text-green-100',
  },
  {
    number: '04',
    icon: 'ri-group-line',
    title: 'Add Bot to Your Group',
    description: 'Add the WishHapp bot to your WhatsApp group or personal chat so it can deliver the message.',
    color: 'from-blue-500 to-blue-700',
    lightColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
    numberColor: 'text-blue-100',
  },
  {
    number: '05',
    icon: 'ri-send-plane-2-line',
    title: 'Wish Delivered Automatically',
    description: 'At the scheduled time, the bot sends your wish and then automatically exits the group.',
    color: 'from-pink-500 to-pink-700',
    lightColor: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-200',
    badgeColor: 'bg-pink-100 text-pink-700',
    numberColor: 'text-pink-100',
  },
];

export default function BotOnboarding() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="ri-robot-2-line"></i> Bot Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How the WishHapp Bot Works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From scheduling to delivery — here's the complete journey in 5 simple steps.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-yellow-200 to-pink-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-[calc(50%-40px)] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className={`relative bg-gradient-to-br ${step.lightColor} border ${step.borderColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-default`}>
                      <span className={`absolute top-3 right-4 text-6xl font-black ${step.numberColor} select-none pointer-events-none leading-none`}>
                        {step.number}
                      </span>

                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-md mb-4`}>
                        <i className={`${step.icon} text-2xl text-white`}></i>
                      </div>

                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${step.badgeColor} mb-3`}>
                        Step {step.number}
                      </span>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 items-center justify-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}>
                      <span className="text-white text-xs font-black">{step.number}</span>
                    </div>
                  </div>

                  <div className="hidden md:block w-[calc(50%-40px)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-xl shadow-md flex-shrink-0">
            <i className="ri-shield-check-line text-2xl text-white"></i>
          </div>
          <div>
            <p className="text-green-900 font-bold text-base mb-0.5">Fully Automated — Zero Manual Work</p>
            <p className="text-green-700 text-sm leading-relaxed">
              The WishHapp bot handles everything. It sends your wish at the exact scheduled time and automatically exits the group — no follow-up needed from your side.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
