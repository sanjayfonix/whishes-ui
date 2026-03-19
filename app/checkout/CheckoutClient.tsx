'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const BUNDLE_PACKS = [
  { name: 'Family Pack', groups: 5, price: 99 },
  { name: 'Celebration Pack', groups: 10, price: 199 }
];

export default function CheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [eventData, setEventData] = useState({
    recipientName: '',
    recipientType: 'group',
    eventDate: '',
    deliveryTime: '',
    messagePreview: '',
    numberOfGroups: 1
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [upsellAccepted, setUpsellAccepted] = useState(false);

  useEffect(() => {
    const recipientName = searchParams.get('recipientName') || 'Guest';
    const recipientType = searchParams.get('recipientType') || 'group';
    const eventDate = searchParams.get('eventDate') || '';
    const deliveryTime = searchParams.get('deliveryTime') || '00:00';
    const messagePreview = searchParams.get('messagePreview') || 'Your wish message';
    const numberOfGroups = parseInt(searchParams.get('numberOfGroups') || '1');

    setEventData({ recipientName, recipientType, eventDate, deliveryTime, messagePreview, numberOfGroups });
  }, [searchParams]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return '';
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    return `${hour % 12 || 12}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
  };

  const pricePerGroup = 9;
  const totalPrice = eventData.numberOfGroups * pricePerGroup;

  const getSuggestedPack = () => {
    if (upsellAccepted) return null;
    if (eventData.numberOfGroups >= 1 && eventData.numberOfGroups < 5) return BUNDLE_PACKS[0];
    if (eventData.numberOfGroups >= 5 && eventData.numberOfGroups < 10) return BUNDLE_PACKS[1];
    return null;
  };

  const suggestedPack = getSuggestedPack();

  const handleUpgrade = (pack: typeof BUNDLE_PACKS[0]) => {
    setEventData(prev => ({ ...prev, numberOfGroups: pack.groups }));
    setUpsellAccepted(true);
  };

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
        
        <div className="mb-8 flex items-center justify-between">
          <Link href="/book" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <i className="ri-arrow-left-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span className="font-medium">Back</span>
          </Link>
          <img src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" alt="WishHapp" className="h-10 w-auto" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Review & Checkout</h1>
          <p className="text-lg text-gray-600">Confirm your wish details and complete payment</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          
          {/* Event Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="ri-file-list-3-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              Event Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Recipient Name</p>
                  <p className="text-base font-semibold text-gray-900">{eventData.recipientName}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-calendar-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Delivery Date</p>
                  <p className="text-base font-semibold text-gray-900">{formatDate(eventData.eventDate)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Delivery Time</p>
                  <p className="text-base font-semibold text-gray-900">{formatTime(eventData.deliveryTime)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${eventData.recipientType === 'group' ? 'ri-group-line' : 'ri-user-heart-line'} text-purple-600 text-xl w-5 h-5 flex items-center justify-center`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Recipient Type</p>
                  <p className="text-base font-semibold text-gray-900">
                    {eventData.recipientType === 'group' ? 'WhatsApp Group' : 'Personal Chat'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">
                    {eventData.recipientType === 'group' ? 'Number of Groups' : 'Number of Recipients'}
                  </p>
                  <p className="text-base font-semibold text-gray-900">{eventData.numberOfGroups}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-message-3-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">Message Preview</p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "{eventData.messagePreview.length > 150
                          ? eventData.messagePreview.substring(0, 150) + '...'
                          : eventData.messagePreview}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="ri-price-tag-3-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              Pricing Summary
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  {eventData.recipientType === 'group' ? 'Groups' : 'Recipients'} Selected:
                </span>
                <span className="text-lg font-semibold text-gray-900">{eventData.numberOfGroups}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  Price per {eventData.recipientType === 'group' ? 'group' : 'recipient'}:
                </span>
                <span className="text-lg font-semibold text-gray-900">₹{pricePerGroup}</span>
              </div>
              <div className="pt-4 border-t-2 border-gray-200 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Total Price:</span>
                <span className="text-3xl font-extrabold text-purple-600">₹{totalPrice}</span>
              </div>

              {/* Compact Inline Upsell */}
              {suggestedPack && (
                <div className="mt-3 rounded-xl border border-amber-300 bg-amber-50 overflow-hidden">
                  <div className="px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-flashlight-fill text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Upgrade to {suggestedPack.name}
                          <span className="ml-2 text-purple-700 font-extrabold">₹{suggestedPack.price}</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">Up to {suggestedPack.groups} Groups — save more per group</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleUpgrade(suggestedPack)}
                      className="flex-shrink-0 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
              )}

              {upsellAccepted && (
                <div className="mt-2 flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2 border border-green-200">
                  <i className="ri-checkbox-circle-fill w-4 h-4 flex items-center justify-center"></i>
                  <span>Upgraded! You now get up to {eventData.numberOfGroups} groups.</span>
                </div>
              )}
            </div>
          </div>

          {/* Renewal Info */}
          <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-information-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
              Renewal Pricing
            </h3>
            <p className="text-sm text-gray-700 mb-4">After 1 year, renew your wishes with flexible pricing:</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">1 Group</span>
                <span className="font-semibold text-gray-900">₹49</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">2 to 5 Groups</span>
                <span className="font-semibold text-gray-900">₹99</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">6 to 10 Groups</span>
                <span className="font-semibold text-gray-900">₹199</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4 flex items-center gap-1">
              <i className="ri-calendar-check-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
              Renewal reminders will be sent 7 days before the next year's event date.
            </p>
          </div>

          {/* Pay CTA */}
          <div className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border-2 border-purple-200">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">Total Payable</p>
              <p className="text-5xl font-extrabold text-purple-600">₹{totalPrice}</p>
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
                'Proceed to Payment'
              )}
            </button>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <i className="ri-shield-check-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
              <span className="font-medium">Secure payments powered by Razorpay</span>
            </div>
            <p className="text-xs text-gray-500">No subscription required</p>
          </div>
        </div>
      </div>
    </div>
  );
}