import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}