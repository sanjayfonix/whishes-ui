'use client';

export default function RenewalHighlight() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-50 via-yellow-50/50 to-purple-50/30 border-2 border-yellow-200/60 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-yellow-200/50">
              <i className="ri-repeat-line text-5xl text-yellow-600"></i>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Loved the surprise?
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              We'll remind you the next day to lock the same date for next year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}