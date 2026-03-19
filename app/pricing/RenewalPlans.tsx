'use client';

import Link from 'next/link';

export default function RenewalPlans() {
  const plans = [
    {
      name: 'Starter Plan',
      price: '₹49',
      groups: '1 group or recipient',
      features: [
        'Automated delivery',
        'Scheduled wish reminder',
        'Custom messages'
      ],
      icon: 'ri-user-line',
      gradient: 'from-purple-500 to-purple-400',
      bgGradient: 'from-purple-50 to-purple-100/50'
    },
    {
      name: 'Family Pack',
      price: '₹99',
      groups: '2 to 5 groups or recipients',
      features: [
        'Automated scheduling',
        'Multiple groups support',
        'Best value for families',
        'Priority support'
      ],
      icon: 'ri-group-line',
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'from-purple-100 to-purple-200/50',
      recommended: true
    },
    {
      name: 'Celebration Pack',
      price: '₹199',
      groups: '6 to 10 groups or recipients',
      features: [
        'Automated wish delivery',
        'Suitable for large groups',
        'Extended group support',
        'Premium support'
      ],
      icon: 'ri-team-line',
      gradient: 'from-yellow-500 to-yellow-400',
      bgGradient: 'from-yellow-50 to-yellow-100/50'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <i className="ri-refresh-line text-purple-600 text-lg"></i>
            <span className="text-sm font-semibold text-purple-700">After One Year</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Renewal Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            After one year, renew your wishes with flexible pricing plans that fit your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 border-2 ${
                plan.recommended ? 'border-purple-400 shadow-2xl' : 'border-gray-200 shadow-lg'
              } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                  ⭐ RECOMMENDED
                </div>
              )}

              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <i className={`${plan.icon} text-5xl text-white`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <div className="text-6xl font-extrabold text-gray-900 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-base font-semibold text-gray-700">
                    {plan.groups}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <p className="text-sm text-gray-700 text-left leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className={`block w-full py-3.5 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                      : 'bg-white text-purple-600 border-2 border-purple-600'
                  } text-center font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
                >
                  Schedule a Wish
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 border-2 border-blue-200 rounded-2xl">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-information-line text-blue-600 text-xl"></i>
            </div>
            <p className="text-sm text-blue-800 font-medium">
              Renewal reminders are sent automatically 7 days before the next year's event date
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}