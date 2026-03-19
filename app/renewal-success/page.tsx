'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RenewalSuccessPage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);
  const [mediaLoaded, setMediaLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    const mediaTimer = setTimeout(() => {
      setMediaLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(mediaTimer);
    };
  }, []);

  const handleDone = () => {
    router.push('/');
  };

  const eventData = {
    name: 'Rahul Sharma',
    eventDate: 'March 15, 2025',
    deliveryTime: '12:00 AM IST',
    mediaType: 'image',
    mediaThumbnail: 'https://readdy.ai/api/search-image?query=beautiful%20birthday%20celebration%20cake%20with%20candles%20glowing%20warm%20lighting%20simple%20clean%20background%20festive%20atmosphere%20joyful%20moment&width=120&height=120&seq=renewal-success-media-thumb-001&orientation=squarish',
    groupStatus: 'Confirmed'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 relative overflow-hidden">
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

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"></div>
                <i className="ri-checkbox-circle-fill text-4xl text-green-600 relative z-10"></i>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              You're All Set for Next Year!
            </h1>
            <p className="text-lg text-gray-600">
              Your celebration has been locked again for <span className="font-semibold text-purple-600">₹9</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 rounded-xl p-6 mb-6 border border-purple-100">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Renewal Summary
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="ri-user-line text-xl text-purple-600"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="text-base font-semibold text-gray-900 truncate">{eventData.name}</p>
                </div>
              </div>

              <div className="h-px bg-purple-200"></div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                  <i className="ri-calendar-line text-xl text-white"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Event Date</p>
                  <p className="text-base font-bold text-purple-600">{eventData.eventDate}</p>
                </div>
              </div>

              <div className="h-px bg-purple-200"></div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="ri-time-line text-xl text-purple-600"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Delivery Time</p>
                  <p className="text-base font-semibold text-purple-600">{eventData.deliveryTime}</p>
                </div>
              </div>

              <div className="h-px bg-purple-200"></div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                  {mediaLoaded ? (
                    eventData.mediaType === 'image' ? (
                      <img 
                        src={eventData.mediaThumbnail} 
                        alt="Media preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <i className="ri-video-line text-xl text-purple-600"></i>
                    )
                  ) : (
                    <div className="w-full h-full bg-purple-200 animate-pulse"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Media</p>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-gray-900">
                      {eventData.mediaType === 'image' ? 'Image' : 'Video'} saved
                    </p>
                    <i className="ri-checkbox-circle-fill text-green-600 w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>

              <div className="h-px bg-purple-200"></div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="ri-whatsapp-line text-xl text-purple-600"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">WhatsApp Group</p>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-gray-900">{eventData.groupStatus}</p>
                    <i className="ri-checkbox-circle-fill text-green-600 w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 mb-6 border-2 border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 bg-green-600 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-lg text-white"></i>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-900 leading-relaxed">
                  We'll deliver your message at midnight, just like before.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleDone}
            className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all whitespace-nowrap"
          >
            Done
          </button>
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <i className="ri-shield-check-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
            <span>Your renewal is securely scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
}