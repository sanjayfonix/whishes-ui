'use client';

import { useState } from 'react';

interface FAQItem {
  category: string;
  icon: string;
  color: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string>('0-0');

  const faqData: FAQItem[] = [
    {
      category: 'Getting Started',
      icon: 'ri-rocket-line',
      color: 'purple',
      questions: [
        {
          question: 'What is WishHapp?',
          answer: 'WishHapp is an automated WhatsApp message scheduling service that allows users to schedule birthday, anniversary, and celebration wishes for WhatsApp groups or personal chats. Once scheduled, the WishHapp bot delivers the message automatically at the selected date and time. The service is designed to make celebrations easier and ensure that important moments are never missed.'
        },
        {
          question: 'Do I need to create an account to use WishHapp?',
          answer: 'No. WishHapp is designed to be simple. Users can schedule wishes directly from the website without creating an account.'
        }
      ]
    },
    {
      category: 'Scheduling Wishes',
      icon: 'ri-calendar-check-line',
      color: 'blue',
      questions: [
        {
          question: 'How do I schedule a wish?',
          answer: 'Scheduling a wish is simple: (1) Enter recipient name and message, (2) Select date and time, (3) Choose the number of groups or recipients, (4) Complete the payment, (5) Add the WishHapp bot to your WhatsApp group. After setup, the bot will automatically send the message at the scheduled time.'
        },
        {
          question: 'Can I schedule wishes for personal chats?',
          answer: 'Yes. WishHapp supports scheduling wishes for both WhatsApp groups and personal chats.'
        },
        {
          question: 'How far in advance can I schedule a wish?',
          answer: 'You can schedule wishes for future dates and times depending on your event requirements. Perfect for planning ahead for birthdays, anniversaries, and special occasions.'
        }
      ]
    },
    {
      category: 'Bot Setup',
      icon: 'ri-robot-line',
      color: 'green',
      questions: [
        {
          question: 'Why do I need to add the WishHapp bot to my group?',
          answer: 'The WishHapp bot is responsible for delivering the scheduled message. After payment, users must add the bot to their WhatsApp group so it can post the message automatically at the scheduled time.'
        },
        {
          question: 'What happens after I add the bot?',
          answer: 'Once the bot is added to the group, it automatically detects the scheduled event and sends the message at the selected time.'
        },
        {
          question: 'Will the bot stay in my group permanently?',
          answer: 'No. The bot is designed to leave the group automatically after the scheduled message has been delivered. No manual cleanup needed!'
        }
      ]
    },
    {
      category: 'Pricing',
      icon: 'ri-price-tag-3-line',
      color: 'yellow',
      questions: [
        {
          question: 'How much does WishHapp cost?',
          answer: 'The first scheduling starts at ₹9 per group or recipient. This affordable entry price allows you to try the automated wish delivery service and experience the convenience of never forgetting important occasions.'
        },
        {
          question: 'What are the renewal prices?',
          answer: 'Renewal pricing depends on the number of groups: 1 group – ₹49, 2 to 5 groups – ₹99, 6 to 10 groups – ₹199. This flexible pricing allows you to choose the plan that best fits your needs.'
        },
        {
          question: 'Will I be reminded about renewal?',
          answer: 'Yes. WishHapp may send a reminder approximately 7 days before the next year\'s event date so you can schedule the wish again. Renewal is completely optional with no automatic charges.'
        }
      ]
    },
    {
      category: 'Payments',
      icon: 'ri-secure-payment-line',
      color: 'teal',
      questions: [
        {
          question: 'How are payments processed?',
          answer: 'Payments are processed securely through Razorpay, a trusted payment gateway. WishHapp does not store card or banking details. All transactions are encrypted and secure.'
        },
        {
          question: 'Can I cancel a scheduled wish?',
          answer: 'Cancellation may be possible before the wish is processed for delivery. Please refer to the Refund & Cancellation Policy page for details on cancellation conditions and refund eligibility.'
        }
      ]
    },
    {
      category: 'Support',
      icon: 'ri-customer-service-line',
      color: 'rose',
      questions: [
        {
          question: 'What should I do if the bot does not send the message?',
          answer: 'Make sure the WishHapp bot has been added to the correct WhatsApp group and has not been removed before the scheduled time. Verify that the bot has permission to send messages in the group. If the issue persists, contact WishHapp support immediately.'
        },
        {
          question: 'How can I contact WishHapp support?',
          answer: 'You can contact the support team through the Contact Us page or by emailing support@wishhapp.in. Our team typically responds within 24-48 hours.'
        }
      ]
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; badge: string; border: string }> = {
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-gradient-to-br from-purple-600 to-purple-500', border: 'border-purple-100' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-gradient-to-br from-blue-600 to-blue-500', border: 'border-blue-100' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-gradient-to-br from-green-600 to-green-500', border: 'border-green-100' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', badge: 'bg-gradient-to-br from-yellow-600 to-yellow-500', border: 'border-yellow-100' },
    teal: { bg: 'bg-teal-50', icon: 'text-teal-600', badge: 'bg-gradient-to-br from-teal-600 to-teal-500', border: 'border-teal-100' },
    rose: { bg: 'bg-rose-50', icon: 'text-rose-600', badge: 'bg-gradient-to-br from-rose-600 to-rose-500', border: 'border-rose-100' }
  };

  const toggleAccordion = (key: string) => {
    setOpenIndex(openIndex === key ? '' : key);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {faqData.map((category, categoryIndex) => {
          const colors = colorClasses[category.color];
          
          return (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 ${colors.badge} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                  <div className={`h-1 w-20 ${colors.badge} rounded-full mt-2`}></div>
                </div>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={key}
                      className={`bg-white rounded-2xl shadow-md border-2 ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-xl ${isOpen ? 'ring-2 ring-offset-2 ring-purple-600/20' : ''}`}
                    >
                      <button
                        onClick={() => toggleAccordion(key)}
                        className={`w-full px-8 py-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-all duration-200 ${isOpen ? colors.bg : 'hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-10 h-10 ${isOpen ? colors.badge : 'bg-gray-100'} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                            <i className={`ri-question-line ${isOpen ? 'text-white' : 'text-gray-400'} text-xl`}></i>
                          </div>
                          <h3 className={`text-lg font-bold ${isOpen ? 'text-purple-900' : 'text-gray-900'} transition-colors duration-200`}>
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`w-10 h-10 ${isOpen ? colors.badge : 'bg-gray-100'} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                          <i
                            className={`${isOpen ? 'ri-subtract-line text-white' : 'ri-add-line text-gray-600'} text-xl transition-all duration-300`}
                          ></i>
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
                      >
                        <div className={`px-8 pb-6 pt-2 ${colors.bg}`}>
                          <div className="pl-14">
                            <div className={`border-l-4 ${colors.border} pl-6 py-2`}>
                              <p className="text-gray-700 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}