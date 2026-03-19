'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a0533] via-[#2d1060] to-[#1a0533] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-500 to-yellow-400 rounded-xl shadow-lg">
                <i className="ri-gift-2-fill text-white text-lg" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">WishHapp</span>
            </div>
            <p className="text-purple-200 leading-relaxed text-sm mb-6">
              Schedule WhatsApp wishes automatically for groups and personal chats. Make every celebration unforgettable.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all duration-200">
                <i className="ri-whatsapp-line text-green-400 text-base" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all duration-200">
                <i className="ri-instagram-line text-pink-400 text-base" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all duration-200">
                <i className="ri-twitter-x-line text-white text-base" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-yellow-400 inline-block rounded-full" />
              Product
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Schedule a Wish', href: '/book' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-purple-200 hover:text-yellow-300 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-purple-400 group-hover:text-yellow-300 transition-colors duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-yellow-400 inline-block rounded-full" />
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Refund Policy', href: '/refund-policy' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-purple-200 hover:text-yellow-300 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-purple-400 group-hover:text-yellow-300 transition-colors duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-yellow-400 inline-block rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-2">
                  <i className="ri-mail-line text-purple-300 text-base mt-0.5" />
                  <a href="mailto:support@wishhapp.in" className="text-purple-200 hover:text-yellow-300 transition-colors duration-200 text-sm">
                    support@wishhapp.in
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <i className="ri-building-line text-purple-300 text-base mt-0.5" />
                  <div className="text-purple-200 text-sm">
                    <div className="font-semibold text-white mb-1">WishHapp</div>
                    <div className="text-xs">Powering WishHapp</div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-purple-200 text-xs leading-relaxed">
                <i className="ri-shield-check-line text-green-400 mr-1" />
                Secure payments via Razorpay. Your data is always protected.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-300 text-sm">
            © 2026 <span className="text-white font-semibold">WishHapp</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}