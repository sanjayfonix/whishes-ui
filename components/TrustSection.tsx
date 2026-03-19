'use client';

export default function TrustSection() {
  const trustPoints = [
    {
      icon: 'ri-whatsapp-line',
      title: 'Official WhatsApp API',
      description: 'Built on WhatsApp Business API for reliable delivery',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure Payment',
      description: 'Protected by Razorpay with bank-grade encryption',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'ri-logout-box-line',
      title: 'Auto-Exit Bot',
      description: 'Bot leaves the group immediately after delivery',
      bgColor: 'bg-purple-50'
    },
    {
      icon: 'ri-money-rupee-circle-line',
      title: 'One-Time Payment',
      description: 'Just ₹9 per event. No hidden charges or subscriptions',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-50/30 via-purple-50/20 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-green-50 rounded-full mb-6 shadow-sm border border-green-200/50">
            <i className="ri-verified-badge-line text-green-600 text-lg"></i>
            <span className="text-sm font-semibold text-green-700">Trusted & Secure</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why Trust WishHapp?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Your privacy and security are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 ${point.bgColor} text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <i className={`${point.icon} text-3xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200/60 rounded-3xl p-10 text-center shadow-xl">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
            <i className="ri-lock-line text-5xl text-purple-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Data is Safe
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            We don't store your media files after delivery. Your messages are encrypted end-to-end through WhatsApp's secure infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}