'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      await fetch('https://readdy.ai/api/form/d6p9pakddmmni7ck7ul0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#3b1aaa] via-[#5B2EFF] to-[#7c4dff] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/30 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-indigo-400/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-16 left-16 w-3 h-3 bg-yellow-300/60 rounded-full" />
          <div className="absolute top-32 right-32 w-2 h-2 bg-white/40 rounded-full" />
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-yellow-400/40 rounded-full" />
          <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-white/30 rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <i className="ri-customer-service-2-line text-yellow-300 text-sm" />
            <span className="text-white/90 text-sm font-medium">We're here to help</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Need help or have questions about WishHapp? Our support team is here to assist you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line text-yellow-300 text-base" />
              </div>
              <span className="text-white/90 text-sm font-medium">24–48 hr response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-mail-check-line text-green-300 text-base" />
              </div>
              <span className="text-white/90 text-sm font-medium">support@wishhapp.in</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shield-check-line text-blue-300 text-base" />
              </div>
              <span className="text-white/90 text-sm font-medium">WishHapp</span>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-2 pb-4">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: 'ri-calendar-schedule-line', color: 'from-purple-500 to-indigo-600', bg: 'bg-purple-50', border: 'border-purple-100', title: 'Scheduling Help', desc: 'Learn how to schedule automated wishes for your WhatsApp groups and personal chats.' },
            { icon: 'ri-secure-payment-line', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', border: 'border-blue-100', title: 'Payment Support', desc: 'Questions about pricing, payments, refunds, or renewal plans? We\'re here to help.' },
            { icon: 'ri-robot-line', color: 'from-emerald-500 to-green-500', bg: 'bg-emerald-50', border: 'border-emerald-100', title: 'Bot Setup', desc: 'Need assistance adding the WishHapp bot to your group or troubleshooting delivery?' },
          ].map((card) => (
            <div key={card.title} className={`${card.bg} border ${card.border} rounded-2xl p-6 hover:shadow-md transition-all duration-300 cursor-pointer group`}>
              <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${card.color} rounded-xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${card.icon} text-white text-xl`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">{card.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Column — Info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Business Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#5B2EFF] to-indigo-600 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl">
                    <i className="ri-building-line text-white text-lg" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Contact Information</h2>
                    <p className="text-purple-200 text-xs">Official business details</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-5">
                {[
                  { icon: 'ri-building-4-line', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', label: 'Business Name', value: 'WishHapp – WhatsApp Wish Scheduling', isLink: false },
                  { icon: 'ri-mail-line', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', label: 'Support Email', value: 'support@wishhapp.in', isLink: true, href: 'mailto:support@wishhapp.in' },
                  { icon: 'ri-map-pin-line', iconBg: 'bg-green-100', iconColor: 'text-green-600', label: 'Business Address', value: 'WishHapp, Bangalore, Karnataka, India', isLink: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center ${item.iconBg} rounded-xl flex-shrink-0`}>
                      <i className={`${item.icon} ${item.iconColor} text-lg`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.isLink ? (
                        <a href={item.href} className="text-[#5B2EFF] font-medium hover:underline text-sm">{item.value}</a>
                      ) : (
                        <p className="text-gray-800 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-xl">
                  <i className="ri-time-line text-amber-600 text-lg" />
                </div>
                <h3 className="font-bold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our support team typically responds within{' '}
                <span className="font-bold text-amber-600">24–48 hours</span>. We're committed to helping you with scheduling, payments, or bot setup.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500 font-medium">Support team is active</span>
              </div>
            </div>

            {/* FAQ CTA */}
            <div className="relative bg-gradient-to-br from-[#5B2EFF] to-indigo-700 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                  <i className="ri-question-answer-line text-white text-lg" />
                </div>
                <h3 className="font-bold text-white mb-2">Need Help Setting Up?</h3>
                <p className="text-purple-200 text-sm leading-relaxed mb-5">
                  Visit our FAQ to learn how WishHapp works, how to add the bot, and how scheduling works.
                </p>
                <Link
                  href="/#faq"
                  className="inline-flex items-center gap-2 bg-white text-[#5B2EFF] px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  View FAQ
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl">
                    <i className="ri-message-3-line text-white text-lg" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">Send Us a Message</h2>
                    <p className="text-blue-100 text-xs">We'll get back to you within 24–48 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <i className="ri-checkbox-circle-fill text-green-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-xs mt-0.5">Your message has been received. Our team will respond shortly.</p>
                    </div>
                  </div>
                )}

                <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                          <i className="ri-user-line text-gray-400 text-base" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                          <i className="ri-mail-line text-gray-400 text-base" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                        <i className="ri-chat-1-line text-gray-400 text-base" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                        placeholder="What is your inquiry about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all resize-none text-sm bg-gray-50 focus:bg-white"
                      placeholder="Tell us how we can help you..."
                    />
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-xs text-gray-400">Be as detailed as possible</p>
                      <p className={`text-xs font-medium ${formData.message.length > 450 ? 'text-red-400' : 'text-gray-400'}`}>
                        {formData.message.length}/500
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#5B2EFF] to-indigo-600 hover:from-[#4a22e0] hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-lg" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-fill text-lg" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Or email us directly at{' '}
                    <a href="mailto:support@wishhapp.in" className="text-[#5B2EFF] font-semibold hover:underline">
                      support@wishhapp.in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-14 bg-white border border-gray-100 rounded-2xl px-8 py-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: 'ri-shield-check-line', color: 'text-green-500', label: 'Secure Payments via Razorpay' },
              { icon: 'ri-lock-line', color: 'text-blue-500', label: 'Your Data is Protected' },
              { icon: 'ri-whatsapp-line', color: 'text-green-500', label: 'WhatsApp Automation' },
              { icon: 'ri-building-line', color: 'text-purple-500', label: 'WishHapp – Verified Business' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${item.icon} ${item.color} text-lg`} />
                </div>
                <span className="text-sm text-gray-600 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
