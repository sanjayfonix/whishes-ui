'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I send wishes to personal chats?',
      answer: 'Yes! WishHapp supports both WhatsApp groups and personal chats. You can schedule wishes for any recipient.'
    },
    {
      question: 'Do I need to add the bot to my group?',
      answer: 'Yes. The WishHapp bot must be added so it can deliver your scheduled message. After payment, you\'ll receive the bot number to save and add to your group.'
    },
    {
      question: 'How many groups can I schedule wishes for?',
      answer: 'You can schedule wishes for up to 10 groups or recipients at once.'
    },
    {
      question: 'When will I receive renewal reminders?',
      answer: 'Renewal reminders are sent 7 days before the next year\'s event date. You can choose to renew with flexible pricing based on the number of groups.'
    },
    {
      question: 'Can I schedule wishes in advance?',
      answer: 'Yes! You can schedule wishes for any future date. Perfect for birthdays, anniversaries, and special occasions you don\'t want to forget.'
    },
    {
      question: 'What happens after the bot delivers my wish?',
      answer: 'After delivering your message, the bot automatically exits the group within 24 hours. No manual cleanup needed!'
    },
    {
      question: 'How does renewal pricing work?',
      answer: 'First-time scheduling costs ₹9 per group. After 1 year, renewal pricing offers slabs: ₹49 for 1 group, ₹99 for 2-5 groups, or ₹199 for 6-10 groups.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-br from-purple-50/50 via-white to-yellow-50/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Everything you need to know about WishHapp
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <i className={`ri-arrow-down-s-line text-2xl text-purple-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}