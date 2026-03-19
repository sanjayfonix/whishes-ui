'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const PRICING_SLABS = [
  { label: '1 Group', min: 1, max: 1, price: 49, tag: 'Solo' },
  { label: '2–5 Groups', min: 2, max: 5, price: 99, tag: 'Family Pack', popular: true },
  { label: '6–10 Groups', min: 6, max: 10, price: 199, tag: 'Celebration Pack' },
];

function getApplicableSlab(groups: number) {
  return PRICING_SLABS.find(s => groups >= s.min && groups <= s.max) || PRICING_SLABS[0];
}

function getTimerUrgency(days: number) {
  if (days <= 7) return { color: 'red', bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', dot: 'bg-red-500', label: 'Urgent — event is very close!' };
  if (days <= 14) return { color: 'amber', bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', dot: 'bg-amber-500', label: 'Renew soon to stay on schedule' };
  return { color: 'green', bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', dot: 'bg-green-500', label: 'You still have time — lock it in' };
}

function RenewalCheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);

  const eventData = {
    recipientName: searchParams.get('recipientName') || 'Rahul Sharma',
    eventDate: searchParams.get('eventDate') || 'April 10, 2026',
    deliveryTime: searchParams.get('deliveryTime') || '12:00 AM',
    groupCount: parseInt(searchParams.get('groupCount') || '3'),
    isRenewal: true,
    originalYear: '2025',
  };

  const today = new Date('2026-03-17');
  const eventDateObj = new Date('2026-04-10');
  const daysUntilEvent = Math.max(0, Math.round((eventDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  const slab = getApplicableSlab(eventData.groupCount);
  const urgency = getTimerUrgency(daysUntilEvent);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/processing');
    } catch {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/renew" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors cursor-pointer">
            <i className="ri-arrow-left-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span className="font-medium">Back</span>
          </Link>
          <img src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" alt="WishHapp" className="h-10 w-auto" />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full border border-purple-200 mb-4">
            <i className="ri-repeat-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-sm font-semibold text-purple-700">Renewal Payment</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Confirm Renewal</h1>
          <p className="text-lg text-gray-600">Review your plan and complete payment to secure next year.</p>
        </div>

        {/* Renewal Timer Banner */}
        <div className={`rounded-2xl border-2 ${urgency.bg} ${urgency.border} p-5 mb-6`}>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16">
                <div className={`absolute inset-0 rounded-full ${urgency.bg} border-4 ${urgency.border} flex items-center justify-center`}>
                  <span className={`text-xl font-extrabold ${urgency.text}`}>{daysUntilEvent}</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className={`text-base font-bold ${urgency.text} mb-0.5`}>
                {daysUntilEvent === 1 ? '1 day' : `${daysUntilEvent} days`} until the event
              </p>
              <p className={`text-sm ${urgency.text} opacity-80`}>{urgency.label}</p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">{eventData.recipientName}'s</span> event is on <span className="font-semibold">{eventData.eventDate}</span>
              </p>
            </div>
            <div className={`flex-shrink-0 w-3 h-3 rounded-full ${urgency.dot} animate-pulse`}></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">

          {/* Event Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <i className="ri-file-list-3-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              Renewal Summary
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-50/30 rounded-xl border border-purple-100 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <i className="ri-user-line text-purple-600 text-base w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-sm text-gray-500">Recipient</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{eventData.recipientName}</span>
              </div>
              <div className="h-px bg-purple-100"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <i className="ri-calendar-line text-purple-600 text-base w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-sm text-gray-500">Event Date</span>
                </div>
                <span className="text-sm font-semibold text-purple-700">{eventData.eventDate}</span>
              </div>
              <div className="h-px bg-purple-100"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <i className="ri-time-line text-purple-600 text-base w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-sm text-gray-500">Delivery Time</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{eventData.deliveryTime}</span>
              </div>
              <div className="h-px bg-purple-100"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <i className="ri-team-line text-purple-600 text-base w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-sm text-gray-500">Groups</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{eventData.groupCount} {eventData.groupCount === 1 ? 'Group' : 'Groups'}</span>
              </div>
            </div>
          </div>

          {/* Pricing Slabs */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <i className="ri-price-tag-3-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              Renewal Pricing
            </h2>
            <p className="text-sm text-gray-500 mb-5">Your plan is based on the number of groups from your original booking.</p>

            <div className="space-y-3">
              {PRICING_SLABS.map((s) => {
                const isActive = s.min === slab.min;
                return (
                  <div
                    key={s.label}
                    className={`relative rounded-xl border-2 p-4 transition-all ${
                      isActive
                        ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-purple-50/40 shadow-md'
                        : 'border-gray-200 bg-white opacity-60'
                    }`}
                  >
                    {s.popular && isActive && (
                      <div className="absolute -top-2.5 left-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full">
                          <i className="ri-star-fill w-3 h-3 flex items-center justify-center"></i>
                          Your Plan
                        </span>
                      </div>
                    )}
                    {isActive && !s.popular && (
                      <div className="absolute -top-2.5 left-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full">
                          <i className="ri-check-line w-3 h-3 flex items-center justify-center"></i>
                          Your Plan
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? 'bg-purple-600' : 'bg-gray-100'}`}>
                          <i className={`ri-group-line text-base w-4 h-4 flex items-center justify-center ${isActive ? 'text-white' : 'text-gray-400'}`}></i>
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{s.label}</p>
                          <p className={`text-xs ${isActive ? 'text-purple-600 font-medium' : 'text-gray-400'}`}>{s.tag}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-extrabold ${isActive ? 'text-purple-600' : 'text-gray-400'}`}>₹{s.price}</p>
                        <p className={`text-xs ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>one-time</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-start gap-2 px-3 py-2.5 bg-blue-50 rounded-lg border border-blue-100">
              <i className="ri-information-line text-blue-500 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <p className="text-xs text-blue-700">
                Renewal price is based on your original group count. You cannot change the group count during renewal.
              </p>
            </div>
          </div>

          {/* Pay CTA */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border-2 border-purple-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-700 font-medium">Renewal Plan</span>
              <span className="text-sm font-semibold text-purple-700">{slab.tag} · {eventData.groupCount} {eventData.groupCount === 1 ? 'Group' : 'Groups'}</span>
            </div>
            <div className="flex items-end justify-between mb-5">
              <span className="text-base text-gray-500">Total Payable</span>
              <div className="text-right">
                <p className="text-5xl font-extrabold text-purple-600">₹{slab.price}</p>
                <p className="text-xs text-gray-500 mt-0.5">One-time · No subscription</p>
              </div>
            </div>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all whitespace-nowrap ${
                isProcessing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                  Processing...
                </span>
              ) : (
                `Renew Now for ₹${slab.price}`
              )}
            </button>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <i className="ri-shield-check-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
              <span className="font-medium">Secure payments powered by Razorpay</span>
            </div>
            <Link href="/" className="block text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
              Not now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RenewalCheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <i className="ri-loader-4-line animate-spin text-2xl w-6 h-6 flex items-center justify-center"></i>
          <span>Loading renewal details...</span>
        </div>
      </div>
    }>
      <RenewalCheckoutClient />
    </Suspense>
  );
}
