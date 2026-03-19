'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const mobileLinks = [
    ...navLinks,
    { label: 'About', href: '/about', type: 'link' },
    { label: 'Privacy Policy', href: '/privacy-policy', type: 'link' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions', type: 'link' },
    { label: 'Refund Policy', href: '/refund-policy', type: 'link' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <i className="ri-gift-2-fill text-white text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">WishHapp</span>
              <span className="text-[10px] text-gray-500 -mt-1">by WishHapp</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#5B2EFF] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#5B2EFF] transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-[#5B2EFF] transition-colors cursor-pointer">
              How It Works
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-[#5B2EFF] transition-colors cursor-pointer">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#5B2EFF] transition-colors cursor-pointer">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/book"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap inline-block"
            >
              Schedule a Wish
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/pricing" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="/#how-it-works" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              How It Works
            </Link>
            <Link href="/#faq" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              FAQ
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              Contact
            </Link>
            <Link
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold rounded-xl shadow-lg text-center whitespace-nowrap mt-4"
            >
              Schedule a Wish
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}