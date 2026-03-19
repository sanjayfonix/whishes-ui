'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DEFAULT_WISHES = [
  {
    id: 1,
    label: "🎂 Birthday Classic",
    message: "Happy Birthday! Wishing you a fantastic day full of happiness, laughter, and all the things you love. May this year bring you endless joy! 🎉"
  },
  {
    id: 2,
    label: "🌟 Birthday Warm",
    message: "Wishing you a very Happy Birthday! May your day be as wonderful and special as you are. Here's to another amazing year ahead! 🥳"
  },
  {
    id: 3,
    label: "💍 Anniversary",
    message: "Happy Anniversary! Wishing you both a lifetime of love, laughter, and beautiful memories together. May your bond grow stronger every year! 💕"
  },
  {
    id: 4,
    label: "🎓 Achievement",
    message: "Congratulations on your incredible achievement! Your hard work and dedication have truly paid off. Wishing you continued success in everything you do! 🏆"
  },
  {
    id: 5,
    label: "🎊 Celebration",
    message: "Sending you warm wishes on this special occasion! May this celebration bring you joy, happiness, and wonderful moments to cherish forever. 🎈"
  },
  {
    id: 6,
    label: "🌸 General Wish",
    message: "Thinking of you on this special day and sending lots of love and good wishes your way. Hope it's everything you dreamed of and more! 💫"
  }
];

export default function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientType: 'group' as 'group' | 'personal',
    eventDate: '',
    deliveryTime: '00:00',
    messageType: 'default' as 'default' | 'custom',
    customMessage: '',
    numberOfGroups: 1,
    media: null as File | null
  });

  const [selectedDefaultMessage, setSelectedDefaultMessage] = useState<number>(1);

  const [errors, setErrors] = useState({
    recipientName: '',
    eventDate: '',
    deliveryTime: '',
    customMessage: '',
    media: ''
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: any) => {
    let error = '';
    switch (name) {
      case 'recipientName':
        if (!value.trim()) error = 'Recipient name is required';
        break;
      case 'eventDate':
        if (!value) {
          error = 'Event date is required';
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selectedDate < today) error = 'Event date must be in the future';
        }
        break;
      case 'deliveryTime':
        if (!value) error = 'Delivery time is required';
        break;
      case 'customMessage':
        if (formData.messageType === 'custom' && !value.trim()) {
          error = 'Custom message is required';
        } else if (value.length > 500) {
          error = 'Message must be 500 characters or less';
        }
        break;
      case 'media':
        if (!value) error = 'Media file is required';
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) validateField(name, value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = ['image/jpeg', 'image/png', 'video/mp4'];
    const maxSize = 5 * 1024 * 1024;
    if (!validTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, media: 'Only JPG, PNG, and MP4 files are supported' }));
      return;
    }
    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, media: 'File size must be less than 5MB' }));
      return;
    }
    setIsUploading(true);
    setUploadProgress(0);
    setErrors(prev => ({ ...prev, media: '' }));
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setIsUploading(false); return 100; }
        return prev + 10;
      });
    }, 100);
    setFormData(prev => ({ ...prev, media: file }));
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange({ target: { files: [file] } } as any);
  };

  const isFormValid = () => {
    const baseValid =
      formData.recipientName.trim() !== '' &&
      formData.eventDate !== '' &&
      formData.deliveryTime !== '' &&
      formData.media !== null &&
      Object.values(errors).every(error => error === '');
    if (formData.messageType === 'custom') {
      return baseValid && formData.customMessage.trim() !== '' && formData.customMessage.length <= 500;
    }
    return baseValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameValid = validateField('recipientName', formData.recipientName);
    const dateValid = validateField('eventDate', formData.eventDate);
    const timeValid = validateField('deliveryTime', formData.deliveryTime);
    const messageValid = formData.messageType === 'custom' ? validateField('customMessage', formData.customMessage) : true;
    const mediaValid = validateField('media', formData.media);
    if (nameValid && dateValid && timeValid && messageValid && mediaValid) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        router.push('/processing');
      } catch {
        setIsSubmitting(false);
      }
    }
  };

  const removeFile = () => { setFormData(prev => ({ ...prev, media: null })); setUploadProgress(0); };

  const getTodayDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

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

  const estimatedPrice = formData.numberOfGroups * 9;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <i className="ri-arrow-left-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span className="font-medium">Back</span>
          </Link>
          <img src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" alt="WishHapp" className="h-10 w-auto" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Schedule Your Wish</h1>
          <p className="text-lg text-gray-600">Set up your wish and choose where it will be delivered.</p>
        </div>

        <form id="booking-form" onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="space-y-6">

            {/* Recipient Name */}
            <div>
              <label htmlFor="recipientName" className="block text-sm font-semibold text-gray-900 mb-2">Recipient Name</label>
              <input
                type="text" id="recipientName" name="recipientName"
                value={formData.recipientName} onChange={handleInputChange}
                onBlur={(e) => validateField('recipientName', e.target.value)}
                placeholder="Enter the name of the person being wished"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none text-sm ${errors.recipientName ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'}`}
              />
              {errors.recipientName && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>{errors.recipientName}
                </p>
              )}
            </div>

            {/* Recipient Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Where should the wish be sent?</label>
              <div className="grid grid-cols-2 gap-3">
                {(['group', 'personal'] as const).map(type => (
                  <button key={type} type="button"
                    onClick={() => setFormData(prev => ({ ...prev, recipientType: type }))}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all whitespace-nowrap ${formData.recipientType === type ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'}`}>
                    <i className={`${type === 'group' ? 'ri-group-line' : 'ri-user-line'} text-xl w-5 h-5 flex items-center justify-center mx-auto mb-1`}></i>
                    {type === 'group' ? 'WhatsApp Group' : 'Personal Chat'}
                  </button>
                ))}
              </div>
              {formData.recipientType === 'personal' && (
                <p className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                  <i className="ri-information-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
                  The message will be delivered directly to the selected contact.
                </p>
              )}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-900 mb-2">Event Date</label>
                <input type="date" id="eventDate" name="eventDate" value={formData.eventDate}
                  onChange={handleInputChange} onBlur={(e) => validateField('eventDate', e.target.value)}
                  min={getTodayDate()}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.eventDate ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'}`}
                />
                <p className="mt-2 text-sm text-gray-500">Choose the date when the wish should be delivered</p>
                {errors.eventDate && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>{errors.eventDate}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="deliveryTime" className="block text-sm font-semibold text-gray-900 mb-2">Delivery Time</label>
                <input type="time" id="deliveryTime" name="deliveryTime" value={formData.deliveryTime}
                  onChange={handleInputChange} onBlur={(e) => validateField('deliveryTime', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.deliveryTime ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'}`}
                />
                <p className="mt-2 text-sm text-gray-500">Select the exact time the message should be sent</p>
                {errors.deliveryTime && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>{errors.deliveryTime}
                  </p>
                )}
              </div>
            </div>

            {/* Message Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Message Type</label>
              <div className="space-y-3">

                {/* Default Option */}
                <button type="button"
                  onClick={() => setFormData(prev => ({ ...prev, messageType: 'default', customMessage: '' }))}
                  className={`w-full px-4 py-4 rounded-xl border-2 text-left transition-all ${formData.messageType === 'default' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white hover:border-purple-300'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.messageType === 'default' ? 'border-purple-600 bg-purple-600' : 'border-gray-300'}`}>
                      {formData.messageType === 'default' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <p className="font-semibold text-gray-900">Default Wish Message</p>
                  </div>
                </button>

                {/* Default Message Selection Grid */}
                {formData.messageType === 'default' && (
                  <div className="mt-1 p-4 bg-purple-50/60 rounded-xl border border-purple-100">
                    <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-3">Choose a wish template</p>
                    <div className="relative">
                      <select
                        value={selectedDefaultMessage}
                        onChange={(e) => setSelectedDefaultMessage(Number(e.target.value))}
                        className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-purple-200 bg-white text-gray-900 text-sm font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none appearance-none cursor-pointer transition-all"
                      >
                        {DEFAULT_WISHES.map(wish => (
                          <option key={wish.id} value={wish.id}>
                            {wish.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <i className="ri-arrow-down-s-line text-purple-500 text-xl w-5 h-5 flex items-center justify-center"></i>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-white rounded-xl border border-purple-100">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "{DEFAULT_WISHES.find(w => w.id === selectedDefaultMessage)?.message}"
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                      <i className="ri-information-line text-purple-500 w-4 h-4 flex items-center justify-center"></i>
                      Selected template will be sent with your media at the scheduled time.
                    </p>
                  </div>
                )}

                {/* Custom Option */}
                <button type="button"
                  onClick={() => setFormData(prev => ({ ...prev, messageType: 'custom' }))}
                  className={`w-full px-4 py-4 rounded-xl border-2 text-left transition-all ${formData.messageType === 'custom' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white hover:border-purple-300'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${formData.messageType === 'custom' ? 'border-purple-600 bg-purple-600' : 'border-gray-300'}`}>
                      {formData.messageType === 'custom' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Custom Message</p>
                      <p className="text-sm text-gray-600">Write your own personalized wish</p>
                    </div>
                  </div>
                </button>
              </div>

              {formData.messageType === 'custom' && (
                <div className="mt-4">
                  <textarea
                    id="customMessage" name="customMessage"
                    value={formData.customMessage} onChange={handleTextareaChange}
                    placeholder="Write your wish message here..."
                    rows={4} maxLength={500}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none resize-none text-sm ${errors.customMessage ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'}`}
                  />
                  <div className="mt-2 flex items-center justify-end">
                    <span className={`text-sm font-medium ${formData.customMessage.length > 450 ? 'text-amber-600' : 'text-gray-400'}`}>
                      {formData.customMessage.length} / 500
                    </span>
                  </div>
                  {errors.customMessage && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>{errors.customMessage}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Media Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Upload Media</label>
              {!formData.media ? (
                <div onDragOver={handleDragOver} onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 ${errors.media ? 'border-red-400 bg-red-50/50' : 'border-gray-300'}`}
                  onClick={() => document.getElementById('media-upload')?.click()}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-upload-cloud-line text-3xl text-purple-600"></i>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">Drag & drop or click to browse</p>
                  <p className="text-sm text-gray-500">JPG, PNG, MP4 • Max 5MB</p>
                  <input type="file" id="media-upload" name="media" accept="image/jpeg,image/png,video/mp4" onChange={handleFileChange} className="hidden" />
                </div>
              ) : (
                <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50/50">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {formData.media.type.startsWith('image/') ? (
                        <img src={URL.createObjectURL(formData.media)} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <i className="ri-video-line text-2xl text-purple-600"></i>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{formData.media.name}</p>
                      <p className="text-sm text-gray-500">{(formData.media.size / (1024 * 1024)).toFixed(2)} MB</p>
                      {isUploading && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                          </div>
                        </div>
                      )}
                      {!isUploading && uploadProgress === 100 && (
                        <div className="mt-2 flex items-center gap-1 text-green-600 text-sm">
                          <i className="ri-checkbox-circle-fill w-4 h-4 flex items-center justify-center"></i>
                          <span>Upload complete</span>
                        </div>
                      )}
                    </div>
                    <button type="button" onClick={removeFile} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>
                </div>
              )}
              {errors.media && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>{errors.media}
                </p>
              )}
            </div>

            {/* Group Count */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">How many groups or recipients?</label>
              <div className="flex items-center gap-4">
                <button type="button"
                  onClick={() => setFormData(prev => ({ ...prev, numberOfGroups: Math.max(1, prev.numberOfGroups - 1) }))}
                  disabled={formData.numberOfGroups <= 1}
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${formData.numberOfGroups <= 1 ? 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed' : 'border-purple-500 bg-white text-purple-600 hover:bg-purple-50'}`}>
                  <i className="ri-subtract-line text-2xl"></i>
                </button>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-extrabold text-gray-900">{formData.numberOfGroups}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.numberOfGroups === 1
                      ? `${formData.recipientType === 'group' ? 'Group' : 'Recipient'} Selected`
                      : `${formData.recipientType === 'group' ? 'Groups' : 'Recipients'} Selected`}
                  </div>
                </div>
                <button type="button"
                  onClick={() => setFormData(prev => ({ ...prev, numberOfGroups: Math.min(10, prev.numberOfGroups + 1) }))}
                  disabled={formData.numberOfGroups >= 10}
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${formData.numberOfGroups >= 10 ? 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed' : 'border-purple-500 bg-white text-purple-600 hover:bg-purple-50'}`}>
                  <i className="ri-add-line text-2xl"></i>
                </button>
              </div>
              <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Estimated Price:</span>
                  <span className="text-2xl font-extrabold text-purple-600">₹{estimatedPrice}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">₹9 × {formData.numberOfGroups} {formData.numberOfGroups === 1 ? (formData.recipientType === 'group' ? 'group' : 'recipient') : (formData.recipientType === 'group' ? 'groups' : 'recipients')}</p>
                <p className="text-xs text-gray-500 mt-1">Final pricing will be shown in checkout</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          {(formData.recipientName && formData.eventDate && formData.deliveryTime) && (
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl border-2 border-purple-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-file-list-3-line text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-600">Recipient Name:</span>
                  <span className="text-sm font-semibold text-gray-900 text-right">{formData.recipientName}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-600">Delivery:</span>
                  <span className="text-sm font-semibold text-gray-900 text-right">{formatDate(formData.eventDate)} – {formatTime(formData.deliveryTime)}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-600">{formData.recipientType === 'group' ? 'Groups:' : 'Recipients:'}</span>
                  <span className="text-sm font-semibold text-gray-900">{formData.numberOfGroups}</span>
                </div>
                {formData.messageType === 'default' && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Message:</span>
                    <span className="text-sm font-semibold text-purple-700 text-right">{DEFAULT_WISHES.find(w => w.id === selectedDefaultMessage)?.label}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-purple-200 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">Estimated Price:</span>
                  <span className="text-2xl font-extrabold text-purple-600">₹{estimatedPrice}</span>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            <button type="submit" disabled={!isFormValid() || isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all whitespace-nowrap ${isFormValid() && !isSubmitting ? 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                  Processing...
                </span>
              ) : 'Continue to Checkout'}
            </button>
          </div>
        </form>

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
