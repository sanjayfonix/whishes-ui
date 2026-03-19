import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHero from './PricingHero';
import FirstScheduleCard from './FirstScheduleCard';
import RenewalPlans from './RenewalPlans';
import HowPricingWorks from './HowPricingWorks';
import BotDeliveryExplanation from './BotDeliveryExplanation';
import PricingFAQ from './PricingFAQ';
import PricingCTA from './PricingCTA';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-yellow-50/20">
      <Navbar />
      <main className="pt-16">
        <PricingHero />
        <FirstScheduleCard />
        <RenewalPlans />
        <HowPricingWorks />
        <BotDeliveryExplanation />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}