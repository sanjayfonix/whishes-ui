'use client';

import Link from 'next/link';

export default function FAQCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
          <i className="ri-rocket-line text-yellow-300 text-lg"></i>
          <span className="text-sm font-semibold text-white">Get Started</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to schedule your first automated wish?
        </h2>
        
        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Never miss another celebration. Let WishHapp handle your WhatsApp wishes automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/book"
            className="px-10 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Schedule a Wish
          </Link>
          
          <Link 
            href="/contact"
            className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-white/90">
            <i className="ri-shield-check-line text-green-300 text-xl"></i>
            <span className="text-sm font-medium">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <i className="ri-time-line text-yellow-300 text-xl"></i>
            <span className="text-sm font-medium">Automated Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <i className="ri-customer-service-2-line text-blue-300 text-xl"></i>
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}