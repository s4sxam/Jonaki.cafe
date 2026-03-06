import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuExplorer from './components/MenuExplorer';
import CartDrawer from './components/CartDrawer';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FireflyBackground from './components/FireflyBackground';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-jonaki-bg selection:bg-jonaki-glow selection:text-jonaki-bg">
        <FireflyBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <MenuExplorer />
          <ContactSection />
          <LocationSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
