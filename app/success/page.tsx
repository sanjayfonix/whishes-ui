'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDone = () => {
    router.push('/');
  };

  const eventData = {
    recipientName: 'Rahul Sharma',
    eventDate: 'March 15, 2026',
    deliveryTime: '10:00 AM IST',
    recipientType: 'WhatsApp Group',
    numberOfGroups: 2,
    message: 'Happy Birthday Rahul! Wishing you a wonderful day filled with joy, laughter, and all the things you love. May this year bring you happiness and success! 🎂🎉',
  };

  const truncated = eventData.message.length > 100;
  const displayMessage = expanded ? eventData.message : eventData.message.slice(0, 100) + (truncated ? '...' : '');

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-24 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
        </div>
      )}

      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-8 flex justify-center">
          <img
            src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png"
            alt="WishHapp"
            className="h-10 w-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* ── 1. Success Header ── */}
          <div className="px-6 md:px-8 pt-8 pb-6 text-center border-b border-gray-100">
            <div className="mb-5 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-60"></div>
                <i className="ri-checkbox-circle-fill text-4xl text-green-500 relative z-10"></i>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Your Wish is Scheduled
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Your wish has been successfully scheduled.<br />
              Please ensure the <span className="font-semibold text-[#5B2EFF]">WishHapp bot is added to your group</span> to complete setup.
            </p>
          </div>

          <div className="px-6 md:px-8 py-6 space-y-4">

            {/* ── 2. Event Summary Card ── */}
            <div className="bg-[#F9FAFB] rounded-xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Event Summary</p>
              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-user-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Recipient Name</p>
                    <p className="text-sm font-semibold text-gray-900">{eventData.recipientName}</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-calendar-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Event Date</p>
                    <p className="text-sm font-semibold text-gray-900">{eventData.eventDate}</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-time-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Delivery Time</p>
                    <p className="text-sm font-bold text-[#5B2EFF]">{eventData.deliveryTime}</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-whatsapp-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Recipient Type</p>
                    <p className="text-sm font-semibold text-gray-900">{eventData.recipientType}</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-group-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Number of Groups</p>
                    <p className="text-sm font-semibold text-gray-900">{eventData.numberOfGroups} Groups</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0 mt-0.5">
                    <i className="ri-chat-quote-line text-lg text-[#5B2EFF]"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 mb-1">Message Preview</p>
                    <p className="text-sm text-gray-700 leading-relaxed break-words">
                      {displayMessage}
                      {truncated && (
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className="ml-1 text-[#5B2EFF] font-semibold text-xs whitespace-nowrap cursor-pointer"
                        >
                          {expanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ── 3. Action Required Notice ── */}
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-amber-400 rounded-lg flex-shrink-0">
                  <i className="ri-alert-line text-lg text-white"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-900 mb-1">Action Required</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    To ensure your message is delivered, please <span className="font-semibold">add the WishHapp bot to your WhatsApp group</span>.
                    If the bot is not added, the message may not be delivered.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 4. What Happens Next ── */}
            <div className="rounded-xl bg-[#F9FAFB] border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-information-line text-lg text-[#5B2EFF]"></i>
                </div>
                <p className="text-sm font-bold text-gray-900">What Happens Next</p>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-send-plane-2-line text-sm text-[#5B2EFF]"></i>
                  </div>
                  <p className="text-sm text-gray-600">The bot will send your message at the scheduled time.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-logout-box-r-line text-sm text-[#5B2EFF]"></i>
                  </div>
                  <p className="text-sm text-gray-600">The bot will automatically exit the group after delivery (within 24 hours).</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-chat-check-line text-sm text-[#5B2EFF]"></i>
                  </div>
                  <p className="text-sm text-gray-600">You may receive a follow-up message asking about your experience.</p>
                </li>
              </ul>
            </div>

            {/* ── 5. Renewal Reminder ── */}
            <div className="rounded-xl bg-purple-50 border border-purple-100 p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-[#5B2EFF] rounded-lg flex-shrink-0">
                  <i className="ri-calendar-check-line text-lg text-white"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-900 mb-1">Renewal Reminder</p>
                  <p className="text-sm text-purple-700 leading-relaxed">
                    You will receive a reminder approximately <span className="font-semibold">7 days before next year's event date</span> to schedule this wish again.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 6. Done CTA ── */}
            <button
              onClick={handleDone}
              className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#5B2EFF] to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
            >
              Done
            </button>

          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-shield-check-line text-green-500"></i>
            </div>
            <span>Payment secured by Razorpay · WishHapp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
