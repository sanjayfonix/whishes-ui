'use client';

import Link from 'next/link';

export default function PricingCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-gift-2-fill text-5xl text-yellow-300"></i>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Scheduling Automated Wishes Today
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Never miss another birthday, anniversary, or special occasion. Let WishHapp handle it for you.
            </p>

            <Link
              href="/book"
              className="inline-block px-10 py-4 bg-white text-purple-600 text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Schedule a Wish Now
            </Link>

            <div className="mt-8 flex items-center justify-center gap-8 text-purple-100">
              <div className="flex items-center gap-2">
                <i className="ri-check-double-line text-green-300 text-xl"></i>
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-robot-line text-green-300 text-xl"></i>
                <span className="text-sm font-medium">Automated Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-green-300 text-xl"></i>
                <span className="text-sm font-medium">On-Time Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}