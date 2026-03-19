'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RenewPage() {
  const router = useRouter();
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newMedia, setNewMedia] = useState<File | null>(null);
  const [newMediaPreview, setNewMediaPreview] = useState<string | null>(null);
  const [newMediaType, setNewMediaType] = useState<'image' | 'video' | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [wishMessage, setWishMessage] = useState('Happy Birthday! Wishing you an amazing year ahead filled with joy and success! 🎉');
  const [wishMessageError, setWishMessageError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const mediaTimer = setTimeout(() => setMediaLoaded(true), 500);
    return () => clearTimeout(mediaTimer);
  }, []);

  const eventData = {
    name: 'Rahul Sharma',
    originalDate: 'March 15, 2024',
    nextDate: 'March 15, 2025',
    deliveryTime: '12:00 AM IST',
    mediaType: 'image',
    mediaThumbnail: 'https://readdy.ai/api/search-image?query=beautiful%20birthday%20celebration%20cake%20with%20candles%20glowing%20warm%20lighting%20simple%20clean%20background%20festive%20atmosphere%20joyful%20moment&width=120&height=120&seq=renew-media-thumb-001&orientation=squarish',
    originalMessage: 'Happy Birthday! Wishing you an amazing year ahead filled with joy and success! 🎉'
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMediaError(null);

    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      setMediaError('Only image or video files are allowed.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMediaError('File size must be 5MB or less.');
      return;
    }

    const url = URL.createObjectURL(file);
    setNewMedia(file);
    setNewMediaPreview(url);
    setNewMediaType(isImage ? 'image' : 'video');
  };

  const handleRemoveNew = () => {
    setNewMedia(null);
    setNewMediaPreview(null);
    setNewMediaType(null);
    setMediaError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleRenew = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      router.push('/renew/checkout');
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex justify-center">
          <img
            src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png"
            alt="WishHapp"
            className="h-10 w-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full border border-purple-200">
              <i className="ri-repeat-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
              <span className="text-sm font-semibold text-purple-700">Renew for Next Year</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Lock This Date Again</h1>
            <p className="text-lg text-gray-600">Secure your celebration for next year at the same ₹9.</p>
          </div>

          {/* Event Details Card */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 rounded-xl p-6 mb-6 border border-purple-100">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Event Details</h2>
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
                <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="ri-calendar-check-line text-xl text-purple-600"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Original Event Date</p>
                  <p className="text-base font-semibold text-gray-900">{eventData.originalDate}</p>
                </div>
              </div>
              <div className="h-px bg-purple-200"></div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                  <i className="ri-calendar-line text-xl text-white"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Next Event Date</p>
                  <p className="text-base font-bold text-purple-600">{eventData.nextDate}</p>
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
            </div>
          </div>

          {/* Update Your Celebration Section */}
          <div className="bg-gradient-to-br from-purple-50/40 to-white rounded-xl p-6 mb-6 border-2 border-purple-100">
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Update Your Celebration</h2>
              <span className="text-xs text-gray-400 font-normal normal-case tracking-normal">(Optional)</span>
            </div>

            {/* Edit Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Edit Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={wishMessage}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length <= 500) {
                      setWishMessage(val);
                      setWishMessageError('');
                    } else {
                      setWishMessageError('Message cannot exceed 500 characters.');
                    }
                  }}
                  placeholder="Write your birthday or celebration message here…"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none resize-none text-sm text-gray-800 placeholder-gray-400 transition-all"
                />
                <div className="flex items-center justify-between mt-1.5 px-1">
                  {wishMessageError ? (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
                      {wishMessageError}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500">This message will be sent with your media at midnight.</p>
                  )}
                  <span className={`text-xs font-medium ${wishMessage.length >= 450 ? 'text-amber-500' : 'text-gray-400'}`}>
                    {wishMessage.length}/500
                  </span>
                </div>
              </div>
            </div>

            {/* Replace Media Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Replace Media
              </label>

              {!newMedia ? (
                <div className="border-2 border-dashed border-purple-200 rounded-xl p-4 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border border-purple-100 shadow-sm">
                      {mediaLoaded ? (
                        <img src={eventData.mediaThumbnail} alt="Current media" className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-purple-200 animate-pulse"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700 mb-0.5">Current media</p>
                      <p className="text-xs text-gray-500">Same file will be used unless replaced.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-purple-300 text-purple-600 text-sm font-medium hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-upload-2-line w-4 h-4 flex items-center justify-center"></i>
                      Replace File
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-purple-300 rounded-xl p-4 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-purple-100 shadow-sm bg-gray-100 flex items-center justify-center">
                      {newMediaType === 'image' && newMediaPreview ? (
                        <img src={newMediaPreview} alt="New media preview" className="w-full h-full object-cover object-top" />
                      ) : newMediaType === 'video' ? (
                        <i className="ri-video-line text-2xl text-purple-500"></i>
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          <i className="ri-checkbox-circle-fill w-3 h-3 flex items-center justify-center"></i>
                          New file selected
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 truncate">{newMedia?.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {newMediaType === 'image' ? 'Image' : 'Video'} · {newMedia ? formatFileSize(newMedia.size) : ''}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-purple-300 text-purple-600 text-xs font-medium hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-refresh-line w-3 h-3 flex items-center justify-center"></i>
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={handleRemoveNew}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 text-xs font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-close-line w-3 h-3 flex items-center justify-center"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {mediaError && (
                <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <i className="ri-error-warning-line text-red-500 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                  <p className="text-sm text-red-600">{mediaError}</p>
                </div>
              )}

              <p className="mt-2 text-xs text-gray-500">
                Supported formats: JPG, PNG, MP4 up to 5MB.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 mb-6 border-2 border-purple-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <i className="ri-price-tag-3-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
              Renewal Pricing
            </h3>
            <div className="space-y-2.5 mb-4">
              {[
                { label: '1 Group', price: '₹49' },
                { label: '2–5 Groups', price: '₹99', highlight: true },
                { label: '6–10 Groups', price: '₹199' },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
                    row.highlight
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {row.highlight && (
                      <i className="ri-map-pin-2-fill text-white text-xs w-3 h-3 flex items-center justify-center"></i>
                    )}
                    <span className={`text-sm font-medium ${row.highlight ? 'text-white' : 'text-gray-600'}`}>{row.label}</span>
                    {row.highlight && (
                      <span className="text-xs bg-white/20 text-white px-1.5 py-0.5 rounded-full font-medium">Your plan</span>
                    )}
                  </div>
                  <span className={`text-base font-extrabold ${row.highlight ? 'text-white' : 'text-purple-600'}`}>{row.price}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 border-t border-gray-200 pt-3">
              <i className="ri-checkbox-circle-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
              <span>One-time payment · No subscription</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRenew}
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all whitespace-nowrap mb-4 ${
              isSubmitting
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                Processing...
              </span>
            ) : (
              'Continue to Payment'
            )}
          </button>

          <div className="text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
              Not now
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <i className="ri-shield-check-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
            <span>Secure payment powered by Razorpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}