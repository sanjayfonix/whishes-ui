'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProductFeatures from '@/components/ProductFeatures';
import BotOnboarding from '@/components/BotOnboarding';
import Pricing from '@/components/Pricing';
import TrustSection from '@/components/TrustSection';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Hero />
        <HowItWorks />
        <ProductFeatures />
        <BotOnboarding />
        <Pricing />
        <TrustSection />
        <FAQ />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}