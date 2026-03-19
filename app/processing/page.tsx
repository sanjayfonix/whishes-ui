'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProcessingPage() {
  const router = useRouter();
  const [showSlowMessage, setShowSlowMessage] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const slowTimer = setTimeout(() => {
      setShowSlowMessage(true);
    }, 5000);

    const redirectTimer = setTimeout(() => {
      setIsRedirecting(true);
      setTimeout(() => {
        router.push('/bot-setup');
      }, 1500);
    }, 8000);

    return () => {
      clearTimeout(slowTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <img 
            src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" 
            alt="WishHapp" 
            className="h-10 w-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <div className="mb-6 flex justify-center">
            {isRedirecting ? (
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <i className="ri-checkbox-circle-fill text-4xl text-green-600"></i>
              </div>
            ) : (
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-purple-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-secure-payment-line text-2xl text-purple-600"></i>
                </div>
              </div>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {isRedirecting ? 'Payment Confirmed!' : 'Processing Your Payment…'}
          </h1>

          <p className="text-base text-gray-600 mb-6">
            {isRedirecting 
              ? 'Redirecting you to confirmation page…'
              : showSlowMessage 
                ? 'Still confirming your payment…'
                : 'Please wait while we securely confirm your ₹9 payment.'
            }
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
            <i className="ri-lock-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-sm text-gray-600">Secured by Razorpay</span>
          </div>
        </div>

        <div className="mt-6 text-center px-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            Do not refresh or close this page.<br />
            You will be redirected automatically once payment is confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}