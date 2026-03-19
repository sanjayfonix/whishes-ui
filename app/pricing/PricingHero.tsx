'use client';

export default function PricingHero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
          <i className="ri-price-tag-3-line text-purple-600 text-lg"></i>
          <span className="text-sm font-semibold text-purple-700">Transparent Pricing</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Simple Pricing for<br />Automated Wishes
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choose the number of groups or recipients you want to schedule wishes for. No hidden fees, no surprises.
        </p>
      </div>
    </section>
  );
}