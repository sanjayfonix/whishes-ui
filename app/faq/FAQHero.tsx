'use client';

export default function FAQHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <i className="ri-question-answer-line text-yellow-300 text-lg"></i>
          <span className="text-sm font-semibold text-white">Help Center</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        
        <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about WishHapp automation and scheduling
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-purple-900 text-xl"></i>
            </div>
            <div className="text-left">
              <div className="text-xs text-purple-200 font-medium">Quick Response</div>
              <div className="text-sm font-bold text-white">24-48 Hours</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
              <i className="ri-customer-service-2-line text-green-900 text-xl"></i>
            </div>
            <div className="text-left">
              <div className="text-xs text-purple-200 font-medium">Support Available</div>
              <div className="text-sm font-bold text-white">Always Here</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
              <i className="ri-mail-line text-blue-900 text-xl"></i>
            </div>
            <div className="text-left">
              <div className="text-xs text-purple-200 font-medium">Email Support</div>
              <div className="text-sm font-bold text-white">Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}