'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-purple-50/50 via-white to-yellow-50/30">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Simple and Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-medium">
            One price. No tiers. No confusion.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-purple-400 to-yellow-400 rounded-3xl blur-lg opacity-40 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-[#5B2EFF] to-[#7c4dff] rounded-2xl p-10 shadow-2xl text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F5C542] text-gray-900 text-xs font-extrabold rounded-full shadow uppercase tracking-widest mb-6">
                  <i className="ri-sparkling-line text-sm"></i>
                  Launch Offer
                </div>

                <div className="text-white/80 text-base font-semibold mb-1">One-time payment</div>
                <div className="text-8xl font-extrabold text-white leading-none mb-1">₹9</div>
                <div className="text-white/70 text-sm font-medium mb-4">per group or recipient</div>

                <p className="text-white/90 text-lg font-medium mb-8 leading-relaxed">
                  Schedule your midnight surprise for the price of a chai!
                </p>

                <ul className="text-left space-y-3 mb-10">
                  {[
                    'Automated WhatsApp message delivery',
                    'Works for groups and personal chats',
                    'Scheduled date & time delivery',
                    'No subscription required',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className="ri-checkbox-circle-fill text-[#F5C542] text-lg"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="block w-full py-4 bg-[#F5C542] hover:bg-yellow-400 text-gray-900 text-base font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-center"
                >
                  Get Started for ₹9
                </Link>

                <p className="mt-4 text-white/50 text-xs">
                  No login required • No subscription
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
