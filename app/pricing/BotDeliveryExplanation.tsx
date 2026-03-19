'use client';

export default function BotDeliveryExplanation() {
  const steps = [
    {
      icon: 'ri-calendar-schedule-line',
      title: 'Schedule Your Wish',
      description: 'Choose the date, time, and message for your automated wish'
    },
    {
      icon: 'ri-secure-payment-line',
      title: 'Complete Payment',
      description: 'Secure payment through Razorpay with multiple payment options'
    },
    {
      icon: 'ri-robot-line',
      title: 'Receive Bot Number',
      description: 'Get the WishHapp bot WhatsApp number after payment confirmation'
    },
    {
      icon: 'ri-group-line',
      title: 'Add Bot to Group',
      description: 'Add the bot to your WhatsApp group or save as a contact'
    },
    {
      icon: 'ri-send-plane-fill',
      title: 'Automated Delivery',
      description: 'Bot sends your message automatically at the scheduled time'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <i className="ri-robot-2-line text-green-600 text-lg"></i>
            <span className="text-sm font-semibold text-green-700">Automated System</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bot-Based Delivery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            WishHapp uses an automated WhatsApp bot to deliver scheduled messages with precision and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <i className={`${step.icon} text-3xl text-white`}></i>
                  </div>
                  
                  <div className="mb-3 px-3 py-1 bg-purple-100 rounded-full">
                    <span className="text-xs font-bold text-purple-700">STEP {index + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border-2 border-green-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-check-fill text-white text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Fully Automated — Zero Manual Work
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Once scheduled, the WishHapp bot handles everything automatically. You don't need to remember or manually send wishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}