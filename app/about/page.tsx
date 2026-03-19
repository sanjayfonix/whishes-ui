'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <div className="relative bg-gradient-to-br from-[#1a0533] via-[#5B2EFF] to-[#2d1060] text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <i className="ri-information-line text-yellow-300" />
            <span className="text-sm font-semibold text-white">About Our Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            About WishHapp
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Learn how WishHapp helps you automate WhatsApp wishes and never miss an important celebration.
          </p>
        </div>
      </div>

      <div className="relative -mt-8">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,0 L0,0 Z" fill="#5B2EFF" opacity="0.3"/>
          <path d="M0,80 C360,40 720,40 1080,80 C1260,100 1350,110 1440,110 L1440,0 L0,0 Z" fill="#5B2EFF" opacity="0.5"/>
          <path d="M0,96 C360,60 720,60 1080,96 C1260,114 1350,120 1440,120 L1440,0 L0,0 Z" fill="#F9FAFB"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl shadow-lg">
              <i className="ri-question-answer-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">What is WishHapp?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              WishHapp is an automation platform that allows users to schedule birthday, anniversary, and celebration wishes for WhatsApp groups or personal chats.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Instead of remembering every important date manually, users can schedule their wishes in advance and let the WishHapp bot deliver the message automatically at the selected time.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The service is designed to make celebrations easier and ensure that important moments are never missed.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg">
              <i className="ri-lightbulb-flash-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Why WishHapp Exists</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-600 rounded-xl mb-4 shadow-md">
                <i className="ri-calendar-close-line text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Forgotten Celebrations</h3>
              <p className="text-gray-700 leading-relaxed">
                Many people forget birthdays and special occasions due to busy schedules and daily responsibilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl mb-4 shadow-md">
                <i className="ri-time-line text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect Timing Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Sending messages at the right moment, especially at midnight or during celebrations, makes the experience more meaningful.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-green-600 rounded-xl mb-4 shadow-md">
                <i className="ri-robot-2-line text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automation Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                WishHapp was created to simplify this process by automating message delivery using WhatsApp automation technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-8 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-yellow-600 rounded-xl mb-4 shadow-md">
                <i className="ri-checkbox-circle-line text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule Once, Relax</h3>
              <p className="text-gray-700 leading-relaxed">
                The platform allows users to schedule wishes once and let the system handle the rest automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-500 rounded-2xl shadow-lg">
              <i className="ri-settings-3-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">How WishHapp Works</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-teal-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-green-500 rounded-full hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Schedule a Wish',
                  description: 'Users enter recipient name, message, date, and time through the WishHapp scheduling form.',
                  icon: 'ri-calendar-schedule-line',
                  color: 'purple',
                },
                {
                  step: '2',
                  title: 'Choose Recipients',
                  description: 'Users select how many groups or contacts should receive the wish.',
                  icon: 'ri-group-line',
                  color: 'blue',
                },
                {
                  step: '3',
                  title: 'Complete Payment',
                  description: 'The scheduling is confirmed after secure payment through Razorpay.',
                  icon: 'ri-secure-payment-line',
                  color: 'indigo',
                },
                {
                  step: '4',
                  title: 'Add the WishHapp Bot',
                  description: 'Users add the WishHapp bot to their WhatsApp group using the provided instructions.',
                  icon: 'ri-robot-line',
                  color: 'teal',
                },
                {
                  step: '5',
                  title: 'Automated Delivery',
                  description: 'The bot sends the message automatically at the scheduled time and may leave the group afterward.',
                  icon: 'ri-send-plane-fill',
                  color: 'green',
                },
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 md:pl-20">
                  <div className={`absolute left-0 md:left-3 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-${item.color}-600 to-${item.color}-500 rounded-2xl shadow-lg z-10`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>

                  <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300 ml-16 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 flex items-center justify-center bg-${item.color}-100 rounded-xl`}>
                        <i className={`${item.icon} text-xl text-${item.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-2xl shadow-lg">
              <i className="ri-magic-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Smart Automation</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              WishHapp uses automated scheduling systems and WhatsApp bot integration to ensure messages are delivered at the correct time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl border border-purple-200">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-2xl mx-auto mb-4 shadow-md">
                  <i className="ri-group-2-line text-3xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Groups</h4>
                <p className="text-gray-600 text-sm">Schedule wishes for multiple groups simultaneously</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-2xl mx-auto mb-4 shadow-md">
                  <i className="ri-user-heart-line text-3xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Personal Chats</h4>
                <p className="text-gray-600 text-sm">Send automated wishes to individual contacts</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200">
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-2xl mx-auto mb-4 shadow-md">
                  <i className="ri-calendar-event-line text-3xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Future Scheduling</h4>
                <p className="text-gray-600 text-sm">Plan wishes for any future date and time</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <i className="ri-sparkling-2-line text-3xl text-yellow-300" />
              <h3 className="text-2xl font-bold">Fully Automated</h3>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              The system handles message delivery automatically so users do not need to manually send messages. Just schedule once and let WishHapp take care of the rest.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl shadow-lg">
              <i className="ri-money-rupee-circle-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Flexible Pricing</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-orange-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              WishHapp uses a simple pricing model designed to be affordable and transparent.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-xl">
                    <i className="ri-star-line text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">First-Time Scheduling</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-purple-600">₹9</span>
                  <span className="text-gray-600">per group or recipient</span>
                </div>
                <p className="text-gray-600 text-sm">Perfect for trying out the service</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-xl">
                    <i className="ri-refresh-line text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Renewal Pricing</h3>
                </div>
                <p className="text-gray-700 mb-3">Based on the number of groups selected:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <i className="ri-checkbox-circle-fill text-blue-600" />
                    <span><strong>1 group</strong> – ₹49</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <i className="ri-checkbox-circle-fill text-blue-600" />
                    <span><strong>2 to 5 groups</strong> – ₹99</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <i className="ri-checkbox-circle-fill text-blue-600" />
                    <span><strong>6 to 10 groups</strong> – ₹199</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-start gap-3">
                <i className="ri-notification-badge-line text-2xl text-yellow-600 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Renewal Reminders</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Renewal reminders may be sent before the next event date to help users schedule wishes again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl shadow-lg">
              <i className="ri-user-smile-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Built for Simplicity</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              WishHapp is designed to be simple and easy to use. Users can schedule wishes in just a few steps without creating complex accounts or managing complicated settings.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-200">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-600 rounded-xl mx-auto mb-4 shadow-md">
                  <i className="ri-login-circle-line text-2xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">No Complex Accounts</h4>
                <p className="text-gray-600 text-sm">Quick scheduling without lengthy registration</p>
              </div>

              <div className="text-center p-6 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="w-14 h-14 flex items-center justify-center bg-cyan-600 rounded-xl mx-auto mb-4 shadow-md">
                  <i className="ri-dashboard-line text-2xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Simple Interface</h4>
                <p className="text-gray-600 text-sm">Clean, intuitive scheduling process</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl mx-auto mb-4 shadow-md">
                  <i className="ri-hand-heart-line text-2xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Accessible for Everyone</h4>
                <p className="text-gray-600 text-sm">Designed for users of all technical levels</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-600 to-rose-500 rounded-2xl shadow-lg">
              <i className="ri-flag-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-pink-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg border border-rose-200 p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The mission of WishHapp is to make celebrations easier by using automation technology to deliver meaningful messages at the right moment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The platform focuses on simplicity, reliability, and improving how people stay connected during important life events.
            </p>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-rose-200">
              <i className="ri-heart-pulse-line text-3xl text-rose-600" />
              <p className="text-gray-700 font-semibold">
                Making every celebration unforgettable through smart automation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg">
              <i className="ri-building-4-line text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Who Operates WishHapp</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full mt-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-600 to-yellow-500 rounded-3xl shadow-xl">
                  <i className="ri-building-line text-5xl text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">WishHapp</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  WishHapp is a technology platform focused on building automation tools and digital services for WhatsApp wish scheduling.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our team is committed to creating reliable, user-friendly platforms that help people stay connected and make their lives easier through smart technology.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg">
                    <i className="ri-shield-check-line text-orange-600" />
                    <span className="text-sm font-semibold text-gray-700">Trusted Platform</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <i className="ri-customer-service-2-line text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Dedicated Support</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                    <i className="ri-lock-line text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">Secure Payments</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-2xl text-gray-600 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Need Support?</h4>
                  <p className="text-gray-700 mb-3">
                    For support or inquiries, users can contact the WishHapp team using the support email listed on the Contact page.
                  </p>
                  <a href="mailto:support@wishhapp.in" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                    support@wishhapp.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-3xl shadow-2xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-6 shadow-lg">
                <i className="ri-rocket-line text-4xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to automate your next celebration?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Schedule your first wish today and experience the convenience of automated WhatsApp message delivery.
              </p>
              <Link
                href="/book"
                className="inline-block px-10 py-4 bg-white text-purple-600 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Schedule a Wish
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}