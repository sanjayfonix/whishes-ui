'use client';

import { useState } from 'react';

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why is the first schedule ₹9?',
      answer: 'We want to make WishHapp accessible to everyone. The ₹9 entry price allows you to try our automated wish delivery service at a low cost and experience the convenience of never forgetting important occasions.'
    },
    {
      question: 'Do I need to renew every year?',
      answer: 'No, renewal is completely optional. You will receive a reminder 7 days before the next event date, and you can choose whether to renew based on your needs. There are no automatic charges or commitments.'
    },
    {
      question: 'How many groups can I schedule wishes for?',
      answer: 'You can schedule wishes for up to 10 groups or recipients with our Celebration Pack. For first-time scheduling, each group or recipient costs ₹9. For renewals, choose from our flexible plans based on your needs.'
    },
    {
      question: 'What happens after I pay?',
      answer: 'After payment confirmation, you will receive the WishHapp bot WhatsApp number. Simply add the bot to your WhatsApp group or save it as a contact. The bot will automatically send your scheduled wish at the exact date and time you specified.'
    },
    {
      question: 'Can I schedule wishes for personal chats?',
      answer: 'Yes! WishHapp works for both WhatsApp groups and personal chats. You can schedule birthday wishes, anniversary messages, or any special occasion greetings for individual contacts.'
    },
    {
      question: 'Is payment secure?',
      answer: 'Absolutely. All payments are processed through Razorpay, a trusted and secure payment gateway. We never store your payment information, and all transactions are encrypted.'
    },
    {
      question: 'Can I customize my wish messages?',
      answer: 'Yes! You can write custom messages or choose from our default wish templates. Add personal touches, emojis, and make each wish unique and meaningful.'
    },
    {
      question: 'What if I want to cancel or modify a scheduled wish?',
      answer: 'You can contact our support team to modify or cancel scheduled wishes. Please refer to our Refund Policy for details on cancellations and refunds.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/30 via-white to-yellow-50/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <i className="ri-question-line text-yellow-600 text-lg"></i>
            <span className="text-sm font-semibold text-yellow-700">Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about WishHapp pricing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-purple-50/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    className={`${
                      openIndex === index ? 'ri-subtract-line' : 'ri-add-line'
                    } text-purple-600 text-xl transition-transform duration-300`}
                  ></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}