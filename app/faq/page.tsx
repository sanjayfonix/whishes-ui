import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQHero from './FAQHero';
import FAQAccordion from './FAQAccordion';
import FAQCTA from './FAQCTA';

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <FAQHero />
      <FAQAccordion />
      <FAQCTA />
      <Footer />
    </main>
  );
}