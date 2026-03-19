'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (email === 'admin@wishhapp.com' && password === 'admin123') {
        router.push('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-2/5 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex flex-col justify-center items-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://public.readdy.ai/ai/img_res/0f0d7f13-ea54-4023-9386-06f304294242.png" 
              alt="WishHapp Logo" 
              className="h-16 w-auto drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            WishHapp Admin Panel
          </h1>
          
          <p className="text-lg text-purple-100 max-w-md">
            Manage events and monitor message delivery.
          </p>

          <div className="mt-12 space-y-3 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-purple-100">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-calendar-check-line text-xl"></i>
              </div>
              <span className="text-sm">Monitor scheduled events</span>
            </div>
            <div className="flex items-center gap-3 text-purple-100">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-bar-chart-box-line text-xl"></i>
              </div>
              <span className="text-sm">View delivery statuses</span>
            </div>
            <div className="flex items-center gap-3 text-purple-100">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-refresh-line text-xl"></i>
              </div>
              <span className="text-sm">Retry failed jobs</span>
            </div>
            <div className="flex items-center gap-3 text-purple-100">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-file-list-3-line text-xl"></i>
              </div>
              <span className="text-sm">Access delivery logs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 bg-gray-50 flex items-center justify-center px-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Admin Login
              </h2>
              <p className="text-sm text-gray-500">
                Enter your credentials to access the dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-mail-line text-gray-400"></i>
                    </div>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                      setError('');
                    }}
                    onBlur={handleEmailBlur}
                    required
                    disabled={isLoading}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                    } rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                    placeholder="admin@wishhapp.com"
                  />
                </div>
                {emailError && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-error-warning-line"></i>
                    </div>
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-lock-line text-gray-400"></i>
                    </div>
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer disabled:cursor-not-allowed"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400 hover:text-gray-600 transition-colors`}></i>
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !!emailError}
                className="w-full py-3 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </>
                )}
              </button>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-error-warning-fill"></i>
                    </div>
                    {error}
                  </p>
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                href="/"
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-left-line"></i>
                </div>
                <span>Back to User Panel</span>
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Restricted access • Internal use only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}