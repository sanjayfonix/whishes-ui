'use client';

import Link from 'next/link';

export default function FirstScheduleCard() {
  const features = [
    'Automated message delivery',
    'Works with WhatsApp groups and personal chats',
    'Scheduled date and time delivery',
    'Custom or default wish messages'
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            First-Time Scheduling Price
          </h2>
          <p className="text-lg text-gray-600">
            Try WishHapp automation at an affordable entry price
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-fill text-5xl text-yellow-300"></i>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3 text-center">
                First Schedule
              </h3>

              <div className="text-center mb-8">
                <div className="text-7xl font-extrabold text-white mb-2">₹9</div>
                <p className="text-lg text-purple-100">per group or recipient</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-white text-base leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/book"
                className="block w-full py-4 bg-white text-purple-600 text-center font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-300 whitespace-nowrap"
              >
                Schedule a Wish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}