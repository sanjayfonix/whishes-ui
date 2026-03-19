'use client';

import { useRouter } from 'next/navigation';

export default function RenewalFailedPage() {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/processing');
  };

  const handleNotNow = () => {
    router.push('/');
  };

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
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <i className="ri-error-warning-line text-4xl text-red-500"></i>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Renewal Payment Failed
          </h1>

          <p className="text-base text-gray-600 mb-2">
            Your ₹9 renewal could not be completed.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Your original event is safe. You can try again.
          </p>

          <div className="mb-8 px-4 py-3 bg-red-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-700">Reason:</span> Payment was declined or interrupted.
            </p>
          </div>

          <button
            onClick={handleRetry}
            className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all whitespace-nowrap mb-4 cursor-pointer"
          >
            Retry Payment
          </button>

          <button
            onClick={handleNotNow}
            className="w-full py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Not Now
          </button>
        </div>

        <div className="mt-6 text-center px-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            Need help? Contact us for support.
          </p>
        </div>
      </div>
    </div>
  );
}