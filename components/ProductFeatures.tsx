'use client';

export default function ProductFeatures() {
  const features = [
    {
      icon: 'ri-calendar-schedule-line',
      title: 'Automated Scheduling',
      description: 'Schedule wishes in advance and let WishHapp deliver them automatically.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-team-line',
      title: 'Multi-Group Delivery',
      description: 'Send wishes to multiple groups at once. Up to 10 groups supported.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-message-3-line',
      title: 'Custom Messages',
      description: 'Use default messages or write your own personalized wish.',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'Smart Bot Automation',
      description: 'The WishHapp bot handles delivery and exits automatically after sending the message.',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Everything you need to automate your WhatsApp wishes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}