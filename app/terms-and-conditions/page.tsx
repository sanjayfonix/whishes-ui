'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-file-text-line"></i>
              Legal Agreement
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using WishHapp.
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
                  Welcome to <strong>WishHapp</strong>. By accessing and using WishHapp, you agree to be bound by these Terms and Conditions. WishHapp provides an automated service that schedules and delivers WhatsApp wishes using a bot system. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-service-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Description</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp is an automated WhatsApp wish scheduling service. Here's how it works:
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold flex-shrink-0">1</div>
                    <p className="text-gray-700 pt-1">Users schedule automated WhatsApp wishes for groups or personal chats by providing recipient information, message content, and delivery time.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold flex-shrink-0">2</div>
                    <p className="text-gray-700 pt-1">After completing payment, users receive the WishHapp bot number.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold flex-shrink-0">3</div>
                    <p className="text-gray-700 pt-1">Users must add the WishHapp bot to their WhatsApp group so the scheduled message can be delivered.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold flex-shrink-0">4</div>
                    <p className="text-gray-700 pt-1">The bot sends the message automatically at the scheduled time.</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-user-settings-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">User Responsibilities</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  To ensure the service works correctly, users must fulfill the following responsibilities:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: 'ri-add-circle-line', text: 'Add the WishHapp bot to the correct WhatsApp group after scheduling' },
                    { icon: 'ri-shield-check-line', text: 'Ensure the bot remains in the group until the scheduled message is delivered' },
                    { icon: 'ri-checkbox-circle-line', text: 'Provide accurate recipient information, message content, and delivery time' },
                    { icon: 'ri-scales-3-line', text: 'Ensure your use of the service complies with applicable laws and WhatsApp platform rules' },
                    { icon: 'ri-user-follow-line', text: 'Obtain necessary permissions before adding the bot to groups you do not own' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition-colors duration-200">
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
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-forbid-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Acceptable Use</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Users may not use WishHapp to send harmful or illegal content. The following activities are strictly prohibited:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: 'ri-spam-line', text: 'Sending spam, promotional content, or unsolicited messages' },
                    { icon: 'ri-alert-line', text: 'Harassing, threatening, or abusing others' },
                    { icon: 'ri-error-warning-line', text: 'Distributing illegal, harmful, or offensive content' },
                    { icon: 'ri-user-unfollow-line', text: 'Impersonating others or misrepresenting your identity' },
                    { icon: 'ri-bug-line', text: 'Distributing malware, viruses, or harmful software' },
                    { icon: 'ri-shield-cross-line', text: 'Violating WhatsApp Terms of Service or applicable laws' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 hover:bg-red-100 transition-colors duration-200 border border-red-100">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-red-600 text-lg`}></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
                  <p className="text-red-900 font-semibold flex items-center gap-2">
                    <i className="ri-alert-line text-xl"></i>
                    WishHapp reserves the right to suspend or terminate service if misuse is detected.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-price-tag-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing and Payments</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  WishHapp uses a transparent pricing structure:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-lg">
                        <i className="ri-calendar-check-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">First-Time Scheduling</h3>
                    </div>
                    <p className="text-3xl font-extrabold text-purple-600 mb-2">₹9</p>
                    <p className="text-gray-700 text-sm">per group or recipient</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-lg">
                        <i className="ri-refresh-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Renewal Pricing</h3>
                    </div>
                    <div className="space-y-1 text-gray-700">
                      <p className="text-sm"><span className="font-bold text-yellow-600">₹49</span> — 1 group</p>
                      <p className="text-sm"><span className="font-bold text-yellow-600">₹99</span> — 2 to 5 groups</p>
                      <p className="text-sm"><span className="font-bold text-yellow-600">₹199</span> — 6 to 10 groups</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="text-yellow-900 flex items-start gap-2">
                    <i className="ri-secure-payment-line text-xl flex-shrink-0 mt-0.5"></i>
                    <span>All payments are processed securely through <strong>Razorpay</strong>, a trusted and PCI DSS compliant payment gateway. Prices are subject to change with prior notice.</span>
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-notification-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Renewal Reminders</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp helps you remember important dates with our renewal reminder system:
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-5 border border-orange-100">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-calendar-event-line text-orange-600 text-lg"></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Reminder Timing</p>
                      <p className="text-gray-700">WishHapp may send renewal reminders approximately <strong>7 days before the next year's event date</strong> so you can schedule the wish again.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-5 border border-orange-100">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-hand-coin-line text-orange-600 text-lg"></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Optional Renewal</p>
                      <p className="text-gray-700">Renewal is completely optional and requires a separate payment. No automatic charges will be applied.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-robot-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Bot Operation</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  The WishHapp bot operates according to the following rules:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-user-add-line', label: 'Manual Addition Required', desc: 'You must manually add the bot to your WhatsApp group' },
                    { icon: 'ri-send-plane-line', label: 'Automated Delivery', desc: 'The bot sends your scheduled message at the specified time' },
                    { icon: 'ri-logout-box-line', label: 'Auto-Exit', desc: 'The bot automatically exits the group within 24 hours after delivery' },
                    { icon: 'ri-admin-line', label: 'Admin Permissions', desc: 'The bot requires group admin permissions to function properly' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-100 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 rounded-lg">
                          <i className={`${item.icon} text-white`}></i>
                        </div>
                        <h3 className="font-bold text-gray-900">{item.label}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-server-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Availability</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp is an automated service that depends on third-party platforms:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-indigo-50 rounded-xl p-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-whatsapp-line text-indigo-600 text-lg"></i>
                    </div>
                    <p className="text-gray-700">Service delivery depends on <strong>WhatsApp Business API</strong> availability and platform policies.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-indigo-50 rounded-xl p-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-bank-card-line text-indigo-600 text-lg"></i>
                    </div>
                    <p className="text-gray-700">Payment processing depends on <strong>Razorpay</strong> payment gateway availability.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-indigo-50 rounded-xl p-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-time-line text-indigo-600 text-lg"></i>
                    </div>
                    <p className="text-gray-700">WishHapp cannot guarantee uninterrupted service in all circumstances due to third-party dependencies.</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-shield-cross-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Limitation of Liability</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  WishHapp shall not be liable for issues caused by:
                </p>
                <div className="grid gap-3">
                  {[
                    { text: 'Failure to add the bot to the correct WhatsApp group' },
                    { text: 'Removal of the bot before message delivery' },
                    { text: 'Changes to WhatsApp platform policies or API restrictions' },
                    { text: 'Incorrect information entered by users during scheduling' },
                    { text: 'Third-party service interruptions (WhatsApp, Razorpay)' },
                    { text: 'Content of messages sent through our service' },
                    { text: 'Consequences of messages sent to incorrect recipients' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-close-circle-line text-pink-600 text-lg"></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Delivery Guarantee</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  While we strive for 100% delivery success, WishHapp cannot guarantee delivery if:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: 'ri-user-unfollow-line', text: 'The bot is not added to the group before the scheduled time' },
                    { icon: 'ri-delete-bin-line', text: 'The bot is removed from the group before delivery' },
                    { icon: 'ri-error-warning-line', text: 'WhatsApp services are unavailable or experiencing downtime' },
                    { icon: 'ri-phone-lock-line', text: 'The recipient\'s phone number is invalid, blocked, or has privacy restrictions' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-teal-600 text-lg`}></i>
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
                    <i className="ri-refund-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For detailed information about refunds and cancellations, please refer to our <Link href="/refund-policy" className="text-purple-600 hover:text-purple-700 font-semibold underline">Refund Policy</Link> page.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-settings-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Modifications to Service</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  WishHapp may modify features, update services, or change functionality to improve performance, comply with platform requirements, or enhance user experience. We will make reasonable efforts to notify users of significant changes that may affect their scheduled wishes.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-close-circle-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Termination</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  We reserve the right to suspend or terminate your access to WishHapp if:
                </p>
                <div className="grid gap-3">
                  {[
                    { text: 'You violate these Terms and Conditions' },
                    { text: 'You engage in prohibited activities or misuse the service' },
                    { text: 'You provide false or misleading information' },
                    { text: 'Your actions harm other users or the WishHapp platform' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-rose-50 rounded-xl p-4 border border-rose-100">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-error-warning-line text-rose-600 text-lg"></i>
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-refresh-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Changes to Terms</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We may update these Terms and Conditions from time to time to reflect changes in our practices, services, or for legal, operational, or regulatory reasons. When we make changes, we will post the updated terms on this page with a revised "Last updated" date. Continued use of WishHapp after changes constitutes acceptance of the updated terms.
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
                  If you have questions about these Terms and Conditions, please don't hesitate to reach out:
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