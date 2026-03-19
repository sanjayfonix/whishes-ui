'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-shield-check-line"></i>
              Your Privacy Matters
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how WishHapp collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-information-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Introduction</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Welcome to <strong>WishHapp</strong>. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our WhatsApp wish scheduling service. By using WishHapp, you agree to the practices described in this policy.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-file-list-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Information We Collect</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  When you use WishHapp to schedule automated WhatsApp wishes, we collect the following information:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: 'ri-user-line', text: 'Recipient name and WhatsApp group details' },
                    { icon: 'ri-calendar-line', text: 'Scheduled date and time of the wish' },
                    { icon: 'ri-message-3-line', text: 'Custom message content you create' },
                    { icon: 'ri-phone-line', text: 'Phone number used to link the bot with your account' },
                    { icon: 'ri-group-line', text: 'Number of groups or recipients selected' },
                    { icon: 'ri-bank-card-line', text: 'Payment transaction information' },
                    { icon: 'ri-computer-line', text: 'Technical information such as device type, browser data, and IP address' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-purple-600 text-lg`}></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
                  <p className="text-blue-900 font-semibold flex items-center gap-2">
                    <i className="ri-shield-check-line text-xl"></i>
                    Important: Payment information is processed securely by Razorpay and is not stored directly by WishHapp.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-settings-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">How We Use Your Information</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: 'ri-send-plane-line', text: 'To schedule and deliver automated WhatsApp wishes at your specified date and time' },
                    { icon: 'ri-robot-line', text: 'To link the WishHapp bot with your phone number for seamless delivery' },
                    { icon: 'ri-secure-payment-line', text: 'To process secure payments through Razorpay' },
                    { icon: 'ri-notification-3-line', text: 'To manage scheduled events and send renewal reminders' },
                    { icon: 'ri-line-chart-line', text: 'To improve service reliability, performance, and user experience' },
                    { icon: 'ri-customer-service-line', text: 'To provide customer support and respond to your inquiries' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-green-600 text-lg`}></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-whatsapp-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">WhatsApp Bot Interaction</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp uses an automated WhatsApp bot to deliver your scheduled wishes. Here's how it works:
                </p>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold flex-shrink-0">1</div>
                    <p className="text-gray-700 pt-1">After scheduling and payment, you will receive the WishHapp bot number.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold flex-shrink-0">2</div>
                    <p className="text-gray-700 pt-1">You must add the bot to your WhatsApp group or contact.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold flex-shrink-0">3</div>
                    <p className="text-gray-700 pt-1">The bot will send your scheduled message at the exact date and time you selected.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold flex-shrink-0">4</div>
                    <p className="text-gray-700 pt-1">The bot may automatically leave the group after successful delivery.</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-bank-card-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Processing</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  All payments are processed securely through <strong>Razorpay</strong>, a trusted and PCI DSS compliant payment gateway.
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: 'ri-lock-line', text: 'WishHapp does not store your credit card, debit card, or banking information' },
                    { icon: 'ri-shield-check-line', text: 'All payment data is encrypted and handled according to Razorpay\'s security standards' },
                    { icon: 'ri-secure-payment-line', text: 'Transaction details are stored only for order confirmation and support purposes' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-yellow-50 rounded-xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-yellow-600 text-lg`}></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-database-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Storage and Security</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Your data security is our top priority. We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-image-line', label: 'Media Files', desc: 'Deleted automatically after successful delivery' },
                    { icon: 'ri-lock-password-line', label: 'Message Content', desc: 'Encrypted end-to-end through WhatsApp infrastructure' },
                    { icon: 'ri-bank-card-line', label: 'Payment Data', desc: 'Processed and secured by Razorpay (PCI DSS compliant)' },
                    { icon: 'ri-shield-user-line', label: 'Personal Information', desc: 'Stored securely with industry-standard encryption' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-indigo-500 rounded-lg">
                          <i className={`${item.icon} text-white`}></i>
                        </div>
                        <h3 className="font-bold text-gray-900">{item.label}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <p className="text-indigo-900 flex items-start gap-2">
                    <i className="ri-server-line text-xl flex-shrink-0 mt-0.5"></i>
                    <span>All data is stored securely on protected servers with restricted access to authorized systems only.</span>
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-share-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Third Party Services</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp relies on trusted third-party services to deliver our automated wish scheduling platform. These services may process limited data necessary for service delivery:
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: 'ri-whatsapp-line', name: 'WhatsApp Business API', purpose: 'For automated message delivery to groups and contacts', color: 'green' },
                    { icon: 'ri-bank-card-2-line', name: 'Razorpay Payment Gateway', purpose: 'For secure payment processing and transaction management', color: 'blue' },
                    { icon: 'ri-cloud-line', name: 'Cloud Infrastructure Providers', purpose: 'For secure data storage and service hosting', color: 'purple' }
                  ].map((service, idx) => (
                    <div key={idx} className={`bg-${service.color}-50 border border-${service.color}-200 rounded-xl p-5 hover:shadow-md transition-all duration-200`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 flex items-center justify-center bg-${service.color}-500 rounded-lg flex-shrink-0`}>
                          <i className={`${service.icon} text-white text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                          <p className="text-gray-600 text-sm">{service.purpose}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <p className="text-orange-900 font-semibold">
                    <i className="ri-information-line mr-2"></i>
                    We do not sell, rent, or share your personal information with third parties for marketing purposes.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-user-settings-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Rights</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-eye-line', text: 'Access your personal data stored with us' },
                    { icon: 'ri-edit-line', text: 'Request correction of inaccurate information' },
                    { icon: 'ri-delete-bin-line', text: 'Request deletion of your data (subject to legal obligations)' },
                    { icon: 'ri-notification-off-line', text: 'Opt-out of renewal reminders' },
                    { icon: 'ri-close-circle-line', text: 'Withdraw consent for data processing' },
                    { icon: 'ri-download-line', text: 'Request a copy of your data in a portable format' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-teal-50 rounded-xl p-4 hover:bg-teal-100 transition-colors duration-200">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-teal-600 text-lg`}></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-teal-50 border border-teal-200 rounded-xl p-5">
                  <p className="text-teal-900">
                    <i className="ri-mail-line mr-2"></i>
                    To exercise any of these rights, please contact us at <a href="mailto:support@wishhapp.in" className="font-semibold underline hover:text-teal-700">support@wishhapp.in</a>
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-cookie-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Cookies and Analytics</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp uses minimal cookies and analytics tools to enhance your experience and monitor site performance:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-pink-50 rounded-xl p-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-checkbox-circle-line text-pink-600 text-lg"></i>
                    </div>
                    <p className="text-gray-700"><strong>Essential Cookies:</strong> Required for basic website functionality and user authentication.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-pink-50 rounded-xl p-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-line-chart-line text-pink-600 text-lg"></i>
                    </div>
                    <p className="text-gray-700"><strong>Analytics:</strong> Used to understand user behavior and improve service quality.</p>
                  </div>
                </div>
                <div className="mt-6 bg-pink-50 border border-pink-200 rounded-xl p-5">
                  <p className="text-pink-900 font-semibold">
                    <i className="ri-forbid-line mr-2"></i>
                    We do not use tracking cookies for advertising or sell your data to advertisers.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-scales-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Legal Compliance</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  We may disclose your information when required by law or to protect our rights:
                </p>
                <div className="grid gap-3">
                  {[
                    { text: 'To comply with legal obligations, court orders, or government requests' },
                    { text: 'To enforce our Terms and Conditions or other agreements' },
                    { text: 'To protect the rights, property, or safety of WishHapp, our users, or others' },
                    { text: 'To prevent fraud, security breaches, or technical issues' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-line text-red-600 text-lg"></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-refresh-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Changes to This Policy</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will post the updated policy on this page with a revised "Last updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to reach out to us:
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-lg">
                          <i className="ri-mail-line text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email Support</p>
                          <a href="mailto:support@wishhapp.in" className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-200">
                            support@wishhapp.in
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-lg">
                          <i className="ri-building-line text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Business Name</p>
                          <p className="text-lg font-bold text-gray-900">WishHapp</p>
                          <p className="text-sm text-gray-600">A product by WishHapp</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link 
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                      >
                        <i className="ri-message-3-line"></i>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
            >
              <i className="ri-arrow-left-line"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}