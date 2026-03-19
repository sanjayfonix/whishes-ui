'use client';

export default function HowPricingWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-white to-yellow-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Pricing Works
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-calendar-check-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">First-Time Scheduling</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your first wish scheduling costs <span className="font-bold text-purple-600">₹9 per group or recipient</span>. This allows you to try WishHapp's automated delivery service at an affordable price.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-refresh-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Renewal After One Year</h3>
                <p className="text-gray-700 leading-relaxed">
                  After one year, you will receive a <span className="font-bold text-purple-600">renewal reminder 7 days before the event date</span>. You can choose to renew using our flexible pricing plans based on the number of groups you want to schedule.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optional Renewal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Renewal is completely optional. You decide whether to continue scheduling wishes for the next year. No automatic charges or commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}