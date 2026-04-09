import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import TrustStrip from '@/components/TrustStrip/TrustStrip';
import Services from '@/components/Services/Services';
import Pricing from '@/components/Pricing/Pricing';
import Location from '@/components/Location/Location';
import Promo from '@/components/Promo/Promo';
import FAQ from '@/components/FAQ/FAQ';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Pricing />
      <Location />
      <Promo />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
