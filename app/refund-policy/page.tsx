
'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-refund-2-line"></i>
              Refund & Cancellation
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understand how refunds and cancellations are handled for WishHapp services.
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
                  This policy describes the refund and cancellation terms for services purchased through the <strong>WishHapp</strong> platform. WishHapp provides automated WhatsApp wish scheduling, and once a message is scheduled and processed, certain refunds may not be possible. Please read this policy carefully before making a purchase.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-close-circle-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Cancellation Policy</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Users may request cancellation of a scheduled wish under the following conditions:
                </p>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg flex-shrink-0">
                        <i className="ri-time-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Before Processing</h3>
                        <p className="text-gray-700">Cancellation requests must be submitted <strong>at least 48 hours before the scheduled delivery time</strong>. Requests submitted after this window may not be eligible for cancellation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg flex-shrink-0">
                        <i className="ri-mail-send-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">How to Cancel</h3>
                        <p className="text-gray-700">To request cancellation, email <a href="mailto:support@wishhapp.in" className="text-purple-600 hover:text-purple-700 font-semibold underline">support@wishhapp.in</a> with your order details and transaction ID. Our team will review your request within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                        <i className="ri-forbid-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Cannot Cancel</h3>
                        <p className="text-gray-700">If the wish has already been scheduled in the system and prepared for delivery, or if the scheduled time has passed, cancellation is <strong>no longer possible</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-refund-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Refunds are handled on a case-by-case basis. Here's when refunds may or may not be provided:
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-lg">
                      <i className="ri-checkbox-circle-line text-white"></i>
                    </div>
                    Refunds May Be Considered
                  </h3>
                  <div className="grid gap-3">
                    {[
                      { icon: 'ri-error-warning-line', text: 'A payment was successfully charged but the wish was not scheduled due to a system error on our end' },
                      { icon: 'ri-file-copy-line', text: 'A duplicate payment was made accidentally for the same order' },
                      { icon: 'ri-time-line', text: 'Cancellation was requested at least 48 hours before the scheduled delivery time' },
                      { icon: 'ri-server-line', text: "Technical failure on WishHapp's end prevented message delivery despite correct setup" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100 hover:bg-green-100 transition-colors duration-200">
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className={`${item.icon} text-green-600 text-lg`}></i>
                        </div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-lg">
                      <i className="ri-close-circle-line text-white"></i>
                    </div>
                    Refunds Are Generally Not Provided
                  </h3>
                  <div className="grid gap-3">
                    {[
                      { icon: 'ri-checkbox-line', text: 'The wish was successfully scheduled in the system' },
                      { icon: 'ri-user-unfollow-line', text: 'The user did not add the WishHapp bot to the WhatsApp group' },
                      { icon: 'ri-delete-bin-line', text: 'The bot was removed from the group before message delivery' },
                      { icon: 'ri-edit-line', text: 'Incorrect recipient information, group details, or message content was provided by the user' },
                      { icon: 'ri-send-plane-fill', text: 'The scheduled wish has already been delivered' },
                      { icon: 'ri-time-line', text: 'Cancellation was requested less than 48 hours before the scheduled time' },
                      { icon: 'ri-whatsapp-line', text: 'Delivery failed due to WhatsApp service downtime or recipient phone issues' },
                      { icon: 'ri-heart-line', text: 'Change of mind after payment completion' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100 hover:bg-red-100 transition-colors duration-200">
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className={`${item.icon} text-red-600 text-lg`}></i>
                        </div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-secure-payment-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Processing</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  All payments are processed securely through trusted payment infrastructure:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-lg">
                        <i className="ri-bank-card-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Secure Gateway</h3>
                    </div>
                    <p className="text-gray-700">Payments are processed through <strong>Razorpay</strong>, which provides secure payment infrastructure.</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg">
                        <i className="ri-shield-check-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Data Protection</h3>
                    </div>
                    <p className="text-gray-700">WishHapp does not store credit card or banking information. All payment data is handled securely by Razorpay.</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-time-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Refund Processing Time</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If a refund is approved, here's what you can expect:
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full mx-auto mb-4 shadow-lg">
                        <i className="ri-mail-check-line text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Step 1</h3>
                      <p className="text-sm text-gray-700">Submit refund request via email</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full mx-auto mb-4 shadow-lg">
                        <i className="ri-search-eye-line text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Step 2</h3>
                      <p className="text-sm text-gray-700">Review within 2-3 business days</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full mx-auto mb-4 shadow-lg">
                        <i className="ri-hand-coin-line text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Step 3</h3>
                      <p className="text-sm text-gray-700">Refund processed in 5-7 business days</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-orange-200">
                    <p className="text-center text-gray-700 flex items-center justify-center gap-2">
                      <i className="ri-bank-line text-orange-600"></i>
                      Refunds are credited to the original payment method
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-refresh-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Renewal Payments</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Renewal payments follow specific refund rules:
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: 'ri-notification-3-line', label: 'Renewal Reminders', desc: 'Renewal reminders may be sent approximately 7 days before the next event date' },
                    { icon: 'ri-shopping-cart-line', label: 'New Order Treatment', desc: 'If a renewal payment is made, the scheduling process is treated as a new order and the same refund rules apply' },
                    { icon: 'ri-calendar-check-line', label: '48-Hour Rule', desc: 'Cancellation must be requested at least 48 hours before the scheduled delivery time' },
                    { icon: 'ri-close-line', label: 'No Post-Delivery Refunds', desc: 'No refunds are provided after the scheduled delivery date has passed' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-100 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                          <i className={`${item.icon} text-white`}></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                          <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-calculator-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Partial Refunds</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If you scheduled wishes for multiple groups and only some deliveries failed due to our technical error, you may receive a partial refund:
                </p>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-md">
                      <i className="ri-calculator-line text-indigo-600 text-3xl"></i>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 mb-1">Refund Calculation</p>
                        <p className="text-2xl font-bold text-indigo-600">Failed Deliveries × ₹9</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="ri-lightbulb-line text-indigo-600"></i>
                      Example Scenario
                    </h4>
                    <p className="text-gray-700 mb-3">You scheduled wishes for <strong>5 groups</strong> at ₹9 each (total ₹45).</p>
                    <p className="text-gray-700 mb-3">If <strong>2 deliveries failed</strong> due to a technical error on our end:</p>
                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                      <p className="text-indigo-900 font-bold">Partial Refund = 2 × ₹9 = ₹18</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-percent-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Gateway Fees</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-information-line text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-pink-900 font-semibold mb-2">Important Notice</p>
                      <p className="text-gray-700 leading-relaxed">
                        Payment gateway fees charged by Razorpay are <strong>non-refundable</strong>, even if a refund is approved. The refunded amount may be slightly less than the original payment due to these processing fees.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-scales-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Dispute Resolution</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If you believe an incorrect charge occurred or have concerns about a refund decision:
                </p>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-6 border border-rose-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-rose-500 rounded-lg flex-shrink-0">
                        <i className="ri-mail-send-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Contact Support First</h3>
                        <p className="text-gray-700">Please contact WishHapp support at <a href="mailto:support@wishhapp.in" className="text-purple-600 hover:text-purple-700 font-semibold underline">support@wishhapp.in</a> before initiating a payment dispute with your bank or payment provider.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-6 border border-rose-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                        <i className="ri-customer-service-2-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Fair Resolution</h3>
                        <p className="text-gray-700">Our support team will work with you to resolve the issue fairly and transparently. We aim to respond to all refund inquiries within 2-3 business days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-file-edit-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Changes to This Policy</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  WishHapp may update this Refund & Cancellation Policy from time to time to reflect changes in our practices, services, or for legal, operational, or regulatory reasons. When we make changes, we will post the updated policy on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex-shrink-0">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Need Help With a Refund?</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If you have questions about refunds or cancellations, please don't hesitate to reach out:
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-lg">
                          <i className="ri-mail-line text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Support Email</p>
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
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-message-3-line"></i>
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200"></div>

              <section>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-xl flex-shrink-0">
                      <i className="ri-shield-check-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to You</h3>
                      <p className="text-gray-700 leading-relaxed">
                        At WishHapp, we are committed to providing transparent pricing and fair refund policies. If you experience any issues with our service, we encourage you to reach out to our support team. We will work with you to find a fair resolution based on the circumstances of your case.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200 cursor-pointer"
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
