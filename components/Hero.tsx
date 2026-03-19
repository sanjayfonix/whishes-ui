'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section suppressHydrationWarning={true} className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-white to-yellow-50/30"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-purple-400/40 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400/40 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full shadow-sm border border-purple-200/50">
          <span className="text-2xl">🎉</span>
          <span className="text-sm font-semibold text-purple-700">Automated WhatsApp Wishes</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
          Schedule WhatsApp Wishes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">Automatically</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          Schedule a WhatsApp surprise for just ₹9 per group. Automated, on time, every time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link 
            href="/book"
            className="w-full sm:w-auto px-14 py-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap inline-block text-center"
          >
            Get Started for ₹9
          </Link>
        </div>

        <p className="text-sm text-gray-500 font-medium mb-16">
          No login required • One-time payment
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="group relative bg-white px-6 py-6 rounded-2xl shadow-md hover:shadow-xl border border-purple-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl shadow-md mb-4 mx-auto">
                <i className="ri-group-line text-white text-xl"></i>
              </div>
              <div className="text-base font-extrabold text-gray-900 mb-1">Groups & Chats</div>
              <div className="text-xs text-gray-500 font-medium leading-relaxed">Works with WhatsApp groups and personal chats</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-b-2xl"></div>
          </div>

          <div className="group relative bg-white px-6 py-6 rounded-2xl shadow-md hover:shadow-xl border border-yellow-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl shadow-md mb-4 mx-auto">
                <i className="ri-calendar-check-line text-white text-xl"></i>
              </div>
              <div className="text-base font-extrabold text-gray-900 mb-1">Fully Automated</div>
              <div className="text-xs text-gray-500 font-medium leading-relaxed">Schedule once and let WishHapp handle the rest</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-b-2xl"></div>
          </div>

          <div className="group relative bg-white px-6 py-6 rounded-2xl shadow-md hover:shadow-xl border border-purple-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl shadow-md mb-4 mx-auto">
                <i className="ri-robot-line text-white text-xl"></i>
              </div>
              <div className="text-base font-extrabold text-gray-900 mb-1">Simple Setup</div>
              <div className="text-xs text-gray-500 font-medium leading-relaxed">Add the WishHapp bot and you're all set</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}