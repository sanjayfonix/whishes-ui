'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function BotSetupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const botNumber = '+91 98765 43210';
  
  const eventData = {
    name: searchParams.get('name') || 'Rahul',
    date: searchParams.get('date') || '10 July',
    time: searchParams.get('time') || '9:00 AM',
    groups: searchParams.get('groups') || '2'
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(botNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    router.push('/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="mb-6 flex justify-center">
          <img 
            src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" 
            alt="WishHapp" 
            className="h-10 w-auto"
          />
        </div>

        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
              <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <span className="hidden sm:inline">Details</span>
          </div>
          <div className="w-8 h-px bg-green-600"></div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
              <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <span className="hidden sm:inline">Checkout</span>
          </div>
          <div className="w-8 h-px bg-green-600"></div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
              <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <span className="hidden sm:inline">Payment</span>
          </div>
          <div className="w-8 h-px bg-purple-600"></div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">4</span>
            </div>
            <span className="hidden sm:inline font-semibold text-purple-600">Add Bot</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"></div>
                <i className="ri-checkbox-circle-fill text-4xl text-green-600 relative z-10"></i>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your wish has been scheduled.<br />
              Now add the WishHapp bot to your WhatsApp group to complete setup.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 mb-6 border-2 border-purple-200">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold text-purple-900 uppercase tracking-wide mb-3">
                WishHapp Bot Number
              </p>
              <div className="text-3xl font-bold text-purple-600 mb-4 tracking-wide">
                {botNumber}
              </div>
              <button
                onClick={handleCopyNumber}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} text-lg w-5 h-5 flex items-center justify-center`}></i>
                {copied ? 'Copied!' : 'Copy Number'}
              </button>
            </div>
            <p className="text-sm text-purple-800 text-center leading-relaxed">
              Save this number in your phone contacts before adding it to your group.
            </p>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
            >
              <span className="font-semibold text-gray-900">Step-by-Step Instructions</span>
              <i className={`ri-arrow-${showInstructions ? 'up' : 'down'}-s-line text-xl text-gray-600 w-6 h-6 flex items-center justify-center`}></i>
            </button>

            {showInstructions && (
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-contacts-line text-xl text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      Step 1: Save the Number
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Save the WishHapp bot number in your phone contacts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-xl text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      Step 2: Open Your Group
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Open your WhatsApp group where you want the wish to be sent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-add-line text-xl text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      Step 3: Add the Bot
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Tap Add Participants and add the WishHapp bot to your group.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-send-plane-fill text-xl text-green-600 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      Step 4: Automatic Delivery
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The bot will automatically detect your schedule and send the message at the selected time.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 rounded-xl p-5 mb-6 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 bg-yellow-600 rounded-lg flex items-center justify-center">
                <i className="ri-information-line text-lg text-white w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-yellow-900 mb-1">
                  Important
                </h3>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  The bot must remain in the group until the wish is delivered. After the wish is sent, the bot will automatically exit the group within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Your Scheduled Wish
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Recipient</p>
                <p className="text-sm font-semibold text-gray-900">{eventData.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Date</p>
                <p className="text-sm font-semibold text-gray-900">{eventData.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Time</p>
                <p className="text-sm font-semibold text-gray-900">{eventData.time}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Groups</p>
                <p className="text-sm font-semibold text-gray-900">{eventData.groups}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all whitespace-nowrap"
          >
            Continue
          </button>
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <i className="ri-customer-service-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
            <span>Need help? Contact support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BotSetupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    }>
      <BotSetupContent />
    </Suspense>
  );
}